/* =========================================================
   〈物語〉 GUIDE — all content lives here.
   Edit this file to update adaptation status, orders, etc.
   ========================================================= */

/* ---------- Anime entries ---------- */
// mal: MyAnimeList anime id. q: search fallback used by the MAL loader if the id ever changes.
// mins: total runtime in minutes (approximate).
window.ANIME = {
  bake:      { title: "Bakemonogatari", jp: "化物語", year: 2009, eps: 15, mins: 360, kind: "TV", mal: 5081,  q: "Bakemonogatari", color: "#e60012",
               arcs: ["Hitagi Crab", "Mayoi Snail", "Suruga Monkey", "Nadeko Snake", "Tsubasa Cat"], kanji: "化" },
  nise:      { title: "Nisemonogatari", jp: "偽物語", year: 2012, eps: 11, mins: 264, kind: "TV", mal: 11597, q: "Nisemonogatari", color: "#f2b705",
               arcs: ["Karen Bee", "Tsukihi Phoenix"], kanji: "偽" },
  nekokuro:  { title: "Nekomonogatari (Black)", jp: "猫物語 (黒)", year: 2012, eps: 4, mins: 96, kind: "TV", mal: 15689, q: "Nekomonogatari Kuro", color: "#1a1a1a",
               arcs: ["Tsubasa Family"], kanji: "黒" },
  nekoshiro: { title: "Nekomonogatari (White)", jp: "猫物語 (白)", year: 2013, eps: 5, mins: 120, kind: "TV · Second Season", mal: 17074, q: "Monogatari Series: Second Season", color: "#d9d4c7",
               arcs: ["Tsubasa Tiger"], kanji: "白" },
  kabuki:    { title: "Kabukimonogatari", jp: "傾物語", year: 2013, eps: 4, mins: 96, kind: "TV · Second Season", mal: 17074, q: "Monogatari Series: Second Season", color: "#3a7d44",
               arcs: ["Mayoi Jiangshi"], kanji: "傾" },
  otori:     { title: "Otorimonogatari", jp: "囮物語", year: 2013, eps: 4, mins: 96, kind: "TV · Second Season", mal: 17074, q: "Monogatari Series: Second Season", color: "#e86fa0",
               arcs: ["Nadeko Medusa"], kanji: "囮" },
  oni:       { title: "Onimonogatari", jp: "鬼物語", year: 2013, eps: 4, mins: 96, kind: "TV · Second Season", mal: 17074, q: "Monogatari Series: Second Season", color: "#5b3fa6",
               arcs: ["Shinobu Time"], kanji: "鬼" },
  koi:       { title: "Koimonogatari", jp: "恋物語", year: 2013, eps: 6, mins: 144, kind: "TV · Second Season", mal: 17074, q: "Monogatari Series: Second Season", color: "#2b2b2b",
               arcs: ["Hitagi End"], kanji: "恋" },
  hana:      { title: "Hanamonogatari", jp: "花物語", year: 2014, eps: 5, mins: 120, kind: "TV", mal: 21855, q: "Hanamonogatari", color: "#2f6fb5",
               arcs: ["Suruga Devil"], kanji: "花" },
  tsuki:     { title: "Tsukimonogatari", jp: "憑物語", year: 2014, eps: 4, mins: 96, kind: "TV", mal: 28025, q: "Tsukimonogatari", color: "#8fb8de",
               arcs: ["Yotsugi Doll"], kanji: "憑" },
  owari:     { title: "Owarimonogatari", jp: "終物語", year: 2015, eps: 12, mins: 288, kind: "TV", mal: 31181, q: "Owarimonogatari", color: "#111111",
               arcs: ["Ōgi Formula", "Sodachi Riddle", "Sodachi Lost", "Shinobu Mail"], kanji: "終" },
  kizu1:     { title: "Kizumonogatari I: Tekketsu", jp: "傷物語 I 鉄血篇", year: 2016, eps: 1, mins: 64, kind: "Film", mal: 9260, q: "Kizumonogatari I: Tekketsu-hen", color: "#8c0f12",
               arcs: ["Koyomi Vamp (part 1)"], kanji: "鉄" },
  koyomi:    { title: "Koyomimonogatari", jp: "暦物語", year: 2016, eps: 12, mins: 150, kind: "Web shorts", mal: 32268, q: "Koyomimonogatari", color: "#c9a227",
               arcs: ["Twelve Koyomi shorts, Stone → Dead"], kanji: "暦" },
  kizu2:     { title: "Kizumonogatari II: Nekketsu", jp: "傷物語 II 熱血篇", year: 2016, eps: 1, mins: 69, kind: "Film", mal: 31757, q: "Kizumonogatari II: Nekketsu-hen", color: "#b3191e",
               arcs: ["Koyomi Vamp (part 2)"], kanji: "熱" },
  kizu3:     { title: "Kizumonogatari III: Reiketsu", jp: "傷物語 III 冷血篇", year: 2017, eps: 1, mins: 83, kind: "Film", mal: 31758, q: "Kizumonogatari III: Reiketsu-hen", color: "#5a0a0c",
               arcs: ["Koyomi Vamp (part 3)"], kanji: "冷" },
  owari2:    { title: "Owarimonogatari 2nd Season", jp: "終物語 下", year: 2017, eps: 7, mins: 168, kind: "TV", mal: 35247, q: "Owarimonogatari 2nd Season", color: "#3d3d3d",
               arcs: ["Mayoi Hell", "Hitagi Rendezvous", "Ōgi Dark"], kanji: "下" },
  zoku:      { title: "Zoku Owarimonogatari", jp: "続・終物語", year: 2018, eps: 6, mins: 144, kind: "Film / TV", mal: 36999, q: "Zoku Owarimonogatari", color: "#7aa6c2",
               arcs: ["Koyomi Reverse"], kanji: "続" },
  oms:       { title: "Off & Monster Season", jp: "オフ＆モンスターシーズン", year: 2024, eps: 14, mins: 336, kind: "Streaming", mal: null, q: "Monogatari Series: Off & Monster Season", color: "#f7f3e9",
               arcs: ["Tsukihi Undo", "Nadeko Draw", "Acerola Bon Appétit", "Shinobu Mustard"], kanji: "怪" },
  ogre:      { title: "Wazamonogatari: Karen Ogre", jp: "業物語 かれんオウガ", year: 2026, eps: null, mins: 0, kind: "Upcoming · Winter", mal: null, q: "Monogatari Series: Off & Monster Season (Shin Episode)", color: "#c2410c",
               arcs: ["Karen Ogre"], kanji: "業", upcoming: true },
};

