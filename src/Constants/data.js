const movieData = [

 // genre : Romance {
  {
    title: "Your Lie in April",
    genre: "Romance",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/264/75/737/anime-sunset-piano-clouds-wallpaper-preview.jpg",
    synopsis: "A pianist, traumatized by the death of his mother, rediscovers his love for music and life after meeting a spirited violinist who changes his world.",
    seasons: [
      {
        seasonNumber: 1,
        backgroundImage :"https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2015/01/23065212/Your-Lie-In-April-Ep-10-1024x576.png",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://www.justwatch.com/images/backdrop/243967768/s1440/season-1.webp/season-1.webp",
            synopsis: "Kousei Arima, a piano prodigy, loses his ability to hear the sound of the piano after his mother’s death, but his life changes when he meets a vibrant violinist named Kaori.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-1"
          },
          {
            epiNum: 2,
            backgroundImage: "https://i0.wp.com/beneaththetangles.com/wp-content/uploads/2014/10/april-2b.jpg?resize=718%2C400&ssl=1p",
            synopsis: "Kaori encourages Kousei to accompany her in a violin competition, forcing him to face his fears and rediscover his musical passion.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-2"
          },
          {
            epiNum: 3,
            backgroundImage: "https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2014/11/23080726/Your-Lie-In-April-Ep-3-1024x576.png",
            synopsis: "Kousei's past continues to haunt him as he struggles with his first performance after years, while Kaori's free-spirited style helps him find inspiration.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-3"
          },
          {
            epiNum: 4,
            backgroundImage: "https://eastofthewire.wordpress.com/wp-content/uploads/2014/10/shigatsu-4-4.png",
            synopsis: "Kousei's friends rally to support him as he begins practicing piano again, navigating complex emotions he has buried.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-4"
          },
          {
            epiNum: 5,
            backgroundImage: "https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2014/11/23074722/Your-Lie-In-April-Ep-5.png",
            synopsis: "During the piano competition, Kousei faces his deepest fears and memories of his mother, challenging him to move beyond his trauma.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-5"
          },
          {
            epiNum: 6,
            backgroundImage: "https://cdn.animenewsnetwork.com/thumbnails/max300x600/cms/episode-review/81041/ylia-ep-6-tsubaki-rotated.jpg",
            synopsis: "Kaori’s health takes a troubling turn, leaving Kousei worried as he realizes the impact she has had on his life and music.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-6"
          },
          {
            epiNum: 7,
            backgroundImage: "https://megaprinceytay.wordpress.com/wp-content/uploads/2014/11/vlcsnap-2014-11-21-11h17m53s187-w800-h600.png?w=300",
            synopsis: "Kousei battles self-doubt and trauma during a recital, but memories of Kaori's encouragement give him strength.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-7"
          },
          {
            epiNum: 8,
            backgroundImage: "https://megaprinceytay.wordpress.com/wp-content/uploads/2014/11/vlcsnap-2014-11-29-10h13m51s155-w800-h600.png?w=300",
            synopsis: "Kousei discovers that Kaori may be hiding a secret about her health, raising his fears of losing someone he cares about.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-8"
          },
          {
            epiNum: 9,
            backgroundImage: "https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2015/01/23065218/Your-Lie-In-April-Ep-9.png",
            synopsis: "As Kousei grows closer to Kaori, he begins to find a renewed love for music and his desire to play again.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-9"
          },
          {
            epiNum: 10,
            backgroundImage: "https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2015/01/23065212/Your-Lie-In-April-Ep-10-1024x576.png",
            synopsis: "Kaori’s influence helps Kousei overcome his insecurities, leading to an emotional performance that captures the audience.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-10"
          },
          {
            epiNum: 11,
            backgroundImage: "https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2015/01/23065206/Your-Lie-In-April-Ep-11.png",
            synopsis: "Kousei reflects on his relationship with his mother and his journey with music, recognizing Kaori's role in his healing.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-11"
          },
          {
            epiNum: 12,
            backgroundImage: "https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2015/01/23062705/Your-Lie-In-April-Ep-12-1024x576.png",
            synopsis: "With renewed confidence, Kousei begins to envision a future with music and a life beyond his past traumas.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-12"
          },
          {
            epiNum: 13,
            backgroundImage: "https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2015/01/23062700/Your-Lie-In-April-Ep-13.png",
            synopsis: "Kousei faces a personal setback as he learns more about Kaori's deteriorating health, making him realize his feelings for her.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-13"
          },
          {
            epiNum: 14,
            backgroundImage: "https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2015/01/23062649/your-lie-in-april-ep-14-correct-1024x576.png",
            synopsis: "Kousei continues to play piano, inspired by Kaori’s spirit, as he grapples with his growing affection for her.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-14"
          },
          {
            epiNum: 15,
            backgroundImage: "https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2015/02/23060604/Your-Lie-In-April-Ep-15-1024x576.png",
            synopsis: "Kousei pushes forward with his music career, deciding to honor Kaori's wish for him to live life to the fullest.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-15"
          },
          {
            epiNum: 16,
            backgroundImage: "https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2015/03/23053834/Your-Lie-In-April-Ep-16.jpg",
            synopsis: "Kousei confronts his feelings about Kaori's illness, struggling to process the emotions her condition stirs in him.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-16"
          },
          {
            epiNum: 17,
            backgroundImage: "https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2015/03/23053829/Your-Lie-In-April-Ep-17-1024x576.png",
            synopsis: "As Kaori’s condition worsens, Kousei plays a moving piano piece to express his feelings, reaching out to her through music.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-17"
          },
          {
            epiNum: 18,
            backgroundImage: "https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2015/03/23053824/Your-Lie-In-April-Ep-18-1024x576.png",
            synopsis: "Kousei performs at a competition, channeling his emotions for Kaori and his personal growth into a heartfelt performance.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-18"
          },
          {
            epiNum: 19,
            backgroundImage: "https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2015/03/23053818/Your-Lie-In-April-Ep-19-1024x576.png",
            synopsis: "Kousei prepares for a pivotal performance, determined to honor Kaori’s legacy and the inspiration she gave him.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-19"
          },
          {
            epiNum: 20,
            backgroundImage: "https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2015/03/23052930/Your-Lie-In-April-Ep-20-1024x576.png",
            synopsis: "Kousei pours his heart into his music as he reflects on his journey, cherishing every moment shared with Kaori.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-20"
          },
          {
            epiNum: 21,
            backgroundImage: "https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2015/03/23052925/Your-Lie-In-April-Ep-21-1024x576.png",
            synopsis: "With Kaori’s memory guiding him, Kousei delivers a final performance that captivates everyone and heals his heart.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-21"
          },
          {
            epiNum: 22,
            backgroundImage: "https://cdn.animenewsnetwork.com/thumbnails/max300x600/cms/episode-review/86164/kaori-blaze-of-glory.jpg",
            synopsis: "Kousei receives a letter from Kaori that reveals her true feelings, giving him closure and strength to move forward.",
            downloadLink: "https://example.com/download/your-lie-in-april-episode-22"
          }
        ]
      }
    ]
  },

  {
    title: "Toradora!",
    genre: "Romance",
    backgroundImage: "https://eyeforaneyepiece.wordpress.com/wp-content/uploads/2013/09/konachan-com-42979-aisaka_taiga-kawashima_ami-kitamura_yusaku-kushieda_minori-takasu_ryuuji-toradora.jpg?w=625&h=400",
    synopsis: "Two high school students form an unlikely friendship to help each other pursue their crushes.",
    seasons: [
      {
        seasonNumber: 1,
        backgroundImage: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/10/toradora-header.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/7d7e55e0e0ef9368aac2ac49e1e47a01af9369699baafd8a348bd7ea241458db._SX1440_FMwebp_.png",
            synopsis: "Ryuuji Takasu, a gentle high schooler with a fierce face, meets Taiga Aisaka, the feisty 'Palmtop Tiger,' leading to an unexpected alliance.",
            downloadLink: "https://example.com/download/toradora-episode-1"
          },
          {
            epiNum: 2,
            backgroundImage: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/23174436/AAAABT7O2mtWCNpPqV5sGLZKmuYjWfuSxjBDvnrJY7GrTv4orjdm_wUJFUmCfMv3HWt2ftU7b7XUiP3GlhWTCo27TMWVnpuX.jpg?quality=90&strip=all&crop=21.875%2C0%2C56.25%2C100&w=750",
            synopsis: "Ryuuji and Taiga agree to help each other with their respective crushes, but their partnership is off to a rocky start.",
            downloadLink: "https://example.com/download/toradora-episode-2"
          },
          {
            epiNum: 3,
            backgroundImage: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Toradora%21_light_novel_volume_1_cover.jpg/220px-Toradora%21_light_novel_volume_1_cover.jpg",
            synopsis: "Ryuuji gets closer to his crush Minori, while Taiga tries to bond with her crush, Yusaku, leading to amusing mishaps.",
            downloadLink: "https://example.com/download/toradora-episode-3"
          },
          {
            epiNum: 4,
            backgroundImage: "https://i0.wp.com/wrongeverytime.com/wp-content/uploads/2019/05/chrome_2019-05-10_08-31-24.png?resize=768%2C432&ssl=1",
            synopsis: "Taiga and Ryuuji’s bond deepens as they share more about their lives and struggle with their feelings.",
            downloadLink: "https://example.com/download/toradora-episode-4"
          },
          {
            epiNum: 5,
            backgroundImage: "https://i0.wp.com/wrongeverytime.com/wp-content/uploads/2020/07/July28112552.jpg?resize=768%2C432&ssl=1",
            synopsis: "A class trip brings Taiga and Ryuuji's friends closer, creating complicated feelings among them all.",
            downloadLink: "https://example.com/download/toradora-episode-5"
          },
          {
            epiNum: 6,
            backgroundImage: "https://animeuknews.net/app/uploads/2020/04/toradora-004-1536x864.jpg",
            synopsis: "Taiga’s rivalry with Ami, a new transfer student, intensifies, adding drama to her friendship with Ryuuji.",
            downloadLink: "https://example.com/download/toradora-episode-6"
          },
          {
            epiNum: 7,
            backgroundImage: "https://i0.wp.com/wrongeverytime.com/wp-content/uploads/2022/07/August29144639.png?resize=768%2C432&ssl=1",
            synopsis: "Ryuuji’s growing friendship with Ami sparks jealousy in Taiga, causing tension in their alliance.",
            downloadLink: "https://example.com/download/toradora-episode-7"
          },
          {
            epiNum: 8,
            backgroundImage: "https://animeuknews.net/app/uploads/2020/04/toradora-007-1536x864.jpg",
            synopsis: "A beach trip brings moments of reflection, as Taiga begins to realize her feelings for Ryuuji.",
            downloadLink: "https://example.com/download/toradora-episode-8"
          },
          {
            epiNum: 9,
            backgroundImage: "https://animeuknews.net/app/uploads/2020/04/toradora-009-1536x864.jpg",
            synopsis: "The school festival stirs mixed emotions in Taiga, as she wrestles with her growing feelings for Ryuuji.",
            downloadLink: "https://example.com/download/toradora-episode-9"
          },
          {
            epiNum: 10,
            backgroundImage: "https://i0.wp.com/wrongeverytime.com/wp-content/uploads/2023/02/July03133814.png?resize=768%2C432&ssl=1",
            synopsis: "A heartfelt moment between Taiga and Ryuuji leads them to question their true feelings for each other.",
            downloadLink: "https://example.com/download/toradora-episode-10"
          },
          {
            epiNum: 11,
            backgroundImage: "https://i0.wp.com/wrongeverytime.com/wp-content/uploads/2023/10/chrome_2023-10-04_13-20-38.jpg?resize=768%2C432&ssl=1",
            synopsis: "Ryuuji and Taiga face a turning point in their relationship when a misunderstanding reveals hidden emotions.",
            downloadLink: "https://example.com/download/toradora-episode-11"
          },
          {
            epiNum: 12,
            backgroundImage: "https://animeuknews.net/app/uploads/2020/04/toradora-008-1536x864.jpg",
            synopsis: "As Christmas approaches, Taiga and Ryuuji plan a party to confess their feelings to their crushes.",
            downloadLink: "https://example.com/download/toradora-episode-12"
          },
          {
            epiNum: 13,
            backgroundImage: "https://i0.wp.com/wrongeverytime.com/wp-content/uploads/2022/07/August29144639.png?resize=768%2C432&ssl=1",
            synopsis: "A series of misunderstandings at the Christmas party leads to emotional revelations between Taiga and Ryuuji.",
            downloadLink: "https://example.com/download/toradora-episode-13"
          },
          {
            epiNum: 14,
            backgroundImage: "https://animeuknews.net/app/uploads/2020/04/toradora-005-1536x864.jpg",
            synopsis: "Taiga makes a difficult decision about her future, but her bond with Ryuuji continues to affect her.",
            downloadLink: "https://example.com/download/toradora-episode-14"
          },
          {
            epiNum: 15,
            backgroundImage: "https://i0.wp.com/wrongeverytime.com/wp-content/uploads/2019/05/chrome_2019-05-09_11-31-04.jpg?resize=768%2C432&ssl=1",
            synopsis: "Ryuuji’s resolve is tested as he realizes his true feelings, and he begins to take steps to confront them.",
            downloadLink: "https://example.com/download/toradora-episode-15"
          },
          {
            epiNum: 16,
            backgroundImage: "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F7exOVabvRWC7r2o5KVxrmiPQQ0z.jpg",
            synopsis: "A new year brings changes in Taiga and Ryuuji’s lives, challenging them to face their evolving relationship.",
            downloadLink: "https://example.com/download/toradora-episode-16"
          },
          {
            epiNum: 17,
            backgroundImage: "https://i0.wp.com/i.imgur.com/ZStCaB4.jpg",
            synopsis: "Taiga and Ryuuji’s friends intervene to help them admit their feelings, pushing them toward a revelation.",
            downloadLink: "https://example.com/download/toradora-episode-17"
          },
          {
            epiNum: 18,
            backgroundImage: "https://i0.wp.com/i.imgur.com/8xEneSp.jpg",
            synopsis: "With graduation approaching, Taiga and Ryuuji must decide how they will move forward together.",
            downloadLink: "https://example.com/download/toradora-episode-18"
          },
          {
            epiNum: 19,
            backgroundImage: "https://i0.wp.com/i.imgur.com/5sl8l9o.jpg",
            synopsis: "Ryuuji proposes a bold plan for their future, but Taiga’s response changes everything.",
            downloadLink: "https://example.com/download/toradora-episode-19"
          },
          {
            epiNum: 20,
            backgroundImage: "https://i0.wp.com/i.imgur.com/mnEIzsF.jpg",
            synopsis: "In the final moments, Taiga and Ryuuji confront their feelings and make a decision about their relationship.",
            downloadLink: "https://example.com/download/toradora-episode-20"
          }
        ]
      }
    ]
  }
  ,
  {
    title: "Kaguya-sama: Love Is War",
    genre: "Romance",
    backgroundImage: "https://thecambridgegeek.com/posts/2019/03/20190301-a.jpg",
    synopsis: "A battle of wits and romance between two high school geniuses.",
    seasons: [
      {
        seasonNumber: 1,
        backgroundImage : "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/25_05_2022_12_43_26_3071351.jpg?width=920&format=webp",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://kaguyasama-anime.com/1st/assets/img/story/01/02.jpg",
            synopsis: "Kaguya and Miyuki engage in a mind game to make the other confess love first.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://kaguyasama-anime.com/1st/assets/img/story/02/02.jpg",
            synopsis: "Kaguya devises a plan to make Miyuki invite her to the summer festival.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://kaguyasama-anime.com/1st/assets/img/story/03/02.jpg",
            synopsis: "A game of 'Forbidden Words' challenges both Miyuki and Kaguya's self-control.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://kaguyasama-anime.com/1st/assets/img/story/04/04.jpg",
            synopsis: "Chika tries to get Miyuki to open up about his insecurities.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://kaguyasama-anime.com/1st/assets/img/story/05/03.jpg",
            synopsis: "Kaguya becomes jealous when a rumor about Miyuki's crush surfaces.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://kaguyasama-anime.com/1st/assets/img/story/06/03.jpg",
            synopsis: "Miyuki and Kaguya bond over a movie outing that leads to misunderstandings.",

          },
          {
            epiNum: 7,
            backgroundImage: "https://kaguyasama-anime.com/1st/assets/img/story/07/02.jpg",
            synopsis: "When Kaguya's plans are derailed, Miyuki comes to her rescue.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://kaguyasama-anime.com/1st/assets/img/story/08/01.jpg",
            synopsis: "Kaguya’s jealousy gets the better of her as new challenges arise.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://kaguyasama-anime.com/1st/assets/img/story/09/01.jpg",
            synopsis: "Kaguya deals with embarrassment after Miyuki discovers a secret.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://kaguyasama-anime.com/1st/assets/img/story/10/02.jpg",
            synopsis: "Kaguya and Miyuki face off in a student council meeting over love advice.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://kaguyasama-anime.com/1st/assets/img/story/11/02.jpg",
            synopsis: "Kaguya struggles with expressing her feelings on the last day of summer.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://kaguyasama-anime.com/1st/assets/img/story/12/01.jpg",
            synopsis: "A heartfelt moment between Kaguya and Miyuki closes the season.",
            downloadLink : ""
          }
        ]
      },
      {
        seasonNumber: 2,
        backgroundImage :"https://kaguyasama-anime.com/2nd/assets/img/top/img_main02.jpg",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://kaguyasama-anime.com/2nd/story/SYS/CONTENTS/story_891_photo_158583021111845224",
            synopsis: "Miyuki’s confidence increases, challenging Kaguya’s strategies.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://kaguyasama-anime.com/2nd/story/SYS/CONTENTS/story_894_photo_1586835865943622038",
            synopsis: "Kaguya attempts to disguise her feelings after a misunderstanding.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://kaguyasama-anime.com/2nd/story/SYS/CONTENTS/story_896_photo_1587457799228558661",
            synopsis: "A new rival appears, sparking jealousy in Kaguya.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://kaguyasama-anime.com/2nd/story/SYS/CONTENTS/story_899_photo_1588044997219802565",
            synopsis: "Kaguya and Miyuki’s relationship is tested during a school event.",
            downloadLink : ""

          },
          {
            epiNum: 5,
            backgroundImage: "https://kaguyasama-anime.com/2nd/story/SYS/CONTENTS/story_900_photo_1588580803377327971",
            synopsis: "Kaguya finds herself frustrated with Miyuki’s unchanging demeanor.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://kaguyasama-anime.com/2nd/story/SYS/CONTENTS/story_901_photo_1589269787109174898",
            synopsis: "Kaguya’s friends notice her obsession with Miyuki.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://kaguyasama-anime.com/2nd/story/SYS/CONTENTS/story_902_photo_1589877354346995174",
            synopsis: "An unexpected confession puts Miyuki in a difficult position.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://kaguyasama-anime.com/2nd/story/SYS/CONTENTS/story_903_photo_1590483407533150562",
            synopsis: "Kaguya and Miyuki team up for the school’s cultural festival.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://kaguyasama-anime.com/2nd/story/SYS/CONTENTS/story_955_photo_1591073504435402673",
            synopsis: "Kaguya’s resolve weakens as Miyuki shows his softer side.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://kaguyasama-anime.com/2nd/story/SYS/CONTENTS/story_987_photo_1591680846393195755",
            synopsis: "A confrontation at the festival forces Kaguya to face her feelings.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://kaguyasama-anime.com/2nd/story/SYS/CONTENTS/story_1075_photo_1592357479876810248",
            synopsis: "Kaguya’s growing feelings lead to unexpected jealousy.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://kaguyasama-anime.com/2nd/story/SYS/CONTENTS/story_1115_photo_1593232660817965647",
            synopsis: "The season finale sees Kaguya and Miyuki in a heartfelt exchange.",
            downloadLink : ""
          }
        ]
      },
      {
        seasonNumber: 3,
        backgroundImage : "https://cdn.oneesports.gg/cdn-data/2022/02/Anime_KaguyaSamaS3FI-1-1024x576.webp",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://staticg.sportskeeda.com/editor/2022/04/a2e8d-16494506349891-1920.jpg",
            synopsis: "As the school year begins, Kaguya and Miyuki find themselves closer than ever.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://www.moshimoshi-nippon.jp/wp/wp-content/uploads/2022/03/19976877027c8b057883630531a1fd89-2.png",

            synopsis: "A new student council election brings fresh challenges for Kaguya and Miyuki.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://staticg.sportskeeda.com/editor/2022/05/f95c4-16519132822118-1920.jpg",
            synopsis: "Kaguya contemplates her feelings after an unexpected interaction with Miyuki.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://i0.wp.com/blog-media-cloud.nyc3.digitaloceanspaces.com/2022/04/Kaguya-sama-Love-is-War-UR-episode-4-001.png?fit=1280%2C720&ssl=1",
            synopsis: "Kaguya and Miyuki find themselves caught in another love-related rivalry.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://staticg.sportskeeda.com/editor/2022/05/f95c4-16519132822118-1920.jpg",
            synopsis: "A heartfelt confession makes Kaguya reconsider her next steps.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://i0.wp.com/blog-media-cloud.nyc3.digitaloceanspaces.com/2022/04/Kaguya-sama-Love-is-War-UR-episode-4-005.png?fit=1280%2C720&ssl=1",
            synopsis: "Kaguya and Miyuki face new challenges with unexpected guests.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://i0.wp.com/blog-media-cloud.nyc3.digitaloceanspaces.com/2022/04/Kaguya-sama-Love-is-War-UR-episode-4-002.png?fit=1280%2C720&ssl=1",
            synopsis: "Kaguya’s insecurities surface as Miyuki’s popularity grows.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://i0.wp.com/blog-media-cloud.nyc3.digitaloceanspaces.com/2022/04/Kaguya-sama-Love-is-War-UR-episode-4-016.png?fit=1280%2C720&ssl=1",
            synopsis: "A school event brings Kaguya and Miyuki even closer.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://i0.wp.com/blog-media-cloud.nyc3.digitaloceanspaces.com/2022/04/Kaguya-sama-Love-is-War-UR-episode-4-022.png?fit=1280%2C720&ssl=1",
            synopsis: "A pivotal moment at the festival challenges both Kaguya and Miyuki.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://i0.wp.com/blog-media-cloud.nyc3.digitaloceanspaces.com/2022/04/Kaguya-sama-Love-is-War-UR-episode-4-017.png?fit=1280%2C720&ssl=1",
            synopsis: "Kaguya’s true feelings are tested as she faces a life-changing decision.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://i0.wp.com/blog-media-cloud.nyc3.digitaloceanspaces.com/2022/04/Kaguya-sama-Love-is-War-UR-episode-4-020.png?fit=1280%2C720&ssl=1",
            synopsis: "As the year closes, Kaguya and Miyuki experience a defining moment.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://i0.wp.com/blog-media-cloud.nyc3.digitaloceanspaces.com/2022/04/Kaguya-sama-Love-is-War-UR-episode-4-008.png?fit=1280%2C720&ssl=1",
            synopsis: "The season ends with a heartfelt exchange that changes their relationship.",
            downloadLink : ""

          }
        ]
      }
    ]
  },
  
  {
    title: "Ao Haru Ride",
    genre: "Romance",
    backgroundImage: "https://faos.home.blog/wp-content/uploads/2020/10/ao-haru-ride-futaba-friends.jpg?w=1024",
    synopsis: "A girl reunites with her first love and faces the changes time has brought them.",
    seasons: [
      {
        seasonNumber: 1,
        backgroundImage: "https://theanimeguru.com/wp-content/uploads/sites/3/2017/06/img_0249-1568x880.jpg",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://theanimeguru.com/wp-content/uploads/sites/3/2017/06/img_0246-1568x878.jpg",
            synopsis: "Futaba, now a high school student, reunites with her first love, Kou, who has changed since they last met.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://theanimeguru.com/wp-content/uploads/sites/3/2017/06/img_0245-1568x880.jpg",
            synopsis: "Futaba tries to rekindle her friendship with Kou but struggles with his distant personality.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://theanimeguru.com/wp-content/uploads/sites/3/2017/06/img_0248-1568x876.jpg",
            synopsis: "Futaba learns more about Kou’s past and begins to understand his cold behavior.",
            downloadLink : ""
          },
          {
            epiNum: 4,
        backgroundImage : "https://theanimeguru.com/wp-content/uploads/sites/3/2017/06/img_0247-1568x878.jpg",
            synopsis: "Futaba and Kou face misunderstandings as they try to rebuild their relationship.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://moesucks.com/wp-content/uploads/2014/08/ao-haru-ride-0504.jpg?w=625&h=351",
            synopsis: "As Futaba grows closer to Kou, she discovers her own feelings are more complicated than she thought.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://moesucks.com/wp-content/uploads/2014/08/ao-haru-ride-0505.jpg?w=625&h=351",
            synopsis: "Kou reveals parts of his troubled past, allowing Futaba to understand his changes even more.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://moesucks.com/wp-content/uploads/2014/08/ao-haru-ride-0507.jpg?w=625&h=351",
            synopsis: "Futaba struggles with jealousy when another girl takes an interest in Kou.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://moesucks.com/wp-content/uploads/2014/08/ao-haru-ride-0508.jpg?w=625&h=351",
            synopsis: "Futaba and Kou share a moment that strengthens their connection, despite lingering doubts.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://moesucks.com/wp-content/uploads/2014/08/ao-haru-ride-0510.jpg?w=625&h=351",
            synopsis: "Kou faces his own feelings and starts to acknowledge his affection for Futaba.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://moesucks.com/wp-content/uploads/2014/08/ao-haru-ride-0702.jpg?w=625&h=351",
            synopsis: "The season finale sees Futaba and Kou making a choice about their future together.",
            downloadLink : ""
          }
        ]
      }
    ]
  },
