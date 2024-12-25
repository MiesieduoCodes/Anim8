const disneyMovies = [
  {
    title: "Lilo & Stitch",
    rating: "7.3",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/780/383/751/movie-lilo-and-stitch-wallpaper-preview.jpg",
    story: "A young girl adopts a unique pet who turns out to be a notorious extra-terrestrial fugitive.",
    downloadLink: "https://download1076.mediafire.com/kjdg02c1aazg0ZwXwvKAhg8N_kXm02f34BCicJAh8KFFvPpJMfOibG2TIc9pkXv1I4IdfR3Pi8cYwcy4mvg-rDJEcHUDS_5BOVv14lw68yciUBrvpAGZZjHPGI8Ft-WxaweJfe3ul7suZm0zc3HQ04I026laqV7kjhLhjClCepLnhA/267gvelg038pea5/Anim8.com.ng+Lilo+%26+Stitch+.mp4"
  },
  {
    title: "Treasure Planet",
    rating: "7.2",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/954/990/373/treasure-planet-disney-science-fiction-steampunk-hd-wallpaper-preview.jpg",
    story: "A Disney animated version of 'Treasure Island.' The only difference is that the island is a planet.",
    downloadLink: "https://download1532.mediafire.com/miylb1741p4gkFgYadFkUbJ8-8xP8GH0sXfHSQN1mf0Evx_asIlCJIEtMdFj7jLu5YzTjpA1Z-wxrhlkJD56wl6CWbbTcFodxTyJ4YtKw2vdzCihLdePnun-GOfncV1KGXuJDkK44JKGdyHeC42D_TzAUjPN_2kZExxylCYp1Bw-Bg/vwufxwo8uommz2x/Anim8.com.ng+Treasure+Planet.mp4"
  },
  {
    title: "Chicken Little",
    rating: "5.7",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/472/16/943/chicken-little-funny-hd-wallpaper-wallpaper-preview.jpg",
    story: "After ruining his reputation with the town, a courageous chicken must come to the rescue of his fellow citizens when aliens start an invasion.",
    downloadLink: "https://example.com/movies/chicken-little.mp4"
  },
  {
    title: "The Princess and the Frog",
    rating: "7.1",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/661/606/473/movie-the-princess-and-the-frog-wallpaper-preview.jpg",
    story: "A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being.",
    downloadLink: "hhttps://download1085.mediafire.com/id6o8anwhb3gLviA8h-aaXJeIvaNEZo7izJjkp5rVQGOyFUeqnUwKc8cPAH_gq4ZC5pyj94RPU2CcVjRzbNVfSLSH_FKxwJ8kSAzlhq7fX9gyGWSX1DhiaexbXzp39YLtTbrqGfz8aAWH29keF2rlinVr0AWY9w-FEtvPx3tB5QCIw/dg1lywkumf6kivh/Anim8.com.ng+The+Princess+and+the+Frog.mp4"
  },
  {
    title: "Tangled",
    rating: "7.7",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/16/77/288/tangled-movie-rapunzel-wallpaper-preview.jpg",
    story: "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time.",
    downloadLink: "https://download1528.mediafire.com/mdulyoyvsxogVy7BiaXvvkJ-ClZR3yQULvDyxurG5Aujltf1iYeLVOgNpxZnRKEBocKdn71zQL8--CtNj0S4QBXQihP7tSuk7kDkw3d2S8TgNT-uhyflaAhK4lVbpy1jJ6eMozk5umdTVy3H1qX2uwsYTM7NXRWoQ_PUoFdTdNppkQ/58jcek5b51h0nw8/Anim8.com.ng+Tangled.mp4"

  },
  {
    title: "Frozen",
    rating: "7.4",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/987/132/956/snow-snowflakes-ice-deer-wallpaper-preview.jpg",
    story: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
    downloadLink: "https://download1339.mediafire.com/giz3iqzo1sogMFyqBUWKC5UfHp8X25Ged1rEn_TFEmvsSqxkR5d6eymjjjI0exow7u6PsfDoBpGlBwPuUkCQ1zpWUyX_MANp_7YeUWgkKAqYRYbgw2_xBYD_EHZUss3Zkh-Idgz7QS47VHyenVg_FEg8zwCLO38VbNjyaQEtMsEACw/0sabz39k6niby4k/Anim8.com.ng+Frozen.mp4"
  },
  {
    title: "Wreck-It Ralph",
    rating: "7.7",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/290/558/366/cartoon-movie-wreck-it-ralph-wallpaper-preview.jpg",
    story: "A video game villain wants to be a hero and sets out to fulfill his dream, but his quest brings havoc to the whole arcade where he lives.",
    downloadLink: "https://download1532.mediafire.com/k4d1xm32vergQEVH-kaV336Xunz_qjPGFNSKtI7MTKGaVKavJXwLUBOdAgQxFCs5Gerpz5g46VOoM1_aShgDE4DL0iNzNaCq9gOoCyTmKolDePS-rCdoiYE7jICGhVkV9dufFjtWb4xzjmT3FsbUq6A7wdsv3f2O2xDFPsh_rijuTg/1foid1agyjb4wzg/Anim8.com.ng+Wreck-It+Ralph.mp4"
  },
  {
    title: "Big Hero 6",
    rating: "7.8",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/900/725/263/baymax-big-hero-6-hiro-hamada-big-hero-6-tadashi-hamada-big-hero-6-big-hero-6-wallpaper-preview.jpg",
    story: "A special bond develops between a plus-sized inflatable robot and a prodigy, who team up with a group of friends to form a band of high-tech heroes.",
    downloadLink: "https://download1478.mediafire.com/jsii6y6rhzsgKEvyxSEDfgItVWGYJMYcSPUSvLIREoJ7v7udpyxhJNXXwnisExL1ejLvZnVBJZ4KZGsUXeV6ks8fQo9mz-htGFAiASsGKkrjSS5eP5SC_6dSN_ikRSNQ5uPlJkJxG-GZ4HFVRTJc5jINTzopExpRaad3vtsU4R7t6g/sj0hap1d66azom3/Anim8.com.ng+Big+Hero+6.mp4"
  },
  {
    title: "Zootopia",
    rating: "8.0",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/459/924/918/zootopia-rabbit-cartoon-fox-wallpaper-preview.jpg",
    story: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
    downloadLink: "https://download1528.mediafire.com/i7woi5f2w6ugcLqxOx7eQDZx5PA0n7n7kdIayNiIqtw4xuxS3ZSgrdetYm7XTeSdR_myiSzbxa6-Yr2MnYM6JIb65iMuPO9sVQh4XwsvrCXTq90wVqoQMKTqoPU4QLYoAgVtRU_OV54UAlbdv6NcbIQBTCgTQt_j3Zfq_s-Rx1WaLg/z8l9bg5qycqykdb/Anim8.com.ng+Zootopia.mp4"
  },
  {
    title: "Moana",
    rating: "7.6",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/141/820/1006/disney-princesses-moana-vaiana-sea-cartoon-movie-wallpaper-preview.jpg",
    story: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the ocean's call to seek out the Demigod to set things right.",
    downloadLink: "https://download1640.mediafire.com/niehmqwsz82gXkglBd5DbO8-u42ATFjkzUxsexPWjQCbRZKHPFjfaiK88Pj1DKSYCHBEq2OS6fV0MGebdHRgKDR-rc6cBFaFdywLOhkmwCuE4phE4KfyKYTPcd9r88Rkzr9EUPnmUFXULgWtHLiaLS_12zNJAD4l4Wfj7mQllYqD4g/vpojk5l67dbdw5l/Anim8.com.ng+Moana.mp4"
  },
  {
    title: "Raya and the Last Dragon",
    rating: "7.3",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/134/1023/771/raya-and-the-last-dragon-animated-movies-raya-raya-and-the-last-dragon-movies-hd-wallpaper-preview.jpg",
    story: "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.",
    downloadLink: "https://download1584.mediafire.com/awb1lhcrw00g6ltv8-ECvio-u5fQ4n5E6Gog8SpuFg6ulz4AuAqzzcKpwVsCJvUcrvq9JqcREFJSTIZDm7h1QZffD3TWQIk4UaRpNr_ws4PUglUZG0-t5XN80eqWPVHMiePZUifKrmqjVLEwxohcu9uhx55nrAS5Dfcl8x86v3eWLQ/2f9dwjgclrv9npn/Anim8.com.ng+Raya+and+the+Last+Dragon.mp4"
  },
  // New entries
  {
    title: "Encanto",
    rating: "7.3",
    backgroundImage: "https://wallpapers.com/images/high/encanto-mirabel-holding-broken-glass-dxyz7q1udwx09toc.webp",
    story: "The Madrigal family lives in a magical house in a vibrant town, but one of them, Mirabel, discovers that she might be the key to saving their home and magic.",
    downloadLink: "https://example.com/movies/encanto.mp4"
  },
  {
    title: "Wish",
    rating: "N/A",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5s1N2CIXcUaRbjDakKFuRK-GvCTB5d1JYg&s",
    story: "In the kingdom of Rosas, a young woman named Asha makes a wish to the stars, beginning a journey that will change her destiny.",
    downloadLink: "https://download854.mediafire.com/ym46swuavzugUXkVJzG1CCJlaDqCklZBOhGjtjUPWvzUOB2aNVJyLFPRRarVZ2HbJd1ALUOkrc84vl_1VCzBJQXf4bZai5rBnnp34EcjhU-U2F4sujVCKNCyZ6-iRp6g7gHAJAQPX08phZQBEJ-eiVSTIN10jto7BNl5sRBQ0UaIaA/i0ll72xpvjcfs4y/Anim8.com.ng+Wish.mp4"
  },
  {
    title: "Strange World",
    rating: "6.3",
    backgroundImage: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24223176/STRANGE_WORLD_ONLINE_USE_fullcomp_317_39_6k_film.0013_a.jpg?quality=90&strip=all&crop=25.180921052632%2C0%2C62.8125%2C100&w=2400",
    story: "The Clade family, explorers of a mysterious and uncharted world, face strange creatures and obstacles as they venture into a realm beyond imagination.",
    downloadLink: "https://download1586.mediafire.com/mws67hjcqhwgEx8LQkbXD-ac2xZnR6461olaU09hmmn8Wa-4T2x8lnwtxfQRpVOHgG52o0EbU7U-S2UecsNyjJMCG1PY0dkYU_YrwXOtL5NB1z9BDY1w-5SrhQXfWFowp33oeiWHa7QtzjhaL2RELnv_0ueTBvUnC5ZRjS7BERSsUw/y43ilqputjvii8v/Anim8.com.ng+Strange+World.mp4"
  },
  {
    title: "Frozen II",
    rating: "6.9",
    backgroundImage: "https://wallpapers.com/images/high/elsa-and-anna-adult-kncpyugry2704mkd.webp",
    story: "Anna and Elsa embark on a journey to discover the origins of Elsa's powers and uncover the truth about their family's past.",
    downloadLink: "https://download1500.mediafire.com/wsw9q9msqphgXhduIbwihDaOVeZhsVXKcSfzEKwxwQwOquK7QCt1zd9ann_RyIK6v5ChJTgq_i4MiNERIDqUVU4EiPVrCEKR3HItZ1p1xqMltgfnMR1Hnj5GaqHOc9aCZOZi1vYPiT3pFLOHyKoqJzgXhi0stqPGVU0-prza-IWkDQ/cyd7mmeqhccfxia/Anim8.com.ng+Frozen+2.mkv"
  }
];

export default disneyMovies;