/* ---------- Watch orders ---------- */
window.ORDERS = {
  first: {
    label: "First-timer", jp: "初見",
    note: "Release order, but with the Kizumonogatari trilogy watched back-to-back. You get Bakemonogatari's mystery first and the origin story once you're hooked. (The 2024 recut, Koyomi Vamp, can stand in for the trilogy.)",
    list: ["bake","nise","nekokuro","nekoshiro","kabuki","otori","oni","koi","hana","tsuki","owari","kizu1","kizu2","kizu3","koyomi","owari2","zoku","oms","ogre"],
  },
  release: {
    label: "Release", jp: "放送順",
    note: "Exactly how Japan watched it. Note that Hanamonogatari was pulled out of the Second Season broadcast and aired on its own the following summer.",
    list: ["bake","nise","nekokuro","nekoshiro","kabuki","otori","oni","koi","hana","tsuki","owari","kizu1","koyomi","kizu2","kizu3","owari2","zoku","oms","ogre"],
  },
  chrono: {
    label: "Chronological", jp: "時系列",
    note: "Approximate in-story order. Several seasons jump around internally (Nekomonogatari White overlaps Kabuki/Oni, Koyomimonogatari spans a whole year, Off & Monster hops between eras), so treat this as a rewatch route, not a first watch.",
    list: ["kizu1","kizu2","kizu3","nekokuro","bake","nise","kabuki","oni","nekoshiro","otori","koi","tsuki","owari","koyomi","owari2","zoku","hana","oms","ogre"],
  },
  novel: {
    label: "Novel", jp: "刊行順",
    note: "The order Nisio Isin published the books. Kizumonogatari comes second here, the way readers first met it.",
    list: ["bake","kizu1","kizu2","kizu3","nise","nekokuro","nekoshiro","kabuki","hana","otori","oni","koi","tsuki","koyomi","owari","owari2","zoku","oms","ogre"],
  },
};