//},


//genre : "Action"{
  {
    title: "Darwin's Game",
    genre: "Action",
    backgroundImage: "https://img1.hulu.com/user/v3/artwork/4e31edbf-b849-4c49-8c18-3274e6641209?base_image_bucket_name=image_manager&base_image=d8739a9d-999a-4099-ac9a-fdfc24b1b5e9&size=600x338&format=webp",
    synopsis: "A high school student is dragged into a brutal survival game after receiving an invitation on his phone.",
    seasons: [
      {
        seasonNumber: 1,
        backgroundImage: "https://www.justwatch.com/images/backdrop/105054744/s1440/season-1.webp/season-1.webp",
        episodes: [
          { 
            epiNum: 1,
                      backgroundImage: "https://img1.hulu.com/user/v3/artwork/8c989505-8c61-4898-a2f7-43c2282fb2c4?base_image_bucket_name=image_manager&base_image=3dd891fb-544e-4b0c-a311-32809c20a395&size=600x338&format=webp",
            synopsis: "Kaname receives a mysterious invitation to a mobile game, which quickly turns deadly.",
            downloadLink : ""
          },
          { 
            epiNum: 2,
                      backgroundImage: "https://img1.hulu.com/user/v3/artwork/4e31edbf-b849-4c49-8c18-3274e6641209?base_image_bucket_name=image_manager&base_image=d8739a9d-999a-4099-ac9a-fdfc24b1b5e9&size=600x338&format=webp",
            synopsis: "Kaname starts to learn the brutal rules of Darwin's Game and meets a powerful new ally.",
            downloadLink : ""
          },
          { 
            epiNum: 3,
                    backgroundImage: "https://img2.hulu.com/user/v3/artwork/2e5d6d01-1bfb-4b5b-8c77-8b29c75a3fc0?base_image_bucket_name=image_manager&base_image=1effebef-aee7-4d90-af93-e4707e4b7bf9&size=600x338&format=webp",
            synopsis: "Kaname and Shuka team up, but their bond is tested in a life-or-death match against another player.",
            downloadLink : ""
          },
          { 
            epiNum: 4,
                     backgroundImage: "https://img1.hulu.com/user/v3/artwork/cf80e89a-775a-43c2-b7c7-8798789f62b0?base_image_bucket_name=image_manager&base_image=e5b359d0-86cb-4e53-b0ac-20dbfee2bf4a&size=600x338&format=webp",
            synopsis: "As the game intensifies, Kaname takes drastic measures to survive the ambush of powerful opponents.",
            downloadLink : ""
          },
          { 
            epiNum: 5,
                  backgroundImage: "https://img4.hulu.com/user/v3/artwork/998a4bc1-0c5d-483d-a3c4-9def5a8c141f?base_image_bucket_name=image_manager&base_image=c8f459f5-da61-4c40-a065-7991450573a3&size=600x338&format=webp",
            synopsis: "Kaname assembles a team and prepares to strike back against the formidable Eighth Clan.",
            downloadLink : ""
          },
          { 
            epiNum: 6,
                    backgroundImage: "https://img1.hulu.com/user/v3/artwork/21f9e888-62dd-4a9a-af60-14bb1d463ccc?base_image_bucket_name=image_manager&base_image=ea014886-ed78-4f11-8142-f08028304353&size=600x338&format=webp",
            synopsis: "Kaname and his allies make their move, but unexpected challenges arise in their battle for survival.",
            downloadLink : ""
          },
          { 
            epiNum: 7,
                  backgroundImage: "https://img3.hulu.com/user/v3/artwork/f7f86dba-2e4d-4c30-b628-4d426d6b75b7?base_image_bucket_name=image_manager&base_image=8e391970-5751-4ffe-9094-7c1b3809ca22&size=600x338&format=webp",
            synopsis: "Kaname faces off against Wang, the ruthless leader of the Eighth Clan, in a fight for dominance.",
            downloadLink : ""
          },
          { 
            epiNum: 8,
                   backgroundImage: "https://img2.hulu.com/user/v3/artwork/f1a06496-5a16-466f-b038-98af3f0cdccc?base_image_bucket_name=image_manager&base_image=4ac0fa0b-3f38-464e-8e7d-d27276fcdc66&size=600x338&format=webp",
            synopsis: "The alliances shift as players reevaluate their strategies and adapt to new threats in the game.",
            downloadLink : ""
          },
          { 
            epiNum: 9,
                    backgroundImage: "https://img4.hulu.com/user/v3/artwork/ad2ff927-594f-4523-b01e-4dff499ff4ed?base_image_bucket_name=image_manager&base_image=4dae9dc8-40d0-4939-a824-ef084504f17d&size=600x338&format=webp",
            synopsis: "Kaname encounters formidable new enemies as the game reaches a turning point.",
            downloadLink : ""
          },
          { 
            epiNum: 10,
                   backgroundImage: "https://img3.hulu.com/user/v3/artwork/1f8b71d2-af9a-4e72-a885-3e689c869d14?base_image_bucket_name=image_manager&base_image=962a61db-05ff-42fd-b19b-ae6e26a032b8&size=600x338&format=webp",
            synopsis: "The battle intensifies, pushing Kaname and his allies to their limits in a race for survival.",
            downloadLink : ""
          },
          { 
            epiNum: 11,
            
            backgroundImage: "https://img.hulu.com/user/v3/artwork/ada10f5b-b31e-4e13-ac26-a5a1d732b97e?base_image_bucket_name=image_manager&base_image=45c3e479-a48e-413b-b897-cc5f8ddd8bd3&size=600x338&format=webp",
            synopsis: "Kaname takes a stand, establishing a new set of rules and forging a path for the future.",
            downloadLink : ""
          }
        ]
      }
    ]
  },

  {
    title: "One Punch Man",
    genre: "Action",
    backgroundImage: "https://images.thedirect.com/media/article_full/one-punch-man-season-3-release.jpg?imgeng=/cmpr_60/w_auto",
    synopsis: "A hero who can defeat any opponent with a single punch searches for meaning.",
    seasons: [
      {
        seasonNumber: 1,
        backgroundImage : "https://img4.hulu.com/user/v3/artwork/54a25fcf-a472-4d40-9968-13e2957e5abf?base_image_bucket_name=image_manager&base_image=38e27cd2-8318-41c3-8348-616d3ed1c9dc&size=1024x576&format=webp",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/34ebf58e-5a2a-4efa-8e4d-fb16039a3051?base_image_bucket_name=image_manager&base_image=891e7913-da99-42aa-9f63-6a4bbbdb5514&size=600x338&format=webp",
            synopsis: "Saitama, a seemingly ordinary man, discovers his power to defeat any foe with a single punch.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/85c3d295-2234-4fd9-994a-417b30b03e26?base_image_bucket_name=image_manager&base_image=8c24d0a7-a496-445e-8af0-4758008059bd&size=600x338&format=webp",
            synopsis: "Genos, a cyborg hero, learns about Saitama’s incredible strength and becomes his disciple.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/dac5e4b5-fa11-45f2-991f-e6eb61f1f617?base_image_bucket_name=image_manager&base_image=7ed8e12a-1cfd-4e0a-995b-9d7b55a6df9d&size=600x338&format=webp",
            synopsis: "Saitama takes on various monstrous foes, all of whom fall with a single punch, leaving him unfulfilled.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/54604aae-24da-4ec1-a6b5-24f8b7d4a270?base_image_bucket_name=image_manager&base_image=bafc7e8a-f345-458a-8543-fdf3e76164a1&size=600x338&format=webp",
            synopsis: "Genos and Saitama face off in a sparring match, showcasing their respective strengths.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/3b12f124-5fed-4f03-a395-9e9796c1aa41?base_image_bucket_name=image_manager&base_image=13cea1f6-861c-461b-8511-5383db984aaf&size=600x338&format=webp",
            synopsis: "A powerful monster appears, and Saitama must step in to save the day.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/a95670a4-7a73-4864-8c92-2d5da72ff5b3?base_image_bucket_name=image_manager&base_image=99c149cf-6585-4e49-a3d0-d4d5641ad65a&size=600x338&format=webp",
            synopsis: "The Hero Association approaches Saitama, offering him a chance to become a registered hero.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/5ee6da0c-9dc6-4a26-9cd1-1222c0d19069?base_image_bucket_name=image_manager&base_image=bf1b4472-87d9-4d8f-b037-4b444f7acab7&size=600x338&format=webp",
            synopsis: "Saitama starts his hero career but quickly grows frustrated with the mundane duties.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/6c026286-73de-4a99-b4e7-5ffd94c4fd3d?base_image_bucket_name=image_manager&base_image=492a714e-297c-464f-b648-fc67d4a44e4c&size=600x338&format=webp",
            synopsis: "An alien invader named Boros arrives on Earth, challenging Saitama to a thrilling battle.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/8b5cde15-8195-4cb8-81b0-04de44746de9?base_image_bucket_name=image_manager&base_image=92d69bc9-24b8-4764-9e35-6fca2788ba75&size=600x338&format=webp",
            synopsis: "Saitama faces Boros in an intense showdown, testing his strength like never before.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/d0c5aec3-e453-42c6-870a-f191c7bfe9d3?base_image_bucket_name=image_manager&base_image=d41fd679-d95d-4c73-bfa6-2b93d1676c84&size=600x338&format=webp",
            synopsis: "The battle concludes as Saitama defeats Boros, returning to his unremarkable life as a hero.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/fc3ba068-7230-417f-b02b-cbed31350341?base_image_bucket_name=image_manager&base_image=120a5fe0-2de4-4150-9fb5-34c4a2ade5ee&size=600x338&format=webp",
            synopsis: "Saitama realizes the endless cycle of meaningless fights, continuing his search for purpose.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/4c21ad63-3989-4152-936b-1676396272e0?base_image_bucket_name=image_manager&base_image=62bf9194-36a4-46d4-8c94-4d90c17c23dd&size=600x338&format=webp",
            synopsis: "Saitama finishes the season with reflections on heroism, strength, and his place in the world.",
            downloadLink : ""
          }
        ]
      },
      {
        seasonNumber: 2,
        backgroundImage : "https://img1.hulu.com/user/v3/artwork/f768e03e-fed5-4d9d-afb2-a240b483b0df?base_image_bucket_name=image_manager&base_image=ebc435f1-0c16-4e20-b4b1-9c750629b402&size=600x338&format=webp",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/7d5b8ecb-f2d8-46db-a4f7-1adf602d1bbe?base_image_bucket_name=image_manager&base_image=6bc188f7-d407-4093-8422-23a6b9e15757&size=600x338&format=webp",
            synopsis: "A new threat arises in the form of the Monster Association, challenging Saitama and other heroes.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://img.hulu.com/user/v3/artwork/5d29fd54-4133-46ed-94d8-ddedd023ed5f?base_image_bucket_name=image_manager&base_image=e7ab9ab9-d245-4fd1-af26-95124afbe3d6&size=600x338&format=webp",
            synopsis: "Garou, a former hero hunter, begins targeting heroes to prove his own strength.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/30dd85c4-c518-4479-8351-b4aa48337f8e?base_image_bucket_name=image_manager&base_image=5ed3457a-d1fc-4834-9e94-286858e6c555&size=600x338&format=webp",
            synopsis: "Saitama continues his journey, entering a martial arts tournament to find a worthy opponent.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://img.hulu.com/user/v3/artwork/683c8a27-c699-4a2e-9703-9618f2d02992?base_image_bucket_name=image_manager&base_image=04ea235f-6d4d-48a3-b41a-2f3fcf515cc6&size=600x338&format=webp",
            synopsis: "Garou confronts multiple heroes at once, displaying his remarkable combat abilities.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/933a56d1-5829-415b-ac5f-9cecc4af7cce?base_image_bucket_name=image_manager&base_image=e92b6bfe-68bd-4eee-82d6-dfab2bb01d66&size=600x338&format=webp",
            synopsis: "Saitama learns more about the Hero Association’s inner workings and its issues.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://img3.hulu.com/user/v3/artwork/c3668ede-4e08-45fd-aa0e-e88f4e621b13?base_image_bucket_name=image_manager&base_image=06c51499-0185-47ee-b049-1b057dc78d6d&size=600x338&format=webp",
            synopsis: "Garou’s battle intensifies, leading to a confrontation with S-Class heroes.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://img.hulu.com/user/v3/artwork/1957a015-a3dc-4054-a82a-911bbe14bfcc?base_image_bucket_name=image_manager&base_image=56f967d3-a743-4a28-a3bd-36afff088aa2&size=600x338&format=webp",
            synopsis: "Saitama faces new monsters and grows increasingly frustrated with his mundane hero life.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/e68cbfc4-517e-428d-a80b-414ac565c8a3?base_image_bucket_name=image_manager&base_image=8c8d124f-6cc9-4a11-b644-4b7df5536452&size=600x338&format=webp",
            synopsis: "Garou’s journey as a hero hunter takes a toll on him as he fights against overwhelming odds.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/ad27cff4-7e7b-4950-90f6-eaac5026fef4?base_image_bucket_name=image_manager&base_image=c933a505-d002-4d92-bbea-de0111afc0cc&size=600x338&format=webp",
            synopsis: "The Monster Association grows bolder, escalating the conflict with the Hero Association.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://img3.hulu.com/user/v3/artwork/5ef6a3a3-629d-4ac8-a98a-9d6e4818ec5e?base_image_bucket_name=image_manager&base_image=dfcfb4df-d041-4d58-afb0-ced706e0d8ce&size=600x338&format=webp",
            synopsis: "Saitama’s search for meaning continues as he meets new allies and adversaries.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://img3.hulu.com/user/v3/artwork/5ef6a3a3-629d-4ac8-a98a-9d6e4818ec5e?base_image_bucket_name=image_manager&base_image=dfcfb4df-d041-4d58-afb0-ced706e0d8ce&size=600x338&format=webp",
            synopsis: "Garou’s inner struggles lead to an intense battle against the Hero Association’s strongest.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://img3.hulu.com/user/v3/artwork/062b359d-b033-4a57-80bd-270739ff4e6f?base_image_bucket_name=image_manager&base_image=e0ed5f44-e684-4e15-9464-b8a35c24653e&size=600x338&format=webp",
            synopsis: "Season finale: Saitama confronts the Monster King, leaving an impact on the hero world.",
            downloadLink : ""
          }
        ]
      }
    ]
  },

  {
    title: "Fate/Zero",
    genre: "Action",
    backgroundImage: "https://images.squarespace-cdn.com/content/v1/52a28c62e4b0b9264e00c55a/1433095857903-JZCGB06DEUHLVEOP1063/upload.jpeg?format=1500w",
    synopsis: "Seven mages summon heroic spirits to fight in a war for the Holy Grail.",
    seasons: [
      {
        seasonNumber: 1,
        backgroundImage : "https://img2.hulu.com/user/v3/artwork/9578a817-6bbb-4ee2-b2ec-b73c28b0ff8a?base_image_bucket_name=image_manager&base_image=59a45fb7-02ee-40bb-aa4c-76d0516fe708&size=1024x576&format=webp",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://img3.hulu.com/user/v3/artwork/017ceed0-f50c-4bbe-aa74-7a0bbc5bbb6b?base_image_bucket_name=image_manager&base_image=3552a734-ddfa-4252-9b8b-2d640ad1cdc9&size=600x338&format=webp",
            synopsis: "The Fourth Holy Grail War begins, as the mages summon their Servants to fight for the ultimate prize.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://img3.hulu.com/user/v3/artwork/4a70c6a3-6f39-4cd5-9f2b-c5f03425903e?base_image_bucket_name=image_manager&base_image=8f1d106c-7873-4015-b604-38bfc09e2baa&size=600x338&format=webp",
            synopsis: "As alliances form, the true nature of the war and the dangers that await each Master become apparent.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://img3.hulu.com/user/v3/artwork/96a0f987-d597-4079-bade-1f38113a719d?base_image_bucket_name=image_manager&base_image=45b8b639-9d73-4786-854f-5d90f6d42deb&size=600x338&format=webp",
            synopsis: "The first clashes between the Servants lead to unexpected betrayals and reveal hidden motivations.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/0c164d56-85bb-4f51-aac1-422eba50fc37?base_image_bucket_name=image_manager&base_image=1f3d1f7a-a63a-47d5-9596-742ab233c44d&size=600x338&format=webp",
            synopsis: "Kirei Kotomine’s dark past is explored, as his role in the Holy Grail War begins to take shape.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/ad957195-b79a-4646-8f2b-d996e2922669?base_image_bucket_name=image_manager&base_image=952bd2c6-24e3-4ea8-9633-c3d30ff01b11&size=600x338&format=webp",
            synopsis: "Rider’s noble intentions are tested in a brutal battle against Lancer, as the stakes escalate.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/db6aab97-5304-4612-891c-c1ed1196a755?base_image_bucket_name=image_manager&base_image=f162f1fb-f165-4ca1-b068-54c629a49ff8&size=600x338&format=webp",
            synopsis: "The shadows of previous wars loom large as the battles intensify, leading to devastating losses.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/20fd78ac-08a1-46ce-8bd4-a869c48cc421?base_image_bucket_name=image_manager&base_image=3c20d72b-6db4-47f9-9a9b-a3fbb35d37ed&size=600x338&format=webp",
            synopsis: "The true nature of the Holy Grail is revealed, posing moral dilemmas for the remaining Masters.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://img.hulu.com/user/v3/artwork/e4ec30cb-81a7-4222-b222-64043b35dd4b?base_image_bucket_name=image_manager&base_image=77e69e2d-74c6-4374-bc0f-6fc53b44bdce&size=600x338&format=webp",
            synopsis: "A battle royale ensues, with Servants fighting for dominance and survival as alliances shatter.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/c710cce5-0b40-4548-969c-cd91313a8832?base_image_bucket_name=image_manager&base_image=59f9ae4f-d72a-428b-aba9-6036e4dc7d9e&size=600x338&format=webp",
            synopsis: "As the war progresses, the psychological toll on the Masters becomes apparent.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://img3.hulu.com/user/v3/artwork/c0e2b371-6cb9-4825-a792-be991faa3e9e?base_image_bucket_name=image_manager&base_image=9d16527b-fa83-4b4e-a4d5-f1ceda69d006&size=600x338&format=webp",
            synopsis: "Kirei’s past collides with the present as revelations threaten to alter the course of the war.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/719a42c5-030d-4f78-88f0-4c4d46e1c2f5?base_image_bucket_name=image_manager&base_image=081b9d0f-4126-47f6-bfdb-340df325f520&size=600x338&format=webp",
            synopsis: "The penultimate battle brings the remaining Masters and Servants to a climax of ambition and despair.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/8da4d3ee-f29e-4da6-a59f-282e8575223a?base_image_bucket_name=image_manager&base_image=eca57cd6-4ce6-4d38-b002-0883283490fb&size=600x338&format=webp",
            synopsis: "The culmination of the war leads to a final confrontation that will determine the fate of the Holy Grail.",
            downloadLink : ""
          }
        ]
      },
      {
        seasonNumber: 2,
        backgroundImage: "https://img2.hulu.com/user/v3/artwork/9369793f-7c0f-485d-94d1-95dd4c452acd?base_image_bucket_name=image_manager&base_image=6260013d-ee20-4416-b556-1ee754908d7f&size=600x338&format=webp",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://img.hulu.com/user/v3/artwork/c1c7275a-2d83-48c5-9781-97ed2e29aadf?base_image_bucket_name=image_manager&base_image=bd05b6ea-5430-4f1a-bf98-6e951af41487&size=600x338&format=webp",
            synopsis: "The aftermath of the previous war sets the stage for new power dynamics among the surviving Masters.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/11f1130b-762d-4631-8cbd-5ed1fa7b9fff?base_image_bucket_name=image_manager&base_image=a86f41b9-2cc1-4049-8b4a-ed8e6fdf7b12&size=600x338&format=webp",
            synopsis: "As new participants enter the fray, the true stakes of the Holy Grail War are brought to light.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/80b14038-ad00-4fa6-a4fa-4f223c66cbbc?base_image_bucket_name=image_manager&base_image=e1852528-c2bb-4c01-b6b2-2057c26da5cf&size=600x338&format=webp",
            synopsis: "A shocking betrayal rocks the battlefield, leading to devastating consequences for all involved.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://img.hulu.com/user/v3/artwork/5d5e6906-91e0-4987-8d0e-765272c62b36?base_image_bucket_name=image_manager&base_image=1f50104f-4e50-411f-bef1-1d7a0cf0fed7&size=600x338&format=webp",
            synopsis: "New alliances are forged in the wake of chaos, but trust is a rare commodity in the war.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/c80bf178-1db3-41fc-9a64-04ded0014888?base_image_bucket_name=image_manager&base_image=77ef6da2-d1e2-4f7e-bdc6-1336941744cf&size=600x338&format=webp",
            synopsis: "The emotional toll of the war becomes clearer as characters confront their motivations and fears.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://img.hulu.com/user/v3/artwork/58186033-9cd8-4d0b-bc24-ddf567d69b5a?base_image_bucket_name=image_manager&base_image=38b35dd5-e6a1-4289-a9b3-c8606953a5b9&size=600x338&format=webp",
            synopsis: "Kirei’s growing influence complicates the dynamics, pushing others to reconsider their strategies.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/8852c413-006b-4fc8-b743-7bc886309754?base_image_bucket_name=image_manager&base_image=be5648b1-27e1-4211-af1e-9b24c62d679b&size=600x338&format=webp",
            synopsis: "The arrival of unexpected foes shifts the balance of power, making survival the priority.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/32605af2-6fcd-41be-845d-27e8a01b7cc3?base_image_bucket_name=image_manager&base_image=b020ccab-b072-468e-9e1c-3a1ecd1b5e14&size=600x338&format=webp",
            synopsis: "Confrontations escalate as old rivalries reignite, leading to breathtaking battles.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/f695f4dc-d8ae-4ec3-bc4d-5cb5980a6899?base_image_bucket_name=image_manager&base_image=c0194345-118f-4b97-94eb-5ee365c6f4b8&size=600x338&format=webp",
            synopsis: "A pivotal moment in the war forces the Masters to make impossible choices that will affect their futures.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/c4d98af6-b322-4f8e-8217-ae17ad7d6e7e?base_image_bucket_name=image_manager&base_image=fc93ef1a-9c30-4b0c-a199-fd92c8c8277a&size=600x338&format=webp",
            synopsis: "The war’s true nature is revealed, leaving characters questioning their values and alliances.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://img3.hulu.com/user/v3/artwork/0e10b1ce-5ff2-489d-b0aa-567ac712ee85?base_image_bucket_name=image_manager&base_image=3c84e412-bd00-4b11-97bd-e0a3af481798&size=600x338&format=webp",
            synopsis: "As the final battles approach, the emotional stakes rise, testing friendships and loyalties.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://img.hulu.com/user/v3/artwork/e122f469-7093-4e62-b9c4-07528ad1c92c?base_image_bucket_name=image_manager&base_image=e610a2a4-5af7-48ca-9903-11f315f82824&size=600x338&format=webp",
            synopsis: "The conclusion of the Holy Grail War leaves lasting repercussions, shaping the destinies of the survivors.",
            downloadLink : ""
          }
        ]
      }
    ]
  },

  {
    title: "Vinland Saga",
    genre: "Action",
    backgroundImage: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*aRgVjpScRTPByVv2cI6YYw.png",
    synopsis: "A young Viking seeks revenge for his father's murder and becomes entangled in war.",
    seasons: [
      {
        seasonNumber: 1,
        backgroundImage : "https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F9sIjJIHGSOYaAqU7pe2TSSNRmS0.jpg",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F4lJdtYNzhrUfAsJ9PkJXGHqI5fO.jpg",
            synopsis: "Thorfinn grows up hearing tales of Vinland, a peaceful land far to the west. His life changes when he meets the mercenary Askeladd.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FuOHYGhjbnj172E3TOLXDhx4FHbn.jpg",
            synopsis: "Askeladd’s crew engages in fierce combat, and Thorfinn begins to understand the brutal reality of war.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FiMl5CIdLGYJSw9H8ZKt1bnwJgUX.jpg",
            synopsis: "Thorfinn faces his first true battle and learns the importance of survival in the harsh Viking world.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Frk8O2qX6Vlr3vayXeHveE46syDF.jpg",
            synopsis: "Askeladd’s crew encounters new allies and foes, testing Thorfinn’s resolve and dedication to his revenge.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FsoYXAdXZ5Sl53x6H4a1gUPAWl5M.jpg",
            synopsis: "Thorfinn begins to challenge Askeladd, but he must prove his strength to earn the chance for a duel.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://static.wikia.nocookie.net/vinlandsaga/images/9/9e/Thors_and_Thorkell_defend_in_battle.png/revision/latest/scale-to-width-down/1000?cb=20200103025906",
            synopsis: "In England, Askeladd’s crew faces ambushes, and Thorfinn is forced to confront his growing animosity.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "",
            synopsis: "Thorfinn gets closer to his goal of vengeance, but unforeseen events pull him deeper into Askeladd’s plans.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "",
            synopsis: "Askeladd reveals his own ambitions, creating a rift within his crew and altering Thorfinn’s path.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "",
            synopsis: "Amid political intrigue, Thorfinn’s quest for revenge is tested by unforeseen alliances and betrayals.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "",
            synopsis: "In a climactic battle, Thorfinn inches closer to avenging his father, but his resolve faces new challenges.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://wallpapercave.com/wp/wp5337965.jpg",
            synopsis: "Thorfinn’s confrontation with Askeladd takes a shocking turn, revealing the complexity of his journey.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://wallpapercave.com/wp/wp5337970.jpg",
            synopsis: "Askeladd’s plans unfold, and Thorfinn’s path is set on a collision course with destiny.",
            downloadLink : ""
          }
        ]
      },
      {
        seasonNumber: 2,
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://wallpapercave.com/wp/wp5337975.jpg",
            synopsis: "In a time of peace, Thorfinn struggles to find purpose after a lifetime of violence and revenge.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://wallpapercave.com/wp/wp5337980.jpg",
            synopsis: "As Thorfinn begins a new chapter, he encounters people who challenge his beliefs about war and honor.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://wallpapercave.com/wp/wp5337985.jpg",
            synopsis: "Thorfinn's past catches up to him as he faces consequences for his former actions.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://wallpapercave.com/wp/wp5337990.jpg",
            synopsis: "New alliances form as Thorfinn and his companions find themselves drawn into new conflicts.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://wallpapercave.com/wp/wp5337995.jpg",
            synopsis: "Thorfinn reflects on his past, grappling with guilt and seeking a path towards redemption.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://wallpapercave.com/wp/wp5338000.jpg",
            synopsis: "Thorfinn must navigate dangerous political waters as his ideals clash with the harsh realities of Viking life.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://wallpapercave.com/wp/wp5338005.jpg",
            synopsis: "Facing new threats, Thorfinn must decide between a peaceful life and the warrior's path he once knew.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://wallpapercave.com/wp/wp5338010.jpg",
            synopsis: "Thorfinn confronts his inner demons, embarking on a journey of self-discovery and growth.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://wallpapercave.com/wp/wp5338015.jpg",
            synopsis: "As his journey continues, Thorfinn faces tests that challenge his commitment to his new ideals.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://wallpapercave.com/wp/wp5338020.jpg",
            synopsis: "In a moment of truth, Thorfinn must choose between vengeance and a peaceful future.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://wallpapercave.com/wp/wp5338025.jpg",
            synopsis: "Thorfinn's path leads him to confront the ghosts of his past and make a final decision about his future.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://wallpapercave.com/wp/wp5338030.jpg",
            synopsis: "With newfound resolve, Thorfinn embarks on a journey that will define his legacy.",
            downloadLink : ""
          }
        ]
      }
    ]
  },

  {
    "title": "Jujutsu Kaisen",
    "genre": "Action",
    "backgroundImage": "https://static.wikia.nocookie.net/08cb8af6-daab-42bf-a591-c23e9ccbe09a/scale-to-width-down/800",
    "synopsis": "High school student Yuji Itadori discovers the world of jujutsu sorcery and becomes bound to a powerful curse, propelling him into battles against deadly spirits.",
    "seasons": [
      {
        "seasonNumber": 1,
        "backgroundImage": "https://animerants.net/wp-content/uploads/2024/01/jujutsu-kaisen-season-1-wallpaper.png?w=1400&h=400&crop=1",
        "episodes": [
          {
            "epiNum": 1,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/1-1.jpg",
            "synopsis": "Yuji encounters curses and ingests a powerful cursed object, transforming his life.",
            "downloadLink": ""
          },
          {
            "epiNum": 2,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/2-1.jpg",
            "synopsis": "Yuji joins Jujutsu High and meets his new classmates.",
            "downloadLink": ""
          },
          {
            "epiNum": 3,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/3-1.jpg",
            "synopsis": "The students face a dangerous curse, testing their teamwork.",
            "downloadLink": ""
          },
          {
            "epiNum": 4,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/4-1.jpg",
            "synopsis": "Gojo Satoru trains Yuji, showcasing his immense power.",
            "downloadLink": ""
          },
          {
            "epiNum": 5,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/5-1.jpg",
            "synopsis": "Yuji faces a moral challenge as he learns about the duties of a sorcerer.",
            "downloadLink": ""
          },
          {
            "epiNum": 6,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/6-1.jpg",
            "synopsis": "The students battle fierce cursed spirits at a detention center.",
            "downloadLink": ""
          },
          {
            "epiNum": 7,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/7-1.jpg",
            "synopsis": "Yuji uncovers the extent of his powers in a battle with a powerful curse.",
            "downloadLink": ""
          },
          {
            "epiNum": 8,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/8-1.jpg",
            "synopsis": "A new threat looms as powerful curses plot against Jujutsu High.",
            "downloadLink": ""
          },
          {
            "epiNum": 9,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/9-1.jpg",
            "synopsis": "The Kyoto Sister School Exchange Event begins, pitting students against each other.",
            "downloadLink": ""
          },
          {
            "epiNum": 10,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/10-1.jpg",
            "synopsis": "Yuji and friends face the Kyoto school students in fierce battles.",
            "downloadLink": ""
          },
          {
            "epiNum": 11,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/11-1.jpg",
            "synopsis": "A dramatic showdown tests the students' abilities and resolve.",
            "downloadLink": ""
          },
          {
            "epiNum": 12,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/12-1.jpg",
            "synopsis": "Powerful curses infiltrate the Exchange Event, raising the stakes.",
            "downloadLink": ""
          }
        ]
      },
      {
        "seasonNumber": 2,
        backgroundImage : "https://jujutsukaisen.jp/images/episodes/24-1.jpg",
        "episodes": [
          {
            "epiNum": 1,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/1-2.jpg",
            "synopsis": "Yuji learns about Jujutsu High’s history and its past sorcerers.",
            "downloadLink": ""
          },
          {
            "epiNum": 2,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/2-2.jpg",
            "synopsis": "Gojo’s past with Geto reveals complex secrets.",
            "downloadLink": ""
          },
          {
            "epiNum": 3,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/3-2.jpg",
            "synopsis": "Gojo and Geto battle a powerful curse, shaping Jujutsu High’s future.",
            "downloadLink": ""
          },
          {
            "epiNum": 4,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/4-2.jpg",
            "synopsis": "Yuji’s intense training prepares him for battles with curses.",
            "downloadLink": ""
          },
          {
            "epiNum": 5,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/5-2.jpg",
            "synopsis": "Deadly curses emerge in the Shibuya incident, testing Jujutsu High.",
            "downloadLink": ""
          },
          {
            "epiNum": 6,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/6-2.jpg",
            "synopsis": "Yuji and allies struggle to survive Shibuya’s chaotic streets.",
            "downloadLink": ""
          },
          {
            "epiNum": 7,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/7-2.jpg",
            "synopsis": "Yuji pushes his limits against a powerful enemy.",
            "downloadLink": ""
          },
          {
            "epiNum": 8,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/8-2.jpg",
            "synopsis": "Gojo fights overwhelming curses alone in Shibuya.",
            "downloadLink": ""
          },
          {
            "epiNum": 9,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/9-2.jpg",
            "synopsis": "Yuji and Megumi make a stand against high-level curses.",
            "downloadLink": ""
          },
          {
            "epiNum": 10,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/10-2.jpg",
            "synopsis": "The Shibuya incident’s climax leaves Jujutsu High in turmoil.",
            "downloadLink": ""
          },
          {
            "epiNum": 11,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/11-2.jpg",
            "synopsis": "Yuji confronts the aftermath of the Shibuya incident.",
            "downloadLink": ""
          },
          {
            "epiNum": 12,
            "backgroundImage": "https://jujutsukaisen.jp/images/episodes/12-2.jpg",
            "synopsis": "With new resolve, Yuji faces future battles in the world of curses.",
            "downloadLink": ""
          }
        ]
      }
    ]
  },  

  {
    title: "Fire Force",
    genre: "Action",
    backgroundImage: "https://cdn.animeukiyo.com/wp-content/uploads/2020/11/fire-force-1200x675.jpg",
    synopsis: "In a world plagued by spontaneous human combustion, special fire brigades battle to protect humanity from demonic Infernals.",
    seasons: [
      {
        seasonNumber: 1,
        backgroundImage: "https://fireforce-anime.jp/3rdwp/wp-content/themes/enn-enn-season3-teaser/_assets/images/fv/webp/fv_000.webp",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/07/Fire-Force-Episode-01-Figure-07.jpg?w=960&ssl=1",
            synopsis: "Shinra Kusakabe joins the Fire Force Company 8 and reveals his fiery powers to combat Infernals.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/07/Fire-Force-Episode-01-Figure-02.jpg?w=640&ssl=1",
            synopsis: "Shinra faces his first battle as a member of Company 8 and confronts his troubled past.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/07/Fire-Force-Episode-01-Figure-03.jpg?w=640&ssl=1",
            synopsis: "Company 8 investigates a mysterious outbreak of Infernals and uncovers a hidden threat.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/07/Fire-Force-Episode-01-Figure-04.jpg?w=640&ssl=1",
            synopsis: "Shinra encounters a rival pyrokinetic, Arthur Boyle, who challenges him to a fiery showdown.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/07/Fire-Force-Episode-01-Figure-05.jpg?w=640&ssl=1",
            synopsis: "Company 8 takes on a dangerous mission to stop a powerful Infernal terrorizing the city.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/08/Fire-Force-Episode-06-Figure-02.jpg?w=640&ssl=1",
            synopsis: "Shinra and his teammates learn about the origins of spontaneous human combustion and the role of the Evangelist.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/08/Fire-Force-Episode-07-Figure-03.jpg?w=640&ssl=1",
            synopsis: "The squad faces new challenges as a mysterious White-Clad organization emerges with sinister plans.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/09/Fire-Force-Episode-08-Figure-04.jpg?w=640&ssl=1",
            synopsis: "Shinra's search for his brother intensifies as he uncovers shocking truths about his family.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/09/Fire-Force-Episode-09-Figure-02.jpg?w=960&ssl=1",
            synopsis: "Company 8 teams up with other brigades to investigate an Infernal outbreak in the Nether.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/09/Fire-Force-Episode-10-Figure-01.jpg?w=640&ssl=1",
            synopsis: "Shinra faces an intense battle in the Nether and discovers the true power of his Adolla Burst.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/09/Fire-Force-Episode-11-Figure-05.jpg?w=640&ssl=1",
            synopsis: "Company 8 continues their mission in the Nether, facing dangerous foes and deadly challenges.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/10/Fire-Force-Episode-12-Figure-03.jpg?resize=768%2C432&ssl=1",
            synopsis: "The final confrontation in the Nether reveals secrets that could change the course of the Fire Force.",
            downloadLink : ""
          }
        ]
      },
      {
        seasonNumber: 2,
        backgroundImage : "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/10/Fire-Force-Episode-13-Figure-02.jpg?resize=768%2C432&ssl=1",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/10/Fire-Force-Episode-13-Figure-04.jpg?resize=768%2C432&ssl=1",
            synopsis: "Company 8 faces a new wave of Infernals as they continue their mission to protect humanity.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/10/Fire-Force-Episode-13-Figure-06.jpg?resize=768%2C432&ssl=1",
            synopsis: "Shinra trains to enhance his abilities and faces a tough opponent from the White-Clad.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/10/Fire-Force-Episode-14-Figure-04.jpg?resize=768%2C431&ssl=1",
            synopsis: "Company 8 investigates a series of Infernal outbreaks linked to the Evangelist’s followers.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/11/Fire-Force-Episode-15-Figure-05.jpg?resize=768%2C432&ssl=1",
            synopsis: "Shinra discovers new powers within his Adolla Burst, but struggles to control them.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/11/Fire-Force-Episode-16-Figure-03.jpg?resize=768%2C432&ssl=1",
            synopsis: "Company 8 teams up with other brigades to counter the White-Clad's escalating attacks.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/11/Fire-Force-Episode-18-Figure-04.jpg?resize=768%2C431&ssl=1",
            synopsis: "Shinra learns of the Pillars, individuals crucial to the Evangelist's grand scheme.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/12/Fire-Force-Episode-19-Figure-10.jpg?w=960&ssl=1",
            synopsis: "Company 8 faces a deadly battle as the Evangelist's forces launch an all-out assault.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/12/Fire-Force-Episode-19-Figure-01.jpg?resize=768%2C431&ssl=1",
            synopsis: "Shinra pushes himself to the limit to protect his comrades and stop the Evangelist.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/12/Fire-Force-Episode-23-Figure-07.jpg?resize=768%2C431&ssl=1",
            synopsis: "The Fire Force uncovers a deeper conspiracy linked to the spontaneous human combustion phenomena.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/12/Fire-Force-Episode-21-Figure-01.jpg?resize=768%2C432&ssl=1",
            synopsis: "Shinra confronts a powerful enemy, testing his limits in a fierce battle for survival.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/12/Fire-Force-Episode-23-Figure-08.jpg?w=959&ssl=1",
            synopsis: "Company 8 confronts the White-Clad's elite members in a showdown that could change everything.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://i0.wp.com/www.crowsworldofanime.com/wp-content/uploads/2019/12/Fire-Force-Episode-22-Figure-05.jpg?w=960&ssl=1",
            synopsis: "In the explosive season finale, Shinra faces the Evangelist's forces in a battle for humanity's future.",
            downloadLink : ""
          }
        ]
      }
    ]
  },

  {
    title: "Inuyashiki",
    genre: "Action",
    backgroundImage: "https://www.gamerfocus.co/wp-content/uploads/2018/01/Inuyashiki.jpg",
    synopsis: "An elderly man and a troubled teen gain powerful abilities after a strange accident, leading them down drastically different paths.",
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/8/87935.jpg",
            synopsis: "Ichiro Inuyashiki, an elderly man with a bleak life, is transformed after an accident, gaining a mysterious new body and powers.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/9/87936.jpg",
            synopsis: "Ichiro tests his new abilities and realizes he can heal people, while another man with similar powers uses them in darker ways.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/10/87937.jpg",
            synopsis: "The other man, Hiro Shishigami, begins a violent spree, pushing Ichiro to use his powers to stop him.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/11/87938.jpg",
            synopsis: "Ichiro saves lives in a hospital and publicly becomes a hero, while Hiro's destructive actions escalate.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/12/87939.jpg",
            synopsis: "As Hiro continues his rampage, Ichiro resolves to confront him directly, realizing the responsibility of his abilities.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/13/87940.jpg",
            synopsis: "A national manhunt for Hiro begins, and Ichiro faces new challenges as he tries to protect innocents.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/14/87941.jpg",
            synopsis: "Ichiro gains more control over his abilities and allies with others to prevent further violence.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/15/87942.jpg",
            synopsis: "Ichiro and Hiro clash as their paths collide, leading to a battle that puts countless lives at stake.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/16/87943.jpg",
            synopsis: "Hiro’s motives are questioned as Ichiro finds a way to bring hope to people amidst the chaos.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/17/87944.jpg",
            synopsis: "In a climactic showdown, Ichiro and Hiro face off in a final confrontation that will determine their legacies.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/18/87945.jpg",
            synopsis: "In the series finale, Ichiro makes a sacrifice for humanity, proving the hero he has become.",
            downloadLink : ""
          }
        ]
      }
    ]
  },

  //},

