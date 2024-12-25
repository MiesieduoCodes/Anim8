const cards = [
  {
  title: "Chicken Run",
  rating: 6.9,
  backgroundImage: "https://wallpapers.com/images/high/rocky-and-ginger-in-the-chicken-run-movie-5fjh6ccbil5hlg5a.webp",
  story: "When a cockerel flies into a chicken farm, the chickens see him as an opportunity to escape their evil owners.",
  downloadLink: "https://download1325.mediafire.com/c68932q09e7gwCUDLtbzt48zhud6gFq3PdU4RZEKwD83fPNeMiCs4dp367Vg5MEPwb9aOh9Lk6FVnVMUm8So-gfMbkusURglgFcLWJfF4esz4QNYK0YLVB0SNGX2fv3t7SwT75r6lWHS0TYlAG7FyCL6j7XYh4NgQ_ykNWcjkH9wbg/8u6x0smq6jlfq2y/Anim8.com.ng+Chicken+Run.mp4"
  },
  {
  title: "Shrek",
  rating: 7.9,
  backgroundImage: "https://wallpapers.com/images/high/funny-shrek-kcn8nv60431sny2u.webp",
  story: "A grumpy ogre must go on a quest to rescue a princess for a lord in order to get his swamp back.",
  downloadLink: "https://download856.mediafire.com/b9cilvwiyw4gl1PnAVr7kkY2L4DxBaXwEcdL9854Np53bqzGdmU_T6r1XrLSM39Ixd0jdB3W-3Av7VhX4fAuDlw207xjVaXo3znsIjtU7Hn8HVIx2AeyrOY1IvWAyioZ7mZl5CqKG2qSDntyOGuXs8JzjskTCQ1Bvd5Ep8UuSwYl2w/lixrsc5xwm8jua4/Anim8.com.ng+Shrek+2.mp4"
  },
  {
  title: "Shrek 2",
  rating: 7.9,
  backgroundImage: "https://wallpapers.com/images/high/fiona-donkey-and-shrek-2-posing-81hlhxmxyi6yh368.webp",
  story: "Shrek and Fiona visit her parents in the Kingdom of Far Far Away, but things don't go as planned.",
  downloadLink: "https://download856.mediafire.com/b9cilvwiyw4gl1PnAVr7kkY2L4DxBaXwEcdL9854Np53bqzGdmU_T6r1XrLSM39Ixd0jdB3W-3Av7VhX4fAuDlw207xjVaXo3znsIjtU7Hn8HVIx2AeyrOY1IvWAyioZ7mZl5CqKG2qSDntyOGuXs8JzjskTCQ1Bvd5Ep8UuSwYl2w/lixrsc5xwm8jua4/Anim8.com.ng+Shrek+2.mp4"
  },
  {
  title: "Shrek the Third",
  rating: 6.9,
  backgroundImage: "https://wallpapers.com/images/high/shrek-the-third-happy-while-hugging-friends-c17ao3rg35u7ow8n.webp",
  story: "Shrek recruits his friends to install a rebellious prince as the new king of Far Far Away.",
  downloadLink: "https://download1587.mediafire.com/wqxteo06rpvgDDBtz7_EbR6C3CMYZ_sB7XwtMdCKa5EitFa4XxkBZ5S_phmsWd2C4MK-C-ZVMWVC1w9sSS0leJMpyCQc_bIn1ZNeSxJoGf8_F1RpMbPoNwl3Luc11rm04AFZ9FfYk04ftKet7gAZoLk5laSXJTVfJ05p-Joy6HmD7g/vqm5f0h2si4yeif/Anim8.com.ng+Shrek+3.mp4"
  },
  {
  title: "Shrek Forever After",
  rating: 6.3,
  backgroundImage: "https://wallpapers.com/images/high/shrek-forever-after-shrek-talking-with-rumpelstiltskin-9bo1gbu7rko9e4gv.webp",
  story: "Shrek makes a pact with Rumpelstiltskin to get his old life back, but ends up in an alternate reality where things are not as they seem.",
  downloadLink: "https://download1580.mediafire.com/b6gp1vrvrchgpUkeggLH5st7zb4B0NLlx7pAu_99_0bRo8Tz0-F3FqwiPuo3uhnC0isskeNayypmMx25evqKZyfXH9J7snzSx0pVUssiRrqSMaHUVJWZQ3ALKn5C3_n4l2nMoNnBJjs4c-wMQLZouu2c84aCxwk6ftpL_Z4gsGIv0Q/usmvr1lus772w84/Anim8.com.ng+Shrek+Forever+After.mp4"
  },
  {
  title: "Kung Fu Panda",
  rating: 8.0,
  backgroundImage: "https://wallpapers.com/images/high/kung-fu-panda-2-monkey-1xbrjbc3k15pmoc1.webp",
  story: "An obese panda becomes the Dragon Warrior and must save China from the savage Tai Lung.",
  downloadLink: "https://download943.mediafire.com/11kfrqa53u4gQ3XPqLJiz7YQP1RsjNWwKgCa0b7ivOE8XqQINH68Mi9XI4enmYOJ7eaju-3KKucHWG3GjlpH1kRWs_hu2ZNBQAqJtZb_Ffq1897i2ULf4rO1e3q3TdIi7P90MQ9wcEiAIKmMo5Eflc1YckR4Yf3q36Sc3jApIZ-wgA/dzs24xui1bxduxo/Anim8.com.ng+Kung+Fu+Panda+2.mp4"
  },
  {
  title: "Kung Fu Panda 2",
  rating: 7.3,
  backgroundImage: "https://wallpapers.com/images/high/kung-fu-panda-2-chopsticks-dimsum-vwjyoqmzsamhhsat.webp",
  story: "Po must face a new villain, Lord Shen, and uncover his past to save the valley and China.",
  downloadLink: "https://download943.mediafire.com/11kfrqa53u4gQ3XPqLJiz7YQP1RsjNWwKgCa0b7ivOE8XqQINH68Mi9XI4enmYOJ7eaju-3KKucHWG3GjlpH1kRWs_hu2ZNBQAqJtZb_Ffq1897i2ULf4rO1e3q3TdIi7P90MQ9wcEiAIKmMo5Eflc1YckR4Yf3q36Sc3jApIZ-wgA/dzs24xui1bxduxo/Anim8.com.ng+Kung+Fu+Panda+2.mp4"
  },
  {
  title: "Kung Fu Panda 3",
  rating: 7.1,
  backgroundImage: "https://wallpapers.com/images/high/surviving-pandas-from-kung-fu-panda-3-v7yvpisosxqop7x8.webp",
  story: "Po reunites with his long-lost biological father and trains a village of pandas to defeat the evil Kai.",
  downloadLink: "https://download1587.mediafire.com/n4dv0m6ihhdgT1US41k6RVDBpUNNUn_tva-eTYSHAQuaUBuJO2qjlhV7hab-tswpCDM8Smn1VPQo3GWJ8B8gCVg3TRub-26BSfG0IFHK8757_Qa0g2UU-OByUNhrDOfGx77ivhqqQqh3ftgNqVNBZj9bui4DHPFv1SK7dd9HIzklzQ/8uayzprjvql33w3/Anim8.com.ng+Kung+Fu+Panda+3.mp4"
  },
  {
  title: "Kung Fu Panda 4",
  rating: 7.5,
  backgroundImage: "https://wallpapers.com/images/high/a-cartoon-character-of-a-panda-3y58t3bd9ibp29o6-2.webp",
  story: "Po faces new challenges as the Dragon Warrior, while working to keep the Valley of Peace safe from new threats.",
  downloadLink: "https://download1588.mediafire.com/fycz8fh4qllg6PdTYxIu4vbV3WSx5SnlgKLrxhUYBJ3Zzd1X_blcWYQ6q9QPuim5xDZuquzjuprgSudAU6PYdhebeiUSCOTFV_t_k3FFdl_JYfyi8HnqgzIjHy5HB9lq_hdajFR_MTSzKMUHjqR947bY3enC-e7URMiumBJI9cSTkA/b87re0gkcbkhrse/Anim8.com.ng+Kung+Fu+Panda+4.mp4"
  },
  {
  title: "Shark Tale",
  rating: 6.0,
  backgroundImage: "https://wallpapercave.com/wp/wp7287198.jpg",
  story: "A small fish takes advantage of the accidental death of a shark to gain fame and fortune.",
  downloadLink: "https://download1078.mediafire.com/mu4nay1v8fbg3LvRs-TVumgVRztTfSqOVJatiQv5f-853pKX5QV-0B-k1p4zdBvGgniZRRAAY5lpPmlkh7A-BhvwVaGUKPPcXQl7gbETWWeeIMgC8apumP4MJumAzThYWxJZiNB-uj7Z61LDYKpildSOyceMFc_EhXCyiiSH-GP75Q/rlm5fnme0634r2y/Anim8.com.ng+Shark+Tale.mp4"
  },
  {
  title: "Madagascar",
  rating: 7.0,
  backgroundImage: "https://wallpapercave.com/dwp1x/wp14486446.jpg",
  story: "A group of zoo animals end up in the wilds of Madagascar and must adapt to their new surroundings.",
  downloadLink: "https://download1072.mediafire.com/dn1tfzfcf2egnpS_C7fX0fU9V3DUH_DCVR24VmTbCqcLid1LdBf5MjoOmXzHk5Rsi4soN8qzdPUQVNGNLGjlLDoBCjEnynLe_uagQ_A0ulw1tOEKoF4I3HAolCpd45PP6VhJ9LC64H3PTOiK1TBHoQZqXpT-1q0imfrdRGyu0yaZWw/rzxbceghq7rcixy/Anim8.com.ng+Madagascar.mp4"
  },
  {
  title: "Madagascar: Escape 2 Africa",
  rating: 6.6,
  backgroundImage: "https://wallpapers.com/images/high/cartoons-in-madagascar-escape-2-africa-izj1z41a3vjuyenh.webp",
  story: "The zoo animals attempt to return to New York but crash-land in Africa, where Alex the lion meets his family and the group faces new adventures.",
  downloadLink: "https://download1322.mediafire.com/h84mm2nk9vlgHfIVQJa-jxEuefDWdgoXsWdieyg6Sc9WzHmY4sElAbMEVKt73Hx_HgQMs5lt4iZmc2uURMPAnhXopOmINw4A8d-6T0iFmo4gnoZpa3E11UQFoNy99rRTqr7Njlz5XtNcOlzyiKO-Q-qtZj6A04dciMtTKrTK0MWbgw/e9hc1q4qa74qxa9/Anim8.com.ng+Madagascar+2.mp4"
  },
  {
  title: "Madagascar 3: Europe's Most Wanted",
  rating: 6.8,
  backgroundImage: "https://wallpapers.com/images/high/madagascar3-circus-performance-cast-3mn3jpcqld8lyydz.webp",
  story: "In an effort to return to New York, the gang joins a traveling circus in Europe, all while being pursued by a relentless animal control officer.",
  downloadLink: "https://download947.mediafire.com/e4gzanjv379gWYJNvs7op2VoIxG43smNezsDYsRa-ogYiCbFEYFCHKzsgKSofc1Y0EG4pRUFtzKqjJOWkGLC3b6U96djKU9cAxRVcXglBn-wap_dx7cqw_xVjdVIqtN1OcIqnzTobz6fynt8ztWZ_kdjX25USIztdFUZWjwIfFQr4A/snnxc2hjw1ryc4n/Anim8.com.ng+Madagascar+3+Europe%5C%27s+Most+Wanted.mp4"
  },
  {
  title: "Penguins of Madagascar",
  rating: 6.7,
  backgroundImage: "https://wallpapers.com/images/high/the-penguins-of-madagascar-in-action-ts1ncfivh6y52ch9.webp",
  story: "Skipper, Kowalski, Rico, and Private team up with an undercover organization to stop a villainous octopus from destroying the world.",
  downloadLink: "https://example.com/movies/penguins-of-madagascar.mp4"
  },
  {
  title: "Wallace & Gromit: The Curse of the Were-Rabbit",
  rating: 7.6,
  backgroundImage: "https://resizing.flixster.com/4dcpjaQ10yLmbP1qyyHtU6b1JtY=/1100x618/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p36347_i_h8_ad.jpg",
  story: "Wallace and Gromit investigate garden sabotage in their village, which leads to a giant vegetable competition.",
  downloadLink: "https://download1320.mediafire.com/nlhyzwfq055gMhSANK5zTuzoYKYjnKcdCizoATeaeM1Lsg5AxHeTEt6NTuDU5U-3JqS3uJvA5WZdt-WTPkO-d80C47aqbK6DJ3IVJfOvu5tGCTwp8mp7EdNK4mLM_gXME73FxzOUP0CvDR3MTqx98m4U8T2sXrqvdLL4wfLFaGGBfA/oyv8yy6wr8irjvc/Anim8.com.ng+Wallace+Gromit+The+Curse+of+the+Were-Rabbit.mp4"
  },
  {
  title: "Over the Hedge",
  rating: 6.7,
  backgroundImage: "https://wallpapercave.com/wp/wp7453203.jpg",
  story: "A raccoon convinces a group of forest animals to invade a suburban sprawl to repay a debt of food.",
  downloadLink: "https://download1588.mediafire.com/q6vp6tqkmj3g5YvceYELbsHt4l4F9A6xbp9lTQ9X1XAS-QhL2lLG9ucAHRZTtvtxkhvAWWU7-1oo8C7yF7HOy4IY4KfziecVRm5qsrrObmHUgaSb_FKUzvQ9YgKsq_8PYzcCiuiMWCZY43gE_TUINoM-oDzYAttoLiqnYxOB5DT5hA/pln38axk0dfsnz7/Anim8.com.ng+Over+the+Hedge.mp4"
  },
  {
  title: "Flushed Away",
  rating: 7.0,
  backgroundImage: "https://wallpapers.com/images/featured/flushed-away-4b5su2wq1fuwh5z5.webp",
  story: "A pampered mouse ends up in the sewers of London, where he has to adapt to a new way of life.",
  downloadLink: "https://download1339.mediafire.com/le0wkzhzym7gkEl9vhKjwcLOqbSJJA2w0j7uodAhVpAVbhJ8TfHEeNUhyC72d9qjK42bkLJoxRx_75n48kL2ID4xqoSgK22_lNeMxQGWXmglYRDuCNPHk8XQlHj7nGHcBXnOihGRTz8e6i9CvrgEW7g2mf7t4j75ohys-gvVV1Gz1Q/1ulrm9wy7ili1vf/Anim8.com.ng+Flushed+Away+.mp4"
  }
  ];
  
  export default cards;