/* Novel-only progress stages, appended after the anime in every order */
window.NOVEL_STAGES = [
  { id: "n-off",     label: "Read Off Season (novel-only stories)" },
  { id: "n-monster", label: "Read Monster Season" },
  { id: "n-family",  label: "Read Family Season" },
];

/* ---------- The macro map: all 31 Japanese volumes ----------
   status per story: "anime" (adapted), "next" (announced), "novel" (novel-only)
   unlock: progress id needed to reveal the story title */
window.SEASONS = [
  { id: "first",   name: "First Season",   jp: "ファーストシーズン", color: "#e60012", en: true,
    vols: [
      { n: 1,  title: "Bakemonogatari (上)", jp: "化物語 上", year: 2006, stories: [["Hitagi Crab","anime","bake"],["Mayoi Snail","anime","bake"],["Suruga Monkey","anime","bake"]] },
      { n: 2,  title: "Bakemonogatari (下)", jp: "化物語 下", year: 2006, stories: [["Nadeko Snake","anime","bake"],["Tsubasa Cat","anime","bake"]] },
      { n: 3,  title: "Kizumonogatari", jp: "傷物語", year: 2008, stories: [["Koyomi Vamp","anime","kizu1"]] },
      { n: 4,  title: "Nisemonogatari (上)", jp: "偽物語 上", year: 2008, stories: [["Karen Bee","anime","nise"]] },
      { n: 5,  title: "Nisemonogatari (下)", jp: "偽物語 下", year: 2009, stories: [["Tsukihi Phoenix","anime","nise"]] },
      { n: 6,  title: "Nekomonogatari (Black)", jp: "猫物語 黒", year: 2010, stories: [["Tsubasa Family","anime","nekokuro"]] },
    ]},
  { id: "second",  name: "Second Season",  jp: "セカンドシーズン", color: "#2f6fb5", en: true,
    vols: [
      { n: 7,  title: "Nekomonogatari (White)", jp: "猫物語 白", year: 2010, stories: [["Tsubasa Tiger","anime","nekoshiro"]] },
      { n: 8,  title: "Kabukimonogatari", jp: "傾物語", year: 2010, stories: [["Mayoi Jiangshi","anime","kabuki"]] },
      { n: 9,  title: "Hanamonogatari", jp: "花物語", year: 2011, stories: [["Suruga Devil","anime","hana"]] },
      { n: 10, title: "Otorimonogatari", jp: "囮物語", year: 2011, stories: [["Nadeko Medusa","anime","otori"]] },
      { n: 11, title: "Onimonogatari", jp: "鬼物語", year: 2011, stories: [["Shinobu Time","anime","oni"]] },
      { n: 12, title: "Koimonogatari", jp: "恋物語", year: 2011, stories: [["Hitagi End","anime","koi"]] },
    ]},
  { id: "final",   name: "Final Season",   jp: "ファイナルシーズン", color: "#111111", en: true,
    vols: [
      { n: 13, title: "Tsukimonogatari", jp: "憑物語", year: 2012, stories: [["Yotsugi Doll","anime","tsuki"]] },
      { n: 14, title: "Koyomimonogatari", jp: "暦物語", year: 2013, stories: [["Koyomi Stone → Koyomi Dead (12 shorts)","anime","koyomi"]] },
      { n: 15, title: "Owarimonogatari (上)", jp: "終物語 上", year: 2013, stories: [["Ōgi Formula","anime","owari"],["Sodachi Riddle","anime","owari"],["Sodachi Lost","anime","owari"]] },
      { n: 16, title: "Owarimonogatari (中)", jp: "終物語 中", year: 2014, stories: [["Shinobu Mail","anime","owari"]] },
      { n: 17, title: "Owarimonogatari (下)", jp: "終物語 下", year: 2014, stories: [["Mayoi Hell","anime","owari2"],["Hitagi Rendezvous","anime","owari2"],["Ōgi Dark","anime","owari2"]] },
      { n: 18, title: "Zoku Owarimonogatari", jp: "続・終物語", year: 2014, stories: [["Koyomi Reverse","anime","zoku"]] },
    ]},
  { id: "off",     name: "Off Season",     jp: "オフシーズン", color: "#c2410c", en: false,
    vols: [
      { n: 19, title: "Orokamonogatari", jp: "愚物語", year: 2015, stories: [["Sodachi Fiasco","novel","n-off"],["Suruga Bonehead","novel","n-off"],["Tsukihi Undo","anime","oms"]] },
      { n: 20, title: "Wazamonogatari", jp: "業物語", year: 2016, stories: [["The Beautiful Princess (fairy tale)","novel","n-off"],["Acerola Bon Appétit","anime","oms"],["Karen Ogre","next","n-off"],["Tsubasa Sleeping","novel","n-off"]] },
      { n: 21, title: "Nademonogatari", jp: "撫物語", year: 2016, stories: [["Nadeko Draw","anime","oms"]] },
      { n: 22, title: "Musubimonogatari", jp: "結物語", year: 2017, stories: [["Zenka Mermaid","novel","n-off"],["Nozomi Golem","novel","n-off"],["Mitome Wolf","novel","n-off"],["Tsuzura Human","novel","n-off"]] },
    ]},
  { id: "monster", name: "Monster Season", jp: "モンスターシーズン", color: "#5b3fa6", en: false,
    vols: [
      { n: 23, title: "Shinobumonogatari", jp: "忍物語", year: 2017, stories: [["Shinobu Mustard","anime","oms"]] },
      { n: 24, title: "Yoimonogatari", jp: "宵物語", year: 2018, stories: [["Mayoi Snail","novel","n-monster"],["Mayoi Snake","novel","n-monster"]] },
      { n: 25, title: "Amarimonogatari", jp: "余物語", year: 2019, stories: [["Yotsugi Buddy","novel","n-monster"],["Yotsugi Shadow","novel","n-monster"]] },
      { n: 26, title: "Ōgimonogatari", jp: "扇物語", year: 2020, stories: [["Ōgi Light","novel","n-monster"],["Ōgi Fright","novel","n-monster"]] },
      { n: 27, title: "Shinomonogatari (上)", jp: "死物語 上", year: 2021, stories: [["Shinobu Suicide","novel","n-monster"]] },
      { n: 28, title: "Shinomonogatari (下)", jp: "死物語 下", year: 2021, stories: [["Nadeko Around","novel","n-monster"]] },
    ]},
  { id: "family",  name: "Family Season",  jp: "ファミリーシーズン", color: "#3a7d44", en: false, ongoing: true,
    vols: [
      { n: 29, title: "Ikusamonogatari", jp: "戦物語", year: 2023, stories: [["Hitagi Honeymoon","novel","n-family"]] },
      { n: 30, title: "Tsugimonogatari", jp: "接物語", year: 2025, stories: [["Yotsugi Frank","novel","n-family"]] },
      { n: 31, title: "Torimonogatari", jp: "鳥物語", year: 2026, stories: [["Yotsugi Rebake","novel","n-family"]] },
    ]},
];

