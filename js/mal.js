/* =========================================================
   MyAnimeList image loader (via the Jikan API).
   1. data/mal.json  — prebuilt by scripts/fetch-mal.mjs (fast, preferred)
   2. localStorage   — cache of anything fetched live (7 days)
   3. Jikan live     — throttled fallback, ~1 request / 450ms
   Anything that can't load falls back to a kanji title tile.
   ========================================================= */
(function () {
  const JIKAN = "https://api.jikan.moe/v4";
  const CACHE_KEY = "mono-mal-cache-v1";
  const TTL = 7 * 24 * 3600 * 1000;

  const store = {
    get() { try { const c = JSON.parse(localStorage.getItem(CACHE_KEY) || "null"); return c && Date.now() - c.t < TTL ? c : null; } catch { return null; } },
    set(data) { try { localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), ...data })); } catch {} },
  };

  const norm = (s) => (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/ou/g, "o").replace(/uu/g, "u").replace(/[^a-z]/g, "");

  // throttled fetch queue
  let chain = Promise.resolve();
  function jikan(path) {
    const p = chain.then(async () => {
      for (let attempt = 0; attempt < 3; attempt++) {
        const r = await fetch(JIKAN + path);
        if (r.status === 429) { await new Promise((res) => setTimeout(res, 1200)); continue; }
        if (!r.ok) throw new Error(r.status);
        return r.json();
      }
      throw new Error("rate limited");
    });
    chain = p.catch(() => {}).then(() => new Promise((res) => setTimeout(res, 450)));
    return p;
  }

  const firstWord = (q) => norm(q.split(/[:(]/)[0]);

  async function resolveAnime(entry) {
    if (entry.mal) {
      try {
        const { data } = await jikan(`/anime/${entry.mal}`);
        const titles = [data.title, data.title_english, ...(data.titles || []).map((t) => t.title)].map(norm).join("|");
        if (titles.includes(firstWord(entry.q))) return { id: data.mal_id, img: data.images?.webp?.large_image_url || data.images?.jpg?.large_image_url, url: data.url };
      } catch {}
    }
    const { data } = await jikan(`/anime?q=${encodeURIComponent(entry.q)}&limit=8`);
    const want = norm(entry.q);
    const hit = data.find((d) => norm(d.title) === want || norm(d.title_english) === want) || data[0];
    return hit ? { id: hit.mal_id, img: hit.images?.webp?.large_image_url || hit.images?.jpg?.large_image_url, url: hit.url } : null;
  }

  async function loadLive(have) {
    const out = { anime: { ...(have.anime || {}) }, characters: { ...(have.characters || {}) } };
    const byMal = {};
    for (const [key, entry] of Object.entries(window.ANIME)) {
      if (out.anime[key]) continue;
      const cacheKey = entry.mal || entry.q;
      try {
        byMal[cacheKey] = byMal[cacheKey] || (await resolveAnime(entry));
        if (byMal[cacheKey]) { out.anime[key] = byMal[cacheKey]; MAL.emit("anime", key, byMal[cacheKey]); }
      } catch {}
    }
    store.set(out);
    // characters: pull casts from a few seasons that together cover the roster
    const missing = window.CHARACTERS.filter((c) => !out.characters[c.id]);
    if (missing.length) {
      const castSources = ["bake", "nise", "hana", "owari", "owari2"].map((k) => out.anime[k]?.id).filter(Boolean);
      for (const id of [...new Set(castSources)]) {
        if (!window.CHARACTERS.some((c) => !out.characters[c.id])) break;
        try {
          const { data } = await jikan(`/anime/${id}/characters`);
          for (const c of window.CHARACTERS) {
            if (out.characters[c.id]) continue;
            const hit = data.find((d) => norm(d.character.name) === norm(c.mal));
            if (hit) {
              out.characters[c.id] = { id: hit.character.mal_id, img: hit.character.images?.webp?.image_url || hit.character.images?.jpg?.image_url, url: hit.character.url };
              MAL.emit("character", c.id, out.characters[c.id]);
            }
          }
          store.set(out);
        } catch {}
      }
    }
    return out;
  }

  const listeners = [];
  const MAL = {
    data: { anime: {}, characters: {} },
    on(fn) { listeners.push(fn); },
    emit(type, key, val) { listeners.forEach((fn) => fn(type, key, val)); },
    async init() {
      let built = null;
      try { const r = await fetch("data/mal.json", { cache: "no-cache" }); if (r.ok) built = await r.json(); } catch {}
      const cached = store.get();
      const merged = {
        anime: { ...(cached?.anime || {}), ...(built?.anime || {}) },
        characters: { ...(cached?.characters || {}), ...(built?.characters || {}) },
      };
      MAL.data = merged;
      for (const [k, v] of Object.entries(merged.anime)) MAL.emit("anime", k, v);
      for (const [k, v] of Object.entries(merged.characters)) MAL.emit("character", k, v);
      const complete = Object.keys(window.ANIME).every((k) => merged.anime[k]) && window.CHARACTERS.every((c) => merged.characters[c.id]);
      if (!complete) loadLive(merged).then((d) => (MAL.data = d)).catch(() => {});
    },
  };
  window.MAL = MAL;
})();
