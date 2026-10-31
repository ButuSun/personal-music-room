const songs = [
  {
    "id": "workout-1",
    "title": "거짓말（谎言）",
    "artist": "BIGBANG",
    "stage": "热身",
    "style": "流行",
    "scenes": [
      "健身",
      "通勤"
    ],
    "note": "原有歌单"
  },
  {
    "id": "workout-2",
    "title": "红莲华",
    "artist": "LiSA",
    "stage": "冲刺",
    "style": "摇滚",
    "scenes": [
      "健身"
    ],
    "note": "原有歌单"
  },
  {
    "id": "workout-3",
    "title": "超级冠军",
    "artist": "鹿晗",
    "stage": "力量",
    "style": "流行",
    "scenes": [
      "健身"
    ],
    "note": "原有歌单"
  },
  {
    "id": "workout-4",
    "title": "优雅",
    "artist": "王鹤棣",
    "stage": "热身",
    "style": "流行",
    "scenes": [
      "健身",
      "通勤"
    ],
    "note": "原有歌单"
  },
  {
    "id": "workout-5",
    "title": "残響散歌",
    "artist": "Aimer",
    "stage": "冲刺",
    "style": "摇滚",
    "scenes": [
      "健身"
    ],
    "note": "原有歌单"
  },
  {
    "id": "workout-6",
    "title": "Psychic",
    "artist": "张艺兴",
    "stage": "力量",
    "style": "电子流行",
    "scenes": [
      "健身"
    ],
    "note": "原有歌单"
  },
  {
    "id": "workout-7",
    "title": "Prosecco",
    "artist": "Patrik Jean",
    "stage": "热身",
    "style": "流行",
    "scenes": [
      "健身",
      "通勤"
    ],
    "note": "原有歌单"
  },
  {
    "id": "workout-8",
    "title": "Shivers",
    "artist": "Ed Sheeran",
    "stage": "有氧",
    "style": "流行",
    "scenes": [
      "健身"
    ],
    "note": "原有歌单"
  },
  {
    "id": "workout-9",
    "title": "Hey Mamma",
    "artist": "Sunstroke Project",
    "stage": "有氧",
    "style": "电子",
    "scenes": [
      "健身"
    ],
    "note": "原有歌单"
  },
  {
    "id": "workout-10",
    "title": "Young boss 2.0",
    "artist": "Lambert凌杰 / 十七草",
    "stage": "力量",
    "style": "说唱",
    "scenes": [
      "健身"
    ],
    "note": "原有歌单"
  },
  {
    "id": "workout-11",
    "title": "100Ways (Live)",
    "artist": "段旭宇 / S.K.Y林陌 / 罗杰",
    "stage": "力量",
    "style": "流行",
    "scenes": [
      "健身"
    ],
    "note": "原有歌单"
  },
  {
    "id": "workout-12",
    "title": "Somebody New",
    "artist": "Olly Murs",
    "stage": "热身",
    "style": "流行",
    "scenes": [
      "健身",
      "通勤"
    ],
    "note": "原有歌单"
  },
  {
    "id": "workout-13",
    "title": "Papillon",
    "artist": "王嘉尔",
    "stage": "力量",
    "style": "说唱",
    "scenes": [
      "健身"
    ],
    "note": "原有歌单"
  },
  {
    "id": "workout-14",
    "title": "There's Nothing Holdin' Me Back",
    "artist": "Shawn Mendes",
    "stage": "有氧",
    "style": "流行",
    "scenes": [
      "健身"
    ],
    "note": "原有歌单"
  },
  {
    "id": "workout-15",
    "title": "100 Ways",
    "artist": "王嘉尔",
    "stage": "热身",
    "style": "流行",
    "scenes": [
      "健身",
      "通勤"
    ],
    "note": "原有歌单"
  },
  {
    "id": "workout-16",
    "title": "Physical",
    "artist": "Dua Lipa",
    "stage": "有氧",
    "style": "流行",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 稳定节奏伴随运动"
  },
  {
    "id": "workout-17",
    "title": "Don't Start Now",
    "artist": "Dua Lipa",
    "stage": "有氧",
    "style": "流行",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 稳定节奏伴随运动"
  },
  {
    "id": "workout-18",
    "title": "Blinding Lights",
    "artist": "The Weeknd",
    "stage": "有氧",
    "style": "电子流行",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 稳定节奏伴随运动"
  },
  {
    "id": "workout-19",
    "title": "Titanium",
    "artist": "David Guetta feat. Sia",
    "stage": "力量",
    "style": "电子",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 跟随节拍进入训练"
  },
  {
    "id": "workout-20",
    "title": "The Nights",
    "artist": "Avicii",
    "stage": "有氧",
    "style": "电子",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 稳定节奏伴随运动"
  },
  {
    "id": "workout-21",
    "title": "Wake Me Up",
    "artist": "Avicii",
    "stage": "有氧",
    "style": "电子",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 稳定节奏伴随运动"
  },
  {
    "id": "workout-22",
    "title": "Believer",
    "artist": "Imagine Dragons",
    "stage": "力量",
    "style": "摇滚",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 跟随节拍进入训练"
  },
  {
    "id": "workout-23",
    "title": "Thunder",
    "artist": "Imagine Dragons",
    "stage": "力量",
    "style": "流行",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 跟随节拍进入训练"
  },
  {
    "id": "workout-24",
    "title": "Centuries",
    "artist": "Fall Out Boy",
    "stage": "冲刺",
    "style": "摇滚",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 高能段落为训练提气"
  },
  {
    "id": "workout-25",
    "title": "Unstoppable",
    "artist": "The Score",
    "stage": "冲刺",
    "style": "摇滚",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 高能段落为训练提气"
  },
  {
    "id": "workout-26",
    "title": "Legend",
    "artist": "The Score",
    "stage": "冲刺",
    "style": "摇滚",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 高能段落为训练提气"
  },
  {
    "id": "workout-27",
    "title": "BANG BANG BANG",
    "artist": "BIGBANG",
    "stage": "冲刺",
    "style": "流行",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 高能段落为训练提气"
  },
  {
    "id": "workout-28",
    "title": "Fantastic Baby",
    "artist": "BIGBANG",
    "stage": "冲刺",
    "style": "流行",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 高能段落为训练提气"
  },
  {
    "id": "workout-29",
    "title": "Kill This Love",
    "artist": "BLACKPINK",
    "stage": "力量",
    "style": "流行",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 跟随节拍进入训练"
  },
  {
    "id": "workout-30",
    "title": "How You Like That",
    "artist": "BLACKPINK",
    "stage": "力量",
    "style": "流行",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 跟随节拍进入训练"
  },
  {
    "id": "workout-31",
    "title": "Dynamite",
    "artist": "BTS",
    "stage": "热身",
    "style": "流行",
    "scenes": [
      "健身",
      "通勤"
    ],
    "note": "此前推荐 · 轻快开场"
  },
  {
    "id": "workout-32",
    "title": "MIC Drop",
    "artist": "BTS",
    "stage": "力量",
    "style": "说唱",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 跟随节拍进入训练"
  },
  {
    "id": "workout-33",
    "title": "The Beginning",
    "artist": "ONE OK ROCK",
    "stage": "冲刺",
    "style": "摇滚",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 高能段落为训练提气"
  },
  {
    "id": "workout-34",
    "title": "SPECIALZ",
    "artist": "King Gnu",
    "stage": "冲刺",
    "style": "摇滚",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 高能段落为训练提气"
  },
  {
    "id": "workout-35",
    "title": "POP/STARS",
    "artist": "K/DA",
    "stage": "有氧",
    "style": "电子流行",
    "scenes": [
      "健身"
    ],
    "note": "此前推荐 · 稳定节奏伴随运动"
  },
  {
    "id": "listening-1",
    "title": "Pavane pour une infante défunte",
    "artist": "Seong-Jin Cho",
    "style": "钢琴",
    "scenes": [
      "阅读",
      "休息"
    ],
    "note": "拉威尔《悼念公主的帕凡舞曲》· 此前建议赵成珍版本，搜索结果需核对演奏者。",
    "stage": ""
  },
  {
    "id": "listening-2",
    "title": "Near Light",
    "artist": "Ólafur Arnalds",
    "style": "钢琴 / 电子",
    "scenes": [
      "通勤",
      "阅读"
    ],
    "note": "留意钢琴的留白，以及电子节拍进入后空间感的变化。",
    "stage": ""
  },
  {
    "id": "listening-3",
    "title": "On the Nature of Daylight",
    "artist": "Max Richter",
    "style": "弦乐",
    "scenes": [
      "休息"
    ],
    "note": "从低声部慢慢向上听，关注弦乐旋律逐层叠加。",
    "stage": ""
  },
  {
    "id": "listening-4",
    "title": "Pavane pour une infante défunte",
    "artist": "Anneleen Lenaerts",
    "style": "竖琴",
    "scenes": [
      "阅读",
      "休息"
    ],
    "note": "同一首拉威尔，换成竖琴音色；留意拨弦余音与钢琴版本的不同。",
    "stage": ""
  },
  {
    "id": "listening-5",
    "title": "A Moment Apart",
    "artist": "ODESZA",
    "style": "电子",
    "scenes": [
      "通勤",
      "驾驶"
    ],
    "note": "听人声片段、鼓点与宽阔的电子声场如何叠加。",
    "stage": ""
  }
];