/* ---------- Oddity / arc index ---------- */
window.ODDITIES = [
  { arc: "Hitagi Crab",    kanji: "蟹", oddity: "Heavy Stone Crab", jpOdd: "おもし蟹",   entry: "bake",      color: "#e60012", hook: "The class ghost weighs almost nothing. Literally." },
  { arc: "Mayoi Snail",    kanji: "蝸", oddity: "Lost Cow",         jpOdd: "迷い牛",     entry: "bake",      color: "#e8a33d", hook: "Mother's Day, a park bench, and a girl who can't find her way." },
  { arc: "Suruga Monkey",  kanji: "猿", oddity: "Rainy Devil",      jpOdd: "レイニー・デヴィル", entry: "bake", color: "#4b6b8a", hook: "A wish, made with a borrowed hand." },
  { arc: "Nadeko Snake",   kanji: "蛇", oddity: "Jagirinawa",       jpOdd: "蛇切縄",     entry: "bake",      color: "#e86fa0", hook: "A mountain shrine and a girl hiding under her bangs." },
  { arc: "Tsubasa Cat",    kanji: "猫", oddity: "Sawari Neko",      jpOdd: "障り猫",     entry: "bake",      color: "#bcbcbc", hook: "The perfect class president has a Golden Week she won't remember." },
  { arc: "Koyomi Vamp",    kanji: "血", oddity: "Vampire",          jpOdd: "吸血鬼",     entry: "kizu1",     color: "#8c0f12", hook: "Spring break. Something legendary is bleeding under a streetlight." },
  { arc: "Karen Bee",      kanji: "蜂", oddity: "Enclosing Fire Bee", jpOdd: "囲い火蜂", entry: "nise",      color: "#f2b705", hook: "Teenage justice runs a fever, and a man in black is selling something." },
  { arc: "Tsukihi Phoenix",kanji: "鳥", oddity: "Shide Bird",       jpOdd: "しでの鳥",   entry: "nise",      color: "#ff7a1a", hook: "The youngest sister, and what she has always been." },
  { arc: "Tsubasa Family", kanji: "家", oddity: "Black Hanekawa",   jpOdd: "ブラック羽川", entry: "nekokuro", color: "#9ca3af", hook: "Golden Week, from the inside." },
  { arc: "Tsubasa Tiger",  kanji: "虎", oddity: "Kako",             jpOdd: "苛虎",       entry: "nekoshiro", color: "#d9d4c7", hook: "Hanekawa narrates. Something is burning." },
  { arc: "Mayoi Jiangshi", kanji: "僵", oddity: "Jiangshi",         jpOdd: "キョンシー",  entry: "kabuki",    color: "#3a7d44", hook: "Summer homework, a trip back in time, and a ruined world." },
  { arc: "Nadeko Medusa",  kanji: "髪", oddity: "Medusa",           jpOdd: "メドゥーサ",  entry: "otori",     color: "#ff4fa3", hook: "The shyest girl in the series, cornered." },
  { arc: "Shinobu Time",   kanji: "闇", oddity: "Darkness",         jpOdd: "くらやみ",   entry: "oni",       color: "#5b3fa6", hook: "Shinobu finally tells her own story." },
  { arc: "Hitagi End",     kanji: "嘘", oddity: "A Liar",           jpOdd: "詐欺師",     entry: "koi",       color: "#8a8580", hook: "Narrated by someone you should not trust." },
  { arc: "Suruga Devil",   kanji: "悪", oddity: "Devil",            jpOdd: "レイニー・デヴィル", entry: "hana", color: "#2f6fb5", hook: "Kanbaru's last year, and her left arm's last wish." },
  { arc: "Yotsugi Doll",   kanji: "鏡", oddity: "Shikigami",        jpOdd: "式神",       entry: "tsuki",     color: "#8fb8de", hook: "Araragi stops showing up in mirrors." },
  { arc: "Ōgi Formula",    kanji: "扇", oddity: "A Locked Classroom", jpOdd: "教室",         entry: "owari",     color: "#cfcac0", hook: "A classroom with no way out, and a new transfer student." },
  { arc: "Koyomi Reverse", kanji: "反", oddity: "Mirror World",     jpOdd: "鏡の国",     entry: "zoku",      color: "#7aa6c2", hook: "A world where everyone is a little bit flipped." },
];