//genre : "mystery"{
  {
    title: "Erased",
    genre: "Mystery",
    backgroundImage: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/06/Erased.jpg",
    synopsis: "A young man with the ability to travel back in time tries to prevent a tragedy that affected his childhood.",
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/6/77862.jpg",
            synopsis: "Satoru Fujinuma discovers his power, 'Revival,' which sends him briefly back in time to prevent nearby tragedies.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/7/77863.jpg",
            synopsis: "After his mother's murder, Satoru's 'Revival' sends him back 18 years, where he tries to stop a series of kidnappings.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/8/77864.jpg",
            synopsis: "Satoru befriends Kayo Hinazuki, a lonely girl, as he tries to prevent her from becoming the kidnapper's next victim.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/9/77865.jpg",
            synopsis: "Satoru begins to see the signs of abuse in Kayo's life and makes efforts to protect her, while the mystery deepens.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/10/77866.jpg",
            synopsis: "Satoru's actions start changing the course of events, but new obstacles arise in his mission to save Kayo.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/11/77867.jpg",
            synopsis: "As Satoru grows closer to Kayo, he becomes more determined to stop the crimes, risking exposure of his plans.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/12/77868.jpg",
            synopsis: "Satoru's actions lead to major shifts in the timeline, as he works to ensure Kayo's safety and avoid more tragedies.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/13/77869.jpg",
            synopsis: "A breakthrough occurs as Satoru manages to alter Kayo's fate, but the kidnapper remains a threat.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/14/77870.jpg",
            synopsis: "Satoru continues his investigation, but a slip-up brings him closer to danger as the real villain watches him.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/15/77871.jpg",
            synopsis: "The kidnapper's identity is revealed, leading to a confrontation that pushes Satoru's 'Revival' to its limits.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/16/77872.jpg",
            synopsis: "In the present, Satoru faces the truth about his journey, his powers, and the person responsible for the tragedies.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/17/77873.jpg",
            synopsis: "The series finale sees Satoru confront the villain once more, determined to finally resolve the past.",
            downloadLink : ""
          }
        ]
      }
    ]
  },

  {
    title: "The Promised Neverland",
    genre: "Mystery",
    backgroundImage: "https://assets.mycast.io/posters/the-promised-neverland-live-action-fan-casting-poster-186564-large.jpg",
    synopsis: "A group of orphans uncovers the dark secrets of their idyllic orphanage and plans a daring escape.",
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/10/91955.jpg",
            synopsis: "Emma, Norman, and Ray discover the horrific truth about their orphanage when they try to return a forgotten toy.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/11/91956.jpg",
            synopsis: "The children formulate a plan to escape, while being watched closely by the suspicious 'Mom,' Isabella.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/12/91957.jpg",
            synopsis: "Emma and Norman investigate possible escape routes while testing their physical abilities.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/13/91958.jpg",
            synopsis: "The arrival of Sister Krone complicates the children's escape plans as she suspects their intentions.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/14/91959.jpg",
            synopsis: "Ray reveals his shocking role as a spy, but he also becomes an unexpected ally to Emma and Norman.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/15/91960.jpg",
            synopsis: "The children test Krone's trustworthiness, while Isabella tightens security around the orphanage.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/16/91961.jpg",
            synopsis: "Krone learns more about the children’s escape plans, but her ambitions bring unforeseen consequences.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/17/91962.jpg",
            synopsis: "The children put their escape plan into action, but Isabella's relentless pursuit puts everything at risk.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/18/91963.jpg",
            synopsis: "The group faces unexpected challenges as their escape unfolds, forcing them to make difficult decisions.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/19/91964.jpg",
            synopsis: "Emma and Ray lead a desperate final attempt to escape, pushing their courage and resolve to the limit.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/20/91965.jpg",
            synopsis: "The children confront Isabella one last time as they struggle to reach freedom.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/21/91966.jpg",
            synopsis: "The escape concludes with a heart-pounding climax as the children finally find their way out of the orphanage.",
            downloadLink : ""
          }
        ]
      },
      {
        seasonNumber: 2,
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1937/111859.jpg",
            synopsis: "Now in the outside world, the children face new dangers in a mysterious forest filled with demons.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1938/111860.jpg",
            synopsis: "Emma and Ray find unlikely allies as they navigate the unfamiliar terrain outside the orphanage.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1939/111861.jpg",
            synopsis: "The group discovers the horrifying history of the world they live in, and their place within it.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1940/111862.jpg",
            synopsis: "A deadly pursuit ensues as the children come closer to finding a way to true freedom.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1941/111863.jpg",
            synopsis: "Emma faces her toughest decision yet, one that will affect the future of all the orphans.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1942/111864.jpg",
            synopsis: "The group stumbles upon a hidden base, where they meet those fighting to end the human-demon conflict.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1943/111865.jpg",
            synopsis: "The children attempt a rescue mission, but the stakes grow higher with every move they make.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1944/111866.jpg",
            synopsis: "Emma and her friends face betrayal and unforeseen dangers as they push toward their goal.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1945/111867.jpg",
            synopsis: "The children confront the harsh realities of their mission, questioning their own beliefs.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1946/111868.jpg",
            synopsis: "In the season finale, the children make a stand for freedom, hoping to change the fate of all orphans.",
            downloadLink : ""
          }
        ]
      }
    ]
  },

  {
    title: "Psycho-Pass",
    genre: "Mystery",
    backgroundImage: "https://wallpapercave.com/wp/wp2592210.jpg",
    synopsis: "In a future where the state of mind can be quantified, enforcers must capture latent criminals before they act.",
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://static1.fandomspot.com/images/8f709249e66de50896c1777ecaa4f1f0.jpg",
            synopsis: "A rookie inspector joins the Public Safety Bureau and encounters the harsh reality of crime and justice.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://static1.fandomspot.com/images/92e88de47cd4b26d62268da705417b0c.jpg",
            synopsis: "As tensions rise, the team faces a serial killer with a unique method of eluding the law.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://static1.fandomspot.com/images/26ca9aa7cbe924ae2e5df5a1dc79e1e6.jpg",
            synopsis: "The team investigates a series of murders linked to an underground syndicate, testing their skills and resolve.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://static1.fandomspot.com/images/3c651f4c4f8cde7339ef92e09f2b6c25.jpg",
            synopsis: "A mysterious case arises, leading to a confrontation with a powerful enemy that challenges the system.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://static1.fandomspot.com/images/94ec79cb13a38e59b1c5c2df458e168b.jpg",
            synopsis: "The enforcers must navigate moral dilemmas as they pursue a criminal mastermind with a personal vendetta.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://static1.fandomspot.com/images/dba4af5c5a23a57922070d6b09ab12d0.jpg",
            synopsis: "A terrorist attack shakes the city, forcing the team to act quickly to prevent further chaos.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://static1.fandomspot.com/images/a65e4f53b11a1252cf817ad16da5380c.jpg",
            synopsis: "The investigation leads to shocking revelations about the nature of justice and the human psyche.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://static1.fandomspot.com/images/98cbe774b1cc51b079e6196de6a91ee2.jpg",
            synopsis: "A new case involving a cult tests the team's loyalties and challenges their beliefs about the system.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://static1.fandomspot.com/images/91e9f1f61dc9d85f91ae05f0c67b0c40.jpg",
            synopsis: "As the investigation deepens, the team uncovers a conspiracy that threatens the stability of society.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://static1.fandomspot.com/images/4170835c55a7e90a42bdfc739047c1f5.jpg",
            synopsis: "The stakes rise as personal ties are tested and the line between right and wrong blurs.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://static1.fandomspot.com/images/d84c8239a5a5620c2d60c8bc57fd63a7.jpg",
            synopsis: "A confrontation with a former ally reveals the true nature of their work and the price of justice.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://static1.fandomspot.com/images/b4f3078d58c0de39ef08e649c4a3732e.jpg",
            synopsis: "As the season comes to a close, the team faces their most significant challenge yet, testing their resolve and beliefs.",
            downloadLink : ""
          }
        ]
      },
      {
        seasonNumber: 2,
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://static1.fandomspot.com/images/4b1b63d1cd23b5b5d07a63707c4f3f3a.jpg",
            synopsis: "The story resumes with Akane Tsunemori, who is now a full inspector in the Public Safety Bureau, confronting a new threat.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://static1.fandomspot.com/images/4d902e4f4e5b8c9421a5a5f8c4ebde4f.jpg",
            synopsis: "As new criminals emerge, Akane and her team must adapt to changing circumstances and moral dilemmas.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://static1.fandomspot.com/images/cf019c5a1a72c558c40946ffb83aa2d4.jpg",
            synopsis: "The investigation into a recent crime leads to shocking discoveries about the criminal organization.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://static1.fandomspot.com/images/6d27e2346e14bb5df0c70754b1c62e2d.jpg",
            synopsis: "Tensions rise within the team as personal conflicts and philosophical differences come to light.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://static1.fandomspot.com/images/7f4ffacbfbb36264fd4368991e72ac2f.jpg",
            synopsis: "A confrontation with a rogue agent leads to moral questioning and a deeper exploration of the system.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://static1.fandomspot.com/images/57a776f36c24587c86bafee6d83da74d.jpg",
            synopsis: "As new threats arise, Akane must navigate complex relationships and the consequences of her decisions.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://static1.fandomspot.com/images/bd42f2511e36caa3d593c98e589019cb.jpg",
            synopsis: "The case leads to a confrontation with a shadowy organization intent on manipulating the system.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://static1.fandomspot.com/images/68a4b22c6c3c623b024678b487f36557.jpg",
            synopsis: "As the investigation progresses, Akane faces challenges that test her beliefs about justice and morality.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://static1.fandomspot.com/images/348fb3d4c677580e9b2da41dbdc9aaab.jpg",
            synopsis: "The stakes escalate as personal stakes become intertwined with the broader investigation.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://static1.fandomspot.com/images/1c676816b0a6c5e4c17f74c6be3c25c9.jpg",
            synopsis: "Akane's choices lead to significant consequences, forcing her to confront her role in the system.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://static1.fandomspot.com/images/a6d80fef12e4e631503bbd5035b3f6c8.jpg",
            synopsis: "The season builds to a dramatic confrontation that will test the limits of the law and justice.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://static1.fandomspot.com/images/07b5aa6885aa067d58a3ee648e9e34d0.jpg",
            synopsis: "In a gripping finale, Akane and her team must face the reality of their world and the choices they’ve made.",
            downloadLink : ""
          }
        ]
      }
    ]
  },

  {
    title: "Another",
    genre: "Mystery",
    backgroundImage: "https://cdn.myanimelist.net/images/anime/10/33767.jpg",
    synopsis: "A transfer student uncovers the terrifying curse affecting his class, leading to a series of deadly incidents.",
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1/33761.jpg",
            synopsis: "Kouichi Sakakibara transfers to Yomiyama North Middle School and encounters a strange girl named Mei Misaki.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/2/33762.jpg",
            synopsis: "Kouichi tries to learn more about the school's dark history, but his classmates are reluctant to share details.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/3/33763.jpg",
            synopsis: "Mysterious deaths begin, and Kouichi starts to understand the implications of the curse.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/4/33764.jpg",
            synopsis: "Kouichi and Mei investigate further, realizing the class is connected to a deadly chain of events.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/5/33765.jpg",
            synopsis: "The students try different tactics to avoid the curse, but tragedy strikes again.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/6/33766.jpg",
            synopsis: "Kouichi and Mei piece together clues that might lead to breaking the curse.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/7/33767.jpg",
            synopsis: "In a desperate attempt, the class uncovers past secrets that shed light on the mystery.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/8/33768.jpg",
            synopsis: "As they face greater dangers, Kouichi and Mei realize the curse's reach is deeper than they imagined.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/9/33769.jpg",
            synopsis: "The classmates devise a final plan to end the curse once and for all.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/10/33770.jpg",
            synopsis: "A shocking revelation changes everything, leading to a final showdown with the curse.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/11/33771.jpg",
            synopsis: "The mystery of the curse comes to light, with devastating consequences for those involved.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/12/33772.jpg",
            synopsis: "The final episode brings closure to the horror and unveils the origin of the curse.",
            downloadLink : ""
          }
        ]
      }
    ]
  },

  {
    title: "Terror in Resonance",
    genre: "Mystery",
    backgroundImage: "https://cdn.myanimelist.net/images/anime/1050/113316.jpg",
    synopsis: "Two teenage boys with a mysterious past embark on a series of terrorist attacks in Tokyo, challenging the city to uncover their motives.",
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1094/113320.jpg",
            synopsis: "In the aftermath of a terrorist attack, the police struggle to find leads as the attackers remain anonymous.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1094/113321.jpg",
            synopsis: "The mystery deepens as the attackers continue their game, and the authorities race against time to stop them.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1094/113322.jpg",
            synopsis: "As the boys reveal their true identities, their motives become clearer, drawing attention from various factions.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1094/113323.jpg",
            synopsis: "The duo's next move puts them on a collision course with law enforcement and raises the stakes of their mission.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1094/113324.jpg",
            synopsis: "A close call forces the boys to reconsider their actions and the implications of their choices.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1094/113325.jpg",
            synopsis: "New alliances form as the boys seek help, complicating their plans and increasing the tension.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1094/113326.jpg",
            synopsis: "The investigation heats up, and the boys are pushed to their limits as their pasts catch up with them.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1094/113327.jpg",
            synopsis: "As the threat escalates, the line between friend and foe blurs, forcing tough decisions.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1094/113328.jpg",
            synopsis: "The confrontation reaches its peak as the true purpose of their actions is revealed.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1094/113329.jpg",
            synopsis: "In a race against time, the boys must execute their final plan to achieve their goals.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1094/113330.jpg",
            synopsis: "The consequences of their actions come to fruition, leading to a shocking conclusion.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://cdn.myanimelist.net/images/anime/1094/113331.jpg",
            synopsis: "The series finale ties up loose ends as the boys confront their past and the legacy of their choices.",
            downloadLink : ""
          }
        ]
      }
    ]
  },
 // },


  {
    title: "Made in Abyss",
    genre: "Adventure",
    backgroundImage: "https://static1.fandomspot.com/images/0dc97599e5c4032db9f9a63c155fa80c.jpg",
    synopsis: "In a world where a vast chasm known as the Abyss beckons explorers, a young girl and her robot friend venture deep into its mysterious depths in search of her mother.",
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://static1.fandomspot.com/images/39e8778f1b788e57417e5db4f48b4509.jpg",
            synopsis: "Riko, a young girl, descends into the Abyss to find her mother, meeting a mysterious robot boy named Reg along the way.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://static1.fandomspot.com/images/68470c27f1b2c894b74586a36cc3efba.jpg",
            synopsis: "Riko and Reg face the dangers of the Abyss as they begin their adventure, encountering strange creatures and environments.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://static1.fandomspot.com/images/7ae4b537e79c76d3aa2b5f9e848dd64d.jpg",
            synopsis: "The duo faces their first real challenge in the Abyss, testing their skills and determination.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://static1.fandomspot.com/images/0471c23c1ff0fbe5c477b2f63c1bc634.jpg",
            synopsis: "As they delve deeper, Riko and Reg learn more about the Abyss and the perils it holds.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://static1.fandomspot.com/images/43eeb5111c36b17e6ae305d15d08a22d.jpg",
            synopsis: "Riko's resolve is tested when they face the harsh realities of the Abyss's effects on explorers.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://static1.fandomspot.com/images/4e7a1e4c24ec65ccecb3b1ed470f2bde.jpg",
            synopsis: "The duo encounters new allies and threats as they navigate the mysteries of the Abyss.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://static1.fandomspot.com/images/693891c780f23c372c1e1b3c0f401e89.jpg",
            synopsis: "Riko and Reg confront the challenges posed by the Abyss and learn about its history.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://static1.fandomspot.com/images/94b4e19b44c4c2705d030f6591824e83.jpg",
            synopsis: "The mysteries of the Abyss deepen as Riko and Reg encounter dangerous foes.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://static1.fandomspot.com/images/b9cd0b5b8475112ac48cc93647b85c81.jpg",
            synopsis: "Riko faces personal challenges and doubts as the journey continues deeper into the Abyss.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://static1.fandomspot.com/images/24f7c618a7d0599ec79fdb0340c4d118.jpg",
            synopsis: "Reg's true nature is revealed, changing the dynamics of their partnership.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://static1.fandomspot.com/images/d65ac57147375c2cc3b14654a4f3f8e7.jpg",
            synopsis: "The climax approaches as Riko and Reg prepare for the challenges that await in the Abyss.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://static1.fandomspot.com/images/3c226c3e75495d5b1f4e982b63bb0089.jpg",
            synopsis: "In the season finale, Riko's journey leads her to shocking discoveries about her mother and the Abyss.",
            downloadLink : ""
          }
        ]
      },
      {
        seasonNumber: 2,
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://static1.fandomspot.com/images/a051b3e8f56d19a844f7519e8c36d8b3.jpg",
            synopsis: "Riko and Reg continue their journey deeper into the Abyss, encountering new challenges and old foes.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://static1.fandomspot.com/images/891c58e67e69d8c14428b1f2ffb5406f.jpg",
            synopsis: "As they navigate the dangers of the Abyss, Riko and Reg's bond is tested in unexpected ways.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://static1.fandomspot.com/images/0d74f909882db0d3bfb325b499e07c5e.jpg",
            synopsis: "The duo discovers new allies who aid them in their quest but also face new threats lurking in the shadows.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://static1.fandomspot.com/images/5cf03a0d50492af0a6ae85f4a69e2fae.jpg",
            synopsis: "Riko encounters a former explorer who shares the dark truths of the Abyss, leaving her shaken.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://static1.fandomspot.com/images/a807fbdc9a8981ee50c9301f9322d8a6.jpg",
            synopsis: "The duo faces an overwhelming challenge that tests their strength and determination.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://static1.fandomspot.com/images/89b0d5bc8c72b405045cd45d90c8e931.jpg",
            synopsis: "Riko discovers a hidden area of the Abyss filled with wonders and dangers alike.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://static1.fandomspot.com/images/708eedd48beae053375f48b7d2b87b64.jpg",
            synopsis: "As they descend further, Riko and Reg face moral dilemmas that challenge their beliefs.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://static1.fandomspot.com/images/87f5ff15101975c00c091f444088d6bb.jpg",
            synopsis: "New threats emerge as the duo navigates the Abyss, leading to intense confrontations.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://static1.fandomspot.com/images/a16fd8ec8dcce2ae539158a6cb6939a1.jpg",
            synopsis: "Riko's quest becomes more perilous as she learns of the Abyss's true nature.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://static1.fandomspot.com/images/05e1e1385a05e9af04ee7f9b82e2a756.jpg",
            synopsis: "Reg faces his own past as the duo confronts their fears and the realities of the Abyss.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://static1.fandomspot.com/images/6c55e0ae56dceae85c2008c0f8b1ef84.jpg",
            synopsis: "In a climactic battle, Riko and Reg must unite their strengths to survive the Abyss's threats.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://static1.fandomspot.com/images/20d1b77e77c9d27043193e4dc5f09884.jpg",
            synopsis: "In the season finale, revelations unfold, and the journey ahead is set for Riko and Reg.",
            downloadLink : ""
          }
        ]
      }
    ]
  },

  {
    title: "Jobless Reincarnation: Mushoku Tensei",
    genre: "Adventure",
    backgroundImage: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/12/Mushoku-Tensei-Episode-22.jpg",
    synopsis: "A 34-year-old NEET is reincarnated in a fantasy world with the resolve to live his new life to the fullest.",
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          { 
            epiNum: 1,
            title: "Jobless Reincarnation",
            backgroundImage: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/01/Mushoku-Tensei.jpg",
            synopsis: "A man reincarnates into a fantasy world as Rudeus, and begins his journey with new goals and challenges.",
            downloadLink : ""
          },
          { 
            epiNum: 2,
            title: "Master",
            backgroundImage: "https://animecorner.me/wp-content/uploads/2021/01/Mushoku-Tensei-Episode-2-Review.png",
            synopsis: "Rudeus starts magic training with his new tutor, Roxy, showcasing his talent and determination.",
            downloadLink : ""
          },
          { 
            epiNum: 3,
            title: "A Friend",
            backgroundImage: "https://www.animefeminist.com/wp-content/uploads/2021/01/Mushoku-Tensei-Episode-3.jpg",
            synopsis: "Rudeus makes his first friend, Sylphiette, and learns the importance of kindness and companionship.",
            downloadLink : ""
          },
          { 
            epiNum: 4,
            title: "Emergency Family Meeting",
            backgroundImage: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/01/Mushoku-Tensei-Episode-4.jpg",
            synopsis: "Family conflicts arise, forcing Rudeus to navigate the complexities of relationships in his new world.",
            downloadLink : ""
          },
          { 
            epiNum: 5,
            title: "A Young Lady and Violence",
            backgroundImage: "https://animecorner.me/wp-content/uploads/2021/02/Mushoku-Tensei-Episode-5.jpg",
            synopsis: "Rudeus encounters Eris, a feisty noble, and faces new challenges in a hostile environment.",
            downloadLink : ""
          },
          { 
            epiNum: 6,
            title: "A Day Off in Roa",
            backgroundImage: "https://animecorner.me/wp-content/uploads/2021/02/Mushoku-Tensei-Episode-6.jpg",
            synopsis: "Rudeus and Eris experience life in the city, developing a friendship as they learn about each other.",
            downloadLink : ""
          },
          { 
            epiNum: 7,
            title: "What Lies Beyond Effort",
            backgroundImage: "https://animecorner.me/wp-content/uploads/2021/03/Mushoku-Tensei-Episode-7.jpg",
            synopsis: "Rudeus trains hard with Eris, preparing for unexpected challenges while discovering his potential.",
            downloadLink : ""
          },
          { 
            epiNum: 8,
            title: "Turning Point 1",
            backgroundImage: "https://animecorner.me/wp-content/uploads/2021/03/Mushoku-Tensei-Episode-8.jpg",
            synopsis: "A mysterious incident transports Rudeus to a dangerous new location, changing his life forever.",
            downloadLink : ""
          },
          { 
            epiNum: 9,
            title: "Encounter",
            backgroundImage: "https://animecorner.me/wp-content/uploads/2021/03/Mushoku-Tensei-Episode-9.jpg",
            synopsis: "Rudeus meets Ruijerd, a powerful warrior, who aids him and Eris in surviving their new surroundings.",
            downloadLink : ""
          },
          { 
            epiNum: 10,
            title: "The Value of a Life and the First Job",
            backgroundImage: "https://animecorner.me/wp-content/uploads/2021/03/Mushoku-Tensei-Episode-10.jpg",
            synopsis: "Rudeus takes on his first job, learning the harsh realities of survival and the weight of decisions.",
            downloadLink : ""
          },
          { 
            epiNum: 11,
            title: "Children and Warriors",
            backgroundImage: "https://animecorner.me/wp-content/uploads/2021/03/Mushoku-Tensei-Episode-11.jpg",
            synopsis: "Rudeus and his companions tackle challenges that test their strength and resolve as adventurers.",
            downloadLink : ""
          },
          { 
            epiNum: 12,
            title: "The Woman with the Demon Eyes",
            backgroundImage: "https://animecorner.me/wp-content/uploads/2021/10/Mushoku-Tensei-Episode-12.jpg",
            synopsis: "Rudeus meets a mysterious figure with extraordinary powers, opening new possibilities and dangers.",
            downloadLink : ""
          }
        ]
      }
    ]
  },

  {
    "title": "Konosuba: God's Blessing on this Wonderful World!",
    genre: "Adventure",
    "backgroundImage": "https://cdn.myanimelist.net/images/anime/8/78243.jpg",
    "synopsis": "A man is reincarnated in a fantasy world after his tragic death, where he teams up with a group of misfits on hilarious adventures.",
    "seasons": [
      {
        "seasonNumber": 1,
        "episodes": [
          {
            "epiNum": 1,
            "title": "This Self-Proclaimed Goddess and Reincarnation in Another World",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79672.jpg",
            "synopsis": "Kazuma is reincarnated in a fantasy world with a goddess, where they begin their chaotic journey.",
            "downloadLink": "https://example.com/download/konosuba-episode-1"
          },
          {
            "epiNum": 2,
            "title": "The Great Chaos at the Crystal Tower",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79674.jpg",
            "synopsis": "Kazuma and his party attempt to defeat a dangerous monster, only to end up in disastrous situations.",
            "downloadLink": "https://example.com/download/konosuba-episode-2"
          },
          {
            "epiNum": 3,
            "title": "Explosion Magic and a Battle of Wits",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79675.jpg",
            "synopsis": "Megumin, the eccentric mage, introduces her explosive magic, and the group is caught in a tight situation.",
            "downloadLink": "https://example.com/download/konosuba-episode-3"
          },
          {
            "epiNum": 4,
            "title": "A Bet's a Bet!",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79676.jpg",
            "synopsis": "Kazuma faces a tough challenge involving a bet with an unlikely opponent, leading to more misadventures.",
            "downloadLink": "https://example.com/download/konosuba-episode-4"
          },
          {
            "epiNum": 5,
            "title": "A Lively Reincarnation and a Blessed Adventure",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79677.jpg",
            "synopsis": "The party embarks on a new quest, with Kazuma’s team facing more hilarious but dangerous situations.",
            "downloadLink": "https://example.com/download/konosuba-episode-5"
          },
          {
            "epiNum": 6,
            "title": "The Wonderful, Blessed Life of the Adventurer",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79678.jpg",
            "synopsis": "Kazuma and the gang face challenges, including dealing with their dysfunctional team dynamics and strange foes.",
            "downloadLink": "https://example.com/download/konosuba-episode-6"
          },
          {
            "epiNum": 7,
            "title": "A Day in the City and the Adventurer's Guide",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79679.jpg",
            "synopsis": "Kazuma and his companions learn more about the city’s rules while participating in local events.",
            "downloadLink": "https://example.com/download/konosuba-episode-7"
          },
          {
            "epiNum": 8,
            "title": "Chasing the Lost Demon and the Ransacked Town",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79680.jpg",
            "synopsis": "The party goes after a demon that is terrorizing the town, leading to unexpected events.",
            "downloadLink": "https://example.com/download/konosuba-episode-8"
          },
          {
            "epiNum": 9,
            "title": "The Feast of the Gods and the Battle of Desperation",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79681.jpg",
            "synopsis": "The team faces a dangerous foe at the mercy of powerful gods, leading to a risky battle.",
            "downloadLink": "https://example.com/download/konosuba-episode-9"
          },
          {
            "epiNum": 10,
            "title": "A Little Princess and a Righteous Path",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79682.jpg",
            "synopsis": "Kazuma and his team deal with a princess who needs their help, but things go awry.",
            "downloadLink": "https://example.com/download/konosuba-episode-10"
          },
          {
            "epiNum": 11,
            "title": "The Final Battle and a New Start",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79683.jpg",
            "synopsis": "The party faces off against a major enemy in an epic battle, but the adventure is far from over.",
            "downloadLink": "https://example.com/download/konosuba-episode-11"
          },
          {
            "epiNum": 12,
            "title": "A Reincarnation that Will Never End",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79684.jpg",
            "synopsis": "The final episode of season 1 wraps up the first adventure with a hilarious and dramatic conclusion.",
            "downloadLink": "https://example.com/download/konosuba-episode-12"
          }
        ]
      },
      {
        "seasonNumber": 2,
        "episodes": [
          {
            "epiNum": 1,
            "title": "A New Life in the Country",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79685.jpg",
            "synopsis": "Kazuma's party faces a new challenge in the countryside, where they try to make a living.",
            "downloadLink": "https://example.com/download/konosuba-s2-episode-1"
          },
          {
            "epiNum": 2,
            "title": "A Duel to the Death in the City",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79686.jpg",
            "synopsis": "Kazuma faces off against a powerful foe in the city while the team deals with growing problems.",
            "downloadLink": "https://example.com/download/konosuba-s2-episode-2"
          },
          {
            "epiNum": 3,
            "title": "The World's Most Unusual Adventurer",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79687.jpg",
            "synopsis": "The team faces an odd situation as they encounter a new ally with strange powers.",
            "downloadLink": "https://example.com/download/konosuba-s2-episode-3"
          },
          {
            "epiNum": 4,
            "title": "A Beautiful Adventure and a Precious Memory",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79688.jpg",
            "synopsis": "Kazuma and the team take on a new quest that will test their skills and resolve.",
            "downloadLink": "https://example.com/download/konosuba-s2-episode-4"
          },
          {
            "epiNum": 5,
            "title": "Foolish Decisions and a New Rival",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79689.jpg",
            "synopsis": "Kazuma’s rivalry with a new adventurer leads to more challenges and conflicts.",
            "downloadLink": "https://example.com/download/konosuba-s2-episode-5"
          },
          {
            "epiNum": 6,
            "title": "The Road to Victory and the Fight for Glory",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79690.jpg",
            "synopsis": "Kazuma’s team faces a tough battle to save the day while navigating complicated new relationships.",
            "downloadLink": "https://example.com/download/konosuba-s2-episode-6"
          },
          {
            "epiNum": 7,
            "title": "Life as a Hero and the Battle of Desperation",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79691.jpg",
            "synopsis": "The team fights to protect the village from a great threat, risking everything.",
            "downloadLink": "https://example.com/download/konosuba-s2-episode-7"
          },
          {
            "epiNum": 8,
            "title": "A Dangerous Game and a Worthy Opponent",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79692.jpg",
            "synopsis": "The party faces off against a dangerous foe, learning some valuable lessons along the way.",
            "downloadLink": "https://example.com/download/konosuba-s2-episode-8"
          },
          {
            "epiNum": 9,
            "title": "The Final Battle and the Ultimate Challenge",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79693.jpg",
            "synopsis": "The team faces their greatest challenge yet, leading to a thrilling and emotional finale.",
            "downloadLink": "https://example.com/download/konosuba-s2-episode-9"
          },
          {
            "epiNum": 10,
            "title": "The Adventures Continue and New Beginnings",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79694.jpg",
            "synopsis": "The season ends with new adventures on the horizon for Kazuma and his party.",
            "downloadLink": "https://example.com/download/konosuba-s2-episode-10"
          }
        ]
      },
      {
        "seasonNumber": 3,
        "episodes": [
          {
            "epiNum": 1,
            "title": "A Return to Glory",
            "backgroundImage": "https://cdn.myanimelist.net/images/anime/9/79695.jpg",
            "synopsis": "The story picks up with the team facing their most challenging yet hilarious adventure yet.",
            "downloadLink": "https://example.com/download/konosuba-s3-episode-1"
          }
        ]
      }
    ]
  },

  {
        "title": "No Game No Life",
        genre: "Adventure",
        "backgroundImage": "https://example.com/ngnl-image.jpg",
        "synopsis": "A brother and sister duo, undefeated gamers, are transported to a world where everything is decided by games.",
        "seasons": [
          {
            "seasonNumber": 1,
            "episodes": [
              {
                "epiNum": 1,
                "title": "No Game No Life",
                "backgroundImage": "https://example.com/ngnl-episode-1.jpg",
                "synopsis": "Sora and Shiro, two brilliant siblings, are invited to a world of games by a mysterious being, Tet."
              },
              {
                "epiNum": 2,
                "title": "All That's Left Is the Winning",
                "backgroundImage": "https://example.com/ngnl-episode-2.jpg",
                "synopsis": "The siblings take on the challenge of defeating their first opponent, aiming to prove their gaming skills."
              }
              // Add all other episodes of season 1 here
            ]
          }
        ]
  },
  

]

export default movieData;