/* ---------- Characters ----------
   mal: name as MyAnimeList lists it (Last, First), used to find the portrait.
   meet: any of these entries reveals the character. odd: oddity, revealed with oddUnlock. */
window.CHARACTERS = [
  { id: "koyomi",  name: "Koyomi Araragi",     mal: "Araragi, Koyomi",     meet: ["bake","kizu1"], odd: "Vampire (mostly ex-)", oddUnlock: ["bake","kizu1"],
    blurb: "Third-year, narrator, and a boy who cannot stop helping people. A little bit of a vampire.", color: "#e60012" },
  { id: "hitagi",  name: "Hitagi Senjōgahara", mal: "Senjougahara, Hitagi", meet: ["bake"], odd: "Heavy Stone Crab", oddUnlock: ["bake"],
    blurb: "The sickly girl at the back of class. Carries stationery like a weapon, and uses it like one.", color: "#7b2d8e" },
  { id: "tsubasa", name: "Tsubasa Hanekawa",   mal: "Hanekawa, Tsubasa",   meet: ["bake","kizu1"], odd: "Sawari Neko", oddUnlock: ["bake","nekokuro"],
    blurb: "Class president among class presidents. She doesn't know everything, only what she knows.", color: "#d9d4c7" },
  { id: "mayoi",   name: "Mayoi Hachikuji",    mal: "Hachikuji, Mayoi",    meet: ["bake"], odd: "Lost Cow", oddUnlock: ["bake"],
    blurb: "A fifth-grader with an enormous backpack who has been lost for a while. Will bite. Will misname you.", color: "#e8a33d" },
  { id: "suruga",  name: "Suruga Kanbaru",     mal: "Kanbaru, Suruga",     meet: ["bake"], odd: "Rainy Devil", oddUnlock: ["bake"],
    blurb: "Basketball star, Hitagi's junior, keeps her left arm wrapped. Very loud, very forward.", color: "#4b6b8a" },
  { id: "nadeko",  name: "Nadeko Sengoku",     mal: "Sengoku, Nadeko",     meet: ["bake"], odd: "Jagirinawa", oddUnlock: ["bake"],
    blurb: "A shy middle schooler, friend of Araragi's sisters, who hides behind her bangs and her hat.", color: "#e86fa0" },
  { id: "shinobu", name: "Shinobu Oshino",     mal: "Oshino, Shinobu",     meet: ["bake","kizu1"], odd: "Vampire", oddUnlock: ["bake","kizu1"],
    blurb: "A blonde girl who lives in an abandoned cram school and won't speak a word. Loves donuts.", color: "#f2c94c" },
  { id: "meme",    name: "Meme Oshino",        mal: "Oshino, Meme",        meet: ["bake","kizu1"], odd: "Specialist", oddUnlock: ["bake","kizu1"],
    blurb: "Aloha shirt, no fixed address, expert in oddities. He'll help, but you save yourself.", color: "#3a7d44" },
  { id: "karen",   name: "Karen Araragi",      mal: "Araragi, Karen",      meet: ["nise"], odd: "Enclosing Fire Bee", oddUnlock: ["nise"],
    blurb: "Elder little sister, martial artist, one half of the Fire Sisters of Justice.", color: "#f2b705" },
  { id: "tsukihi", name: "Tsukihi Araragi",    mal: "Araragi, Tsukihi",    meet: ["nise"], odd: "Shide Bird", oddUnlock: ["nise"],
    blurb: "Younger little sister, the brains of the Fire Sisters, changes hairstyles by the scene.", color: "#ff7a1a" },
  { id: "kaiki",   name: "Deishū Kaiki",       mal: "Kaiki, Deishuu",      meet: ["nise"], odd: "Con man", oddUnlock: ["nise"],
    blurb: "Dressed for a funeral, every day. Says he's a fake. Believes in money.", color: "#2b2b2b" },
  { id: "yotsugi", name: "Yotsugi Ononoki",    mal: "Ononoki, Yotsugi",    meet: ["nise"], odd: "Shikigami", oddUnlock: ["tsuki"],
    blurb: "Expressionless, monotone, makes a peace sign. Hits extremely hard.", color: "#8fb8de" },
  { id: "kagenui", name: "Yozuru Kagenui",     mal: "Kagenui, Yozuru",     meet: ["nise"], odd: "Specialist", oddUnlock: ["nise"],
    blurb: "A specialist in immortal oddities who refuses to walk on the ground.", color: "#c2410c" },
  { id: "rouka",   name: "Rōka Numachi",       mal: "Numachi, Rouka",      meet: ["hana"], odd: "Collector", oddUnlock: ["hana"],
    blurb: "Kanbaru's old court rival, back in town and taking on other people's misfortunes.", color: "#2f6fb5" },
  { id: "ougi",    name: "Ōgi Oshino",         mal: "Oshino, Ougi",        meet: ["owari"], odd: "???", oddUnlock: ["owari2"],
    blurb: "A transfer student who smiles too much and insists that you know nothing.", color: "#111111" },
  { id: "sodachi", name: "Sodachi Oikura",     mal: "Oikura, Sodachi",     meet: ["owari"], odd: "None", oddUnlock: ["owari"],
    blurb: "A former classmate who hates Araragi with total, mathematical certainty.", color: "#6b7280" },
  { id: "gaen",    name: "Izuko Gaen",         mal: "Gaen, Izuko",         meet: ["owari2"], odd: "Knows everything", oddUnlock: ["owari2"],
    blurb: "The specialist's specialist. She knows everything, and she'll tell you so.", color: "#a16207" },
];

/* Relationship web edges: [a, b, label, unlock(any of)] */
window.EDGES = [
  ["koyomi","hitagi","girlfriend",["bake"]],
  ["koyomi","tsubasa","the friend he owes everything",["bake","kizu1"]],
  ["koyomi","shinobu","bound by blood",["bake","kizu1"]],
  ["koyomi","mayoi","bickering best buds",["bake"]],
  ["koyomi","nadeko","sisters' childhood friend",["bake"]],
  ["koyomi","meme","his specialist",["bake","kizu1"]],
  ["meme","shinobu","keeps her in the cram school",["bake"]],
  ["hitagi","suruga","middle-school senior & junior",["bake"]],
  ["koyomi","karen","little sister",["nise"]],
  ["koyomi","tsukihi","little sister",["nise"]],
  ["karen","tsukihi","Fire Sisters",["nise"]],
  ["hitagi","kaiki","the con man from her past",["nise"]],
  ["kagenui","yotsugi","partners",["nise"]],
  ["tsukihi","yotsugi","under her watch",["tsuki"]],
  ["kaiki","nadeko","the job",["koi"]],
  ["suruga","rouka","old rivals",["hana"]],
  ["koyomi","sodachi","old classmate",["owari"]],
  ["suruga","ougi","Kanbaru's junior",["owari"]],
  ["koyomi","ougi","???",["owari2"]],
  ["gaen","meme","same college club",["owari2"]],
  ["gaen","kaiki","same college club",["owari2"]],
  ["gaen","kagenui","same college club",["owari2"]],
  ["nadeko","yotsugi","a new duo",["oms"]],
];

/* ---------- Quiz: Which oddity are you? ---------- */
window.QUIZ = [
  { q: "Someone asks you for help with something you can't fix.", a: [
      ["You help anyway, at your own expense.", { vamp: 2, bee: 1 }],
      ["You tell them plainly that they'll have to save themselves.", { crab: 2 }],
      ["You quietly do it, perfectly, and never mention it.", { cat: 2 }],
      ["You get lost on the way there.", { snail: 2 }] ] },
  { q: "Your ideal Saturday:", a: [
      ["Training until your legs give out.", { monkey: 2, bee: 1 }],
      ["Drawing alone in your room. Do not knock.", { snake: 2 }],
      ["Reading every book in the library, in order.", { cat: 2 }],
      ["Wandering a neighborhood you've never walked.", { snail: 2, phoenix: 1 }] ] },
  { q: "Pick an object.", a: [
      ["A stapler.", { crab: 2 }],
      ["A giant backpack.", { snail: 2 }],
      ["A bandaged left arm.", { monkey: 2 }],
      ["A box of donuts.", { vamp: 2 }] ] },
  { q: "The thing you're most afraid people will see:", a: [
      ["How much you actually want.", { monkey: 2, snake: 1 }],
      ["That you've already been hurt.", { crab: 2 }],
      ["Your darker half.", { cat: 2 }],
      ["That you'd come back no matter what.", { phoenix: 2, vamp: 1 }] ] },
  { q: "In a group project you are…", a: [
      ["The one who decides what's right.", { bee: 2 }],
      ["The one everyone underestimates.", { snake: 2, phoenix: 1 }],
      ["The one who carries it all.", { cat: 1, vamp: 2 }],
      ["The one cracking jokes in the margins.", { snail: 2 }] ] },
];
window.QUIZ_RESULTS = {
  crab:    { arc: "Hitagi Crab",     kanji: "蟹", text: "You've set something heavy down and decided not to pick it back up. Sharp exterior, honest underneath. You'd rather be blunt than be lied to." },
  snail:   { arc: "Mayoi Snail",     kanji: "蝸", text: "Playful, quick, and always somewhere slightly off the map. You make strangers feel like old friends, and you misremember their names on purpose." },
  monkey:  { arc: "Suruga Monkey",   kanji: "猿", text: "Fast, bold, and driven by wants you'd never say out loud. Careful what you wish for. You already know the rest." },
  snake:   { arc: "Nadeko Snake",    kanji: "蛇", text: "Quiet, underestimated, and harboring a whole inner world. When you finally say what you want, it will be enormous." },
  cat:     { arc: "Tsubasa Cat",     kanji: "猫", text: "Capable, composed, and carrying more than anyone knows. You don't know everything. Just what you know." },
  bee:     { arc: "Karen Bee",       kanji: "蜂", text: "You run hot on justice. You'll fight for anyone, sometimes before you know who's right. Fever optional." },
  phoenix: { arc: "Tsukihi Phoenix", kanji: "鳥", text: "Resilient to a fault. Whatever happens, you come back, a little changed, and rarely the way anyone expected." },
  vamp:    { arc: "Koyomi Vamp",     kanji: "血", text: "You'd give anything to help, including pieces of yourself. Generous, reckless, and very bad at accepting thanks." },
};

/* ---------- Hanekawa FAQ ---------- */
window.FAQ = [
  ["Where do I start?", "Bakemonogatari. Every route in this guide begins there except chronological order, and chronological is a rewatch route."],
  ["Do I have to watch Kizumonogatari before Nisemonogatari?", "No. Bakemonogatari drops hints about spring break on purpose. Watching the films after Bake or Nise is the most popular choice; watching them first trades mystery for clarity."],
  ["Can I skip Koyomimonogatari?", "You can, but don't. The twelve shorts are light, and a couple of them set up things that matter in Owarimonogatari."],
  ["Is the anime finished?", "The main story is fully animated through Zoku Owarimonogatari. Everything after it, Off, Monster, and Family Season, is partially animated or novel-only, and the next anime arc, Karen Ogre, is announced for winter."],
  ["Can I read the books in English?", "Officially, through Zoku Owarimonogatari (the end of the main story). Off Season onward has no official English release yet."],
  ["What's the deal with the flashing text?", "That's Shaft's signature style, frames of text that flicker by too fast to read. Pause and read them; they're often jokes. On this page, you can turn them off in the top bar."],
];

/* ---------- Ōgi's corner (gated) ---------- */
window.OUGI = [
  { unlock: ["owari"],  q: "Why does a transfer student keep turning up wherever Araragi has a doubt?" },
  { unlock: ["owari"],  q: "Count the people who have ever actually seen Ōgi and someone else in the same room." },
  { unlock: ["owari2"], q: "\"I don't know anything. You're the one who knows.\" Who is the line really for?" },
  { unlock: ["zoku"],   q: "Zoku Owarimonogatari flips everyone. Who stays exactly the same?" },
  { unlock: ["n-monster"], q: "Ōgimonogatari puts her name on the cover. What changes when she's the subject instead of the question?" },
];
