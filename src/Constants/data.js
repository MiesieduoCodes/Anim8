const movieData = [
  {
    id: "1",
    title: "Your Lie in April",
    genre: "Romance",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/264/75/737/anime-sunset-piano-clouds-wallpaper-preview.jpg",
    synopsis: "A pianist, traumatized by the death of his mother, rediscovers his love for music and life after meeting a spirited violinist who changes his world.",
    seasons: [
      {
        seasonNumber: 1,
            id: "1",
        backgroundImage :"https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2015/01/23065212/Your-Lie-In-April-Ep-10-1024x576.png",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://www.justwatch.com/images/backdrop/243967768/s1440/season-1.webp/season-1.webp",
            synopsis: "Kousei Arima, a piano prodigy, loses his ability to hear the sound of the piano after his mother’s death, but his life changes when he meets a vibrant violinist named Kaori.",
            downloadLink: ""
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
                "epiNum": 1,
                "backgroundImage": "https://kaguyasama-anime.com/1st/assets/img/story/01/02.jpg",
                "synopsis": "Kaguya and Miyuki engage in a mind game to make the other confess love first.",
                "downloadLink": "https://drive.google.com/uc?id=1JmxIw5BfzPyxbS3pWiU8z2fAPHxqUcd5&export=download"
              },
              {
                "epiNum": 2,
                "backgroundImage": "https://kaguyasama-anime.com/1st/assets/img/story/02/02.jpg",
                "synopsis": "Kaguya devises a plan to make Miyuki invite her to the summer festival.",
                "downloadLink": "https://drive.google.com/uc?id=1JpWAWeT7p_zSRcV9Hb6Oqvw8agdHKSdd&export=download"
              },
              {
                "epiNum": 3,
                "backgroundImage": "https://kaguyasama-anime.com/1st/assets/img/story/03/02.jpg",
                "synopsis": "A game of 'Forbidden Words' challenges both Miyuki and Kaguya's self-control.",
                "downloadLink": "https://drive.google.com/uc?id=1Js2Ck3xtMZ3hmAKrSL_3DejOdEQVJpc1&export=download"
              },
              {
                "epiNum": 4,
                "backgroundImage": "https://kaguyasama-anime.com/1st/assets/img/story/04/04.jpg",
                "synopsis": "Chika tries to get Miyuki to open up about his insecurities.",
                "downloadLink": "https://drive.google.com/uc?id=1JwYe-P7Kdr4rxm3KP5GiysRMWBs3yoMf&export=download"
              },
              {
                "epiNum": 5,
                "backgroundImage": "https://kaguyasama-anime.com/1st/assets/img/story/05/03.jpg",
                "synopsis": "Kaguya becomes jealous when a rumor about Miyuki's crush surfaces.",
                "downloadLink": "https://drive.google.com/uc?id=1K0RWvB4ngoyG1XC_pNAPlukMUE3gcwlO&export=download"
              },
              {
                "epiNum": 6,
                "backgroundImage": "https://kaguyasama-anime.com/1st/assets/img/story/06/03.jpg",
                "synopsis": "Miyuki and Kaguya bond over a movie outing that leads to misunderstandings.",
                "downloadLink": "https://drive.google.com/uc?id=1K63zbFBi7okyVVBZVJ4XoTgE5hN4RtFc&export=download"
              },
              {
                "epiNum": 7,
                "backgroundImage": "https://kaguyasama-anime.com/1st/assets/img/story/07/02.jpg",
                "synopsis": "When Kaguya's plans are derailed, Miyuki comes to her rescue.",
                "downloadLink": "https://drive.google.com/uc?id=1K9RN9LFwDTYVbT6mHMa33VC-1x0szqEr&export=download"
              },
              {
                "epiNum": 8,
                "backgroundImage": "https://kaguyasama-anime.com/1st/assets/img/story/08/01.jpg",
                "synopsis": "Kaguya’s jealousy gets the better of her as new challenges arise.",
                "downloadLink": "https://drive.google.com/uc?id=1K9aMSzCRxeQZOUzjKwdKyZWKDFfSI-JO&export=download"
              },
              {
                "epiNum": 9,
                "backgroundImage": "https://kaguyasama-anime.com/1st/assets/img/story/09/01.jpg",
                "synopsis": "Kaguya deals with embarrassment after Miyuki discovers a secret.",
                "downloadLink": "https://drive.google.com/uc?id=1KB4OQfB_tbR9N1nHomV7cZkVFBLQALuD&export=download"
              },
              {
                "epiNum": 10,
                "backgroundImage": "https://kaguyasama-anime.com/1st/assets/img/story/10/02.jpg",
                "synopsis": "Kaguya and Miyuki face off in a student council meeting over love advice.",
                "downloadLink": "https://drive.google.com/uc?id=1KDBIJIUA6Ltazi-KXyqMJmQSQrlMLJ1w&export=download"
              },
              {
                "epiNum": 11,
                "backgroundImage": "https://kaguyasama-anime.com/1st/assets/img/story/11/02.jpg",
                "synopsis": "Kaguya struggles with expressing her feelings on the last day of summer.",
                "downloadLink": "https://drive.google.com/uc?id=1KH9nlFcgocyy0bFxF_ye_nSoewm5Mo_u&export=download"
              },
              {
                "epiNum": 12,
                "backgroundImage": "https://kaguyasama-anime.com/1st/assets/img/story/12/01.jpg",
                "synopsis": "A heartfelt moment between Kaguya and Miyuki closes the season.",
                "downloadLink": "https://drive.google.com/uc?id=1KHkOMbRaMrVlMk1XhgQNhSUkqSOYut30&export=download"
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
    "epiNum": 1,
    "backgroundImage": "https://img4.hulu.com/user/v3/artwork/34ebf58e-5a2a-4efa-8e4d-fb16039a3051?base_image_bucket_name=image_manager&base_image=891e7913-da99-42aa-9f63-6a4bbbdb5514&size=600x338&format=webp",
    "synopsis": "Saitama, a seemingly ordinary man, discovers his power to defeat any foe with a single punch.",
    "downloadLink": "https://drive.google.com/uc?export=download&id=1EBozlLURaoVS0rmDa8cB6F-9PD-qKBxv"
  },
  {
    "epiNum": 2,
    "backgroundImage": "https://img4.hulu.com/user/v3/artwork/85c3d295-2234-4fd9-994a-417b30b03e26?base_image_bucket_name=image_manager&base_image=8c24d0a7-a496-445e-8af0-4758008059bd&size=600x338&format=webp",
    "synopsis": "Genos, a cyborg hero, learns about Saitama’s incredible strength and becomes his disciple.",
    "downloadLink": "https://drive.google.com/uc?export=download&id=1ECrk5-wZvJbBu8t7axF454Mrnvt7jENJ"
  },
  {
    "epiNum": 3,
    "backgroundImage": "https://img1.hulu.com/user/v3/artwork/dac5e4b5-fa11-45f2-991f-e6eb61f1f617?base_image_bucket_name=image_manager&base_image=7ed8e12a-1cfd-4e0a-995b-9d7b55a6df9d&size=600x338&format=webp",
    "synopsis": "Saitama takes on various monstrous foes, all of whom fall with a single punch, leaving him unfulfilled.",
    "downloadLink": "https://drive.google.com/uc?export=download&id=1EEJnLU2nJ97Z4lLZHYPBQdUN1YAdPEJA"
  },
  {
    "epiNum": 4,
    "backgroundImage": "https://img4.hulu.com/user/v3/artwork/54604aae-24da-4ec1-a6b5-24f8b7d4a270?base_image_bucket_name=image_manager&base_image=bafc7e8a-f345-458a-8543-fdf3e76164a1&size=600x338&format=webp",
    "synopsis": "Genos and Saitama face off in a sparring match, showcasing their respective strengths.",
    "downloadLink": "https://drive.google.com/uc?export=download&id=1EHPogHQPaRqNzuqMIeO13WxbeR-CK3S3"
  },
  {
    "epiNum": 5,
    "backgroundImage": "https://img2.hulu.com/user/v3/artwork/3b12f124-5fed-4f03-a395-9e9796c1aa41?base_image_bucket_name=image_manager&base_image=13cea1f6-861c-461b-8511-5383db984aaf&size=600x338&format=webp",
    "synopsis": "A powerful monster appears, and Saitama must step in to save the day.",
    "downloadLink": "https://drive.google.com/uc?export=download&id=1EILMn2c8VgrUIWsptvlo4i8waIp0Uv1i"
  },
  {
    "epiNum": 6,
    "backgroundImage": "https://img4.hulu.com/user/v3/artwork/a95670a4-7a73-4864-8c92-2d5da72ff5b3?base_image_bucket_name=image_manager&base_image=99c149cf-6585-4e49-a3d0-d4d5641ad65a&size=600x338&format=webp",
    "synopsis": "The Hero Association approaches Saitama, offering him a chance to become a registered hero.",
    "downloadLink": "https://drive.google.com/uc?export=download&id=1EMfpD4_ngJBj-FYdP2LSuJfxq3XQXVSI"
  },
  {
    "epiNum": 7,
    "backgroundImage": "https://img2.hulu.com/user/v3/artwork/5ee6da0c-9dc6-4a26-9cd1-1222c0d19069?base_image_bucket_name=image_manager&base_image=bf1b4472-87d9-4d8f-b037-4b444f7acab7&size=600x338&format=webp",
    "synopsis": "Saitama starts his hero career but quickly grows frustrated with the mundane duties.",
    "downloadLink": "https://drive.google.com/uc?export=download&id=1ETu3xjISIkgz4dHSIKLrapfslUghJOX-"
  },
  {
    "epiNum": 8,
    "backgroundImage": "https://img1.hulu.com/user/v3/artwork/6c026286-73de-4a99-b4e7-5ffd94c4fd3d?base_image_bucket_name=image_manager&base_image=492a714e-297c-464f-b648-fc67d4a44e4c&size=600x338&format=webp",
    "synopsis": "An alien invader named Boros arrives on Earth, challenging Saitama to a thrilling battle.",
    "downloadLink": "https://drive.google.com/uc?export=download&id=1EZo4RfvlNR5Ti7taMGVUO6d-V7gIpkJr"
  },
  {
    "epiNum": 9,
    "backgroundImage": "https://img2.hulu.com/user/v3/artwork/8b5cde15-8195-4cb8-81b0-04de44746de9?base_image_bucket_name=image_manager&base_image=92d69bc9-24b8-4764-9e35-6fca2788ba75&size=600x338&format=webp",
    "synopsis": "Saitama faces Boros in an intense showdown, testing his strength like never before.",
    "downloadLink": "https://drive.google.com/uc?export=download&id=1EoTLPZ1_yOd2pXhj88FgIDLc-W0dDJ0g"
  },
  {
    "epiNum": 10,
    "backgroundImage": "https://img1.hulu.com/user/v3/artwork/d0c5aec3-e453-42c6-870a-f191c7bfe9d3?base_image_bucket_name=image_manager&base_image=d41fd679-d95d-4c73-bfa6-2b93d1676c84&size=600x338&format=webp",
    "synopsis": "The battle concludes as Saitama defeats Boros, returning to his unremarkable life as a hero.",
    "downloadLink": "https://drive.google.com/uc?export=download&id=1ErRRQdds6bA0T81qlhzwjakSfv5UwAG9"
  },  {
    "epiNum": 11,
    "backgroundImage": "https://img2.hulu.com/user/v3/artwork/fc3ba068-7230-417f-b02b-cbed31350341?base_image_bucket_name=image_manager&base_image=120a5fe0-2de4-4150-9fb5-34c4a2ade5ee&size=600x338&format=webp",
    "synopsis": "Saitama realizes the endless cycle of meaningless fights, continuing his search for purpose.",
    "downloadLink": "https://drive.google.com/uc?export=download&id=1Eu6zYHVPb3Z2g4U3s_0cYR1WfQtFlPvO"
  },
  {
    "epiNum": 12,
    "backgroundImage": "https://img1.hulu.com/user/v3/artwork/4c21ad63-3989-4152-936b-1676396272e0?base_image_bucket_name=image_manager&base_image=62bf9194-36a4-46d4-8c94-4d90c17c23dd&size=600x338&format=webp",
    "synopsis": "Saitama finishes the season with reflections on heroism, strength, and his place in the world.",
    "downloadLink": "https://drive.google.com/uc?export=download&id=1Ewp2m8mCV4MfLGz1UAFjvMJH_ngCN4JN"
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
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/3214385831ee20a042143b8d3a1f3baae6b972b0a1db88c64b987454ce034af9._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Thorfinn grows up hearing tales of Vinland, a peaceful land far to the west. His life changes when he meets the mercenary Askeladd.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/07497e1362b55413784fcc7c7c35e98fc1c65939b509b921c8fe3c500146750b._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Askeladd’s crew engages in fierce combat, and Thorfinn begins to understand the brutal reality of war.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/e61a6bcf4a4cc35fe59d29930b6bcb7f588521b27fe244213cddefa3683a6296._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Thorfinn faces his first true battle and learns the importance of survival in the harsh Viking world.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/0a2815e3590daa49014202a0a64686b16d8ae9041ab802602c10edde5cd63ddc._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Askeladd’s crew encounters new allies and foes, testing Thorfinn’s resolve and dedication to his revenge.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/db68a8990d9db85b719b19c7eb078f4df3ebbd9b92cf1569220a5f213a758143._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Thorfinn begins to challenge Askeladd, but he must prove his strength to earn the chance for a duel.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/c68b838f6e99d6f537634c2b553afe8c1cb6e1747d711afe20e176153ea7c094._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "In England, Askeladd’s crew faces ambushes, and Thorfinn is forced to confront his growing animosity.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/2985f8ac62229370f25ed60745acf1e8a1c5ebbb6dd6f3324c98c8de38864a3a._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Thorfinn gets closer to his goal of vengeance, but unforeseen events pull him deeper into Askeladd’s plans.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/ca380515c0d09723387759566a954657ab263337a3699e3903acf2ee28d7a9ea._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Askeladd reveals his own ambitions, creating a rift within his crew and altering Thorfinn’s path.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/774ffd3f2e514a186daff44a24da425a46238162b8d26a934c349151daaba71a._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Amid political intrigue, Thorfinn’s quest for revenge is tested by unforeseen alliances and betrayals.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/8aeeb40d001bac87e5629bb6b4bca559f2b008e7f27bcba7c33b6e5ec6cf31fe._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "In a climactic battle, Thorfinn inches closer to avenging his father, but his resolve faces new challenges.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/bd001894d71550cf285ef069e46e1113531aff24804d7870159e00b5c3182282._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Thorfinn’s confrontation with Askeladd takes a shocking turn, revealing the complexity of his journey.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/8955251618f355b030a667dd567bf60541264b0f64de02ae4452ff2cba786f91._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Askeladd’s plans unfold, and Thorfinn’s path is set on a collision course with destiny.",
            downloadLink : ""
          },
          {
            epiNum: 13,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/de93e404ae80f92915e56b8ee74061349aec09a01293f08dbab83e9fea53b851._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Askeladd crosses the river and escapes from Thorkell into Wales with Canute. However, Askeladd’s men are ambushed by a group of soldiers hiding behind the boulders at the border of the kingdom of Brycheiniog.",
            downloadLink : ""
          },
          {
            epiNum: 14,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/8c28b407b82f51605c51f5d75887200302d6e14348b358cfc78b4ce8da9af762._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Askeladd and his men change course and decide to return to Gainsborough, by crossing through the Earldom of Mercia in the midst of a harsh snowstorm, where the main army of Denmark awaits. The men spot a small village in the blizzard, and make their move.",
            downloadLink : ""
          },
          {
            epiNum: 15,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/220322c2bffcdd3d731cee7c6aa3d70a4bfcd3e1b4a4ad82dbf637627fcd4614._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "After losing Canute, Thorkell decides to halt his advance in central England. Thorkell hears that the end of the war between Denmark and England is near, and bemoans the end of the war. However, he later gets wind of an interesting piece of news.",
            downloadLink : ""
          },
          {
            epiNum: 16,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/853882b02f3b7c83877d730c01ec2593a876fde05e37599431c60de8dd629a67._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Askeladd and his men are attacked by the English army in the village where they had planned to camp during the winter. Askeladd captures their captain and interrogates him to find out how the English knew where they were, and discovers that Thorkell is fast approaching.",
            downloadLink : ""
          },
          {
            epiNum: 17,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/a56de46d46cd97f16231a5b1adb9ea7250efd84d3251f37fae21435b63f82e79._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Askeladd’s men continued their march to escape Thorkell. However, Torgrim and his friends were hatching a plot to switch sides and join Thorkell, taking Canute with them. Torgrim finally launches his rebellion and corners Askeladd, negotiating with him to hand over Canute, then Thorkell arrives in the midst of the confusion.",
            downloadLink : ""
          },
          {
            epiNum: 18,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/d39dcc2a38ee28ca17ab02c90ca0f67afb2b9be1d9c05bf2ac51f1d4d2cae596._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Thorfinn and Thorkell agree to have a duel over the fate of Askeladd. Thorkell looks forward to facing off against Thors’s son, Thorfinn, and asks him what a true warrior really is. Meanwhile, Canute is suddenly ambushed while he attempts to escape, and has a dream about a certain individual.",
            downloadLink : ""
          },
          {
            epiNum: 19,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/71dc06e0b05e25eb3c39de01d48193ae9c8765d5394172c4c5e3ff226b82a3ec._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Thorfinn suffers a serious injury in his fight against Thorkell. Thorfinn is told to think about what he has to do to beat Thorkell. Askeladd treats Thorfinn’s wounds so that he may fight again someday, and proposes a joint strategy to help the two of them survive longer.",
            downloadLink : ""
          },
          {
            epiNum: 20,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/db301abee5a5c3bfac794c44d671190c7e7a1a5852c8767fd69a5f9b6fa56499._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "After the fighting dies down, Canute takes in Askeladd and Thorkell as his followers, and returns to Gainsborough. Canute goes through an awakening when he realizes the meaning of love in the aftermath of Ragnar’s death. Canute throws away what little feelings he had left for his father, and joins Askeladd in plotting to assassinate King Sweyn.",
            downloadLink : ""
          },
          {
            epiNum: 21,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/6602c32ca0f6a9386e01ea941c7aa64f7da20b89de11ef8de482ee5d03a3d516._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Canute’s party arrives in York to attend the Imperial Council. Although Canute had wanted to strike out against King Sweyn, the King was being guarded by the most powerful Jomsviking unit in the Northern Sea while keeping a close eye on Canute. With the situation strained to the breaking point, Askeladd comes up with a plan. Meanwhile, Thorfinn is reunited with a person who knew his former self.",
            downloadLink : ""
          },
          {
            epiNum: 22,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/cc562ee14a7811b000891b54cec4a73eba221ba9ff666babf482a203c0afb903._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Thorfinn begins his duel against Askeladd with Canute and Thorkell as witnesses. However, Thorfinn is unable to strike as he stands overwhelmed by the extraordinary mood that overtakes Askeladd after Bjorn’s departure. Having noticed Thorfinn’s hesitation, Askeladd lays down his sword and provokes Thorfinn into an unarmed fight, which incites Thorfinn’s fury.",
            downloadLink : ""
          },
          {
            epiNum: 23,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/d28758a1acc134162d6b2e872703f9c92b07faf0f5bf289367d78b1b0e300d33._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "After the assassination attempt on Canute’s life, rumors spread through York saying that the king is trying to kill Canute. As a result, the king is unable to issue any orders that would put Canute in harm, and Askeladd is pleased that everything is proceeding as planned. However, the tables turn when King Sweyn speaks.",
            downloadLink : ""
          },
          {
            epiNum: 24,
            backgroundImage: "https://m.media-amazon.com/images/S/pv-target-images/cf5011ac6046683f1317973d95fd29ec077d87c164f3060108ba1db0034a6e69._BR-6_AC_SX480_FMwebp_.jpg",
            synopsis: "Askeladd comes forth before King Sweyn and implores him to halt his invasion of Wales. Meanwhile, Thorfinn decides to return home at Leif’s urging. However, the moment before he boards the ship, Thorfinn catches a glimpse of a single tern taking off into the sky...",
            downloadLink : ""
          }
        ]
      },
      {
        seasonNumber: 2,
        backgrounImage : "https://resizing.flixster.com/ABgWTPTtdi0LYAa1OOKWUeqyh6c=/620x336/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23821994_i_h10_aa.jpg",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://resizing.flixster.com/XRsQccEpr5GPOqQE3R3yhx9NSA8=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23821999_e_h10_aa.jpg",
            synopsis: "In a time of peace, Thorfinn struggles to find purpose after a lifetime of violence and revenge.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://resizing.flixster.com/ZNYU3PDlMp0pgHR0BgcaJd1x42w=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23832400_e_h10_aa.jpg",
            synopsis: "As Thorfinn begins a new chapter, he encounters people who challenge his beliefs about war and honor.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://resizing.flixster.com/ARkiznlbb6qm1NsIuhq99_cK4o8=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23838963_e_h10_aa.jpg",
            synopsis: "Thorfinn's past catches up to him as he faces consequences for his former actions.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://resizing.flixster.com/I7mHYv0Ke6u_XdTLbm9WBz9MpGk=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23838964_e_h10_aa.jpg",
            synopsis: "New alliances form as Thorfinn and his companions find themselves drawn into new conflicts.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://resizing.flixster.com/Jkz0F0IZcafSkliCklrfhkH5LMs=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23838965_e_h10_aa.jpg",
            synopsis: "Thorfinn reflects on his past, grappling with guilt and seeking a path towards redemption.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://resizing.flixster.com/PCu3DqMrtghUmDbCM_AGVQhAFpI=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23838966_e_h10_aa.jpg",
            synopsis: "Thorfinn must navigate dangerous political waters as his ideals clash with the harsh realities of Viking life.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://resizing.flixster.com/tV1XMGf_I05qcyQJWs9CL1i4EQ8=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23838967_e_h10_aa.jpg",
            synopsis: "Facing new threats, Thorfinn must decide between a peaceful life and the warrior's path he once knew.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://resizing.flixster.com/ob2OgdN_Ax_bypwQYyTtT_8MuLc=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23838968_e_h10_aa.jpg",
            synopsis: "Thorfinn confronts his inner demons, embarking on a journey of self-discovery and growth.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://resizing.flixster.com/xosW3zr72fnMeE2I56zNh7cQ0No=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23838969_e_h10_aa.jpg",
            synopsis: "As his journey continues, Thorfinn faces tests that challenge his commitment to his new ideals.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://resizing.flixster.com/0iWK_CaZm2iZnIO94QrQtgf9_uk=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23838970_e_h10_aa.jpg",
            synopsis: "In a moment of truth, Thorfinn must choose between vengeance and a peaceful future.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://resizing.flixster.com/2tsEY2uO0xsYseMmM1wi7y45gRI=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23838971_e_h10_aa.jpg",
            synopsis: "Thorfinn's path leads him to confront the ghosts of his past and make a final decision about his future.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://resizing.flixster.com/luFx7PUacsD8TN0vMgi1YXxuqVM=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23838997_e_h10_aa.jpg",
            synopsis: "With newfound resolve, Thorfinn embarks on a journey that will define his legacy.",
            downloadLink : ""
          },
          {
            epiNum: 13,
            backgroundImage: "https://resizing.flixster.com/WAtvsd8AfgCMgKzeRW1OhYpzfec=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23839000_e_h10_aa.jpg",
            synopsis: "Thorfinn works as a slave on Ketil's farm, struggling with the emptiness left by his violent past. Einar, a fellow slave, befriends him and helps him find a reason to live.",
            downloadLink: ""
          },
          {
            epiNum: 14,
            backgroundImage: "https://resizing.flixster.com/uqCwx4ZbYHAmVe94loezOrUkrSY=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23839004_e_h10_aa.jpg",
            synopsis: "Thorfinn and Einar begin clearing land to earn their freedom. They form a bond through shared hardships, and Einar teaches Thorfinn about farming and the value of hard work.",
            downloadLink: ""
          },
          {
            epiNum: 15,
            backgroundImage: "https://resizing.flixster.com/wCIUi52V5Cu73HeiIdA8JSYH-no=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24509448_e_h10_aa.jpg",
            synopsis: "Thorfinn starts having nightmares about the people he killed in his past. Einar confronts him, leading to Thorfinn reflecting deeply on his actions and their consequences.",
            downloadLink: ""
          },
          {
            epiNum: 16,
            backgroundImage: "https://resizing.flixster.com/_L9dwWGNwwsvVOiJSe90iKneveM=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24573952_e_h10_aa.jpg",
            synopsis: "Snake, Ketil's enforcer, confronts Thorfinn and Einar after a conflict with the farmhands. Thorfinn begins to question whether he can truly leave violence behind.",
            downloadLink: ""
          },
          {
            epiNum: 17,
            backgroundImage: "https://resizing.flixster.com/CcR48_brGUzL1HgNjOfKMjfJ-4Q=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24615032_e_h10_aa.jpg",
            synopsis: "Thorfinn recalls his father's teachings about a life without violence. He resolves to atone for his past by living a peaceful life, even in the face of adversity.",
            downloadLink: ""
          },
          {
            epiNum: 18,
            backgroundImage: "https://resizing.flixster.com/pUYB1DUq1b8s5K2zBd95qlPyblo=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24700218_e_h10_aa.jpg",
            synopsis: "Canute, now King of Denmark, schemes to expand his kingdom by seizing Ketil's farm. Thorfinn and Einar are caught in the brewing conflict.",
            downloadLink: ""
          },
          {
            epiNum: 19,
            backgroundImage: "https://resizing.flixster.com/ebN8-75037rkEB2AkLaJRdpQ2HA=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24726017_e_h10_aa.jpg",
            synopsis: "Ketil's farm descends into chaos as Canute's forces approach. Thorfinn and Einar struggle to protect themselves and their newfound peace.",
            downloadLink: ""
          },
          {
            epiNum: 20,
            backgroundImage: "https://resizing.flixster.com/k7F_RilYqnsfUxP9NV1ApblnUfs=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24743764_e_h10_aa.jpg",
            synopsis: "Thorfinn faces Snake in a tense confrontation, vowing to uphold his ideals of nonviolence even in the face of imminent danger.",
            downloadLink: ""
          },
          {
            epiNum: 21,
            backgroundImage: "https://resizing.flixster.com/zf2g1sDkipzfAyPAHo5ghNJsqFg=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24761507_e_h10_aa.jpg",
            synopsis: "Canute's army arrives at Ketil's farm, leading to a bloody battle. Thorfinn must navigate the chaos while staying true to his newfound beliefs.",
            downloadLink: ""
          },
          {
            epiNum: 22,
            backgroundImage: "https://resizing.flixster.com/IqtipYEJnDghPtH0mwVSRoX7ge4=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24761509_e_h10_aa.jpg",
            synopsis: "Thorfinn confronts Canute, attempting to negotiate a peaceful resolution to the conflict. His courage and words leave a lasting impression.",
            downloadLink: ""
          },
          {
            epiNum: 23,
            backgroundImage: "https://resizing.flixster.com/2tsEY2uO0xsYseMmM1wi7y45gRI=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23838971_e_h10_aa.jpg",
            synopsis: "Thorfinn reflects on his journey and decides to pursue a life dedicated to building a peaceful world, leaving behind the Viking way of life.",
            downloadLink: ""
          },
          {
            epiNum: 24,
            backgroundImage: "https://resizing.flixster.com/KbWqvwZ3OUyV9gqsCciHv3OWhl4=/370x208/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24761512_e_h10_ab.jpg",
            synopsis: "Thorfinn sets sail for Vinland, determined to create a land of peace and redemption, marking the beginning of a new chapter in his life.",
            downloadLink: ""
          }
        ]
      }
    ]
 },

  {
    "title": "Jujutsu Kaisen",
    "genre": "Action",
    backgroundImage: "https://static.wikia.nocookie.net/08cb8af6-daab-42bf-a591-c23e9ccbe09a/scale-to-width-down/800",
    "synopsis": "High school student Yuji Itadori discovers the world of jujutsu sorcery and becomes bound to a powerful curse, propelling him into battles against deadly spirits.",
    "seasons": [
      {
        "seasonNumber": 1,
        backgroundImage: "https://animerants.net/wp-content/uploads/2024/01/jujutsu-kaisen-season-1-wallpaper.png?w=1400&h=400&crop=1",
        "episodes": [
          {
            epiNum: 1,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/1-1.jpg",
            "synopsis": "Yuji encounters curses and ingests a powerful cursed object, transforming his life.",
            downloadLink: ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/2-1.jpg",
            "synopsis": "Yuji joins Jujutsu High and meets his new classmates.",
            downloadLink: ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/3-1.jpg",
            "synopsis": "The students face a dangerous curse, testing their teamwork.",
            downloadLink: ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/4-1.jpg",
            "synopsis": "Gojo Satoru trains Yuji, showcasing his immense power.",
            downloadLink: ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/5-1.jpg",
            "synopsis": "Yuji faces a moral challenge as he learns about the duties of a sorcerer.",
            downloadLink: ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/6-1.jpg",
            "synopsis": "The students battle fierce cursed spirits at a detention center.",
            downloadLink: ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/7-1.jpg",
            "synopsis": "Yuji uncovers the extent of his powers in a battle with a powerful curse.",
            downloadLink: ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/8-1.jpg",
            "synopsis": "A new threat looms as powerful curses plot against Jujutsu High.",
            downloadLink: ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/9-1.jpg",
            "synopsis": "The Kyoto Sister School Exchange Event begins, pitting students against each other.",
            downloadLink: ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/10-1.jpg",
            "synopsis": "Yuji and friends face the Kyoto school students in fierce battles.",
            downloadLink: ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/11-1.jpg",
            "synopsis": "A dramatic showdown tests the students' abilities and resolve.",
            downloadLink: ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/12-1.jpg",
            "synopsis": "Powerful curses infiltrate the Exchange Event, raising the stakes.",
            downloadLink: ""
          }
        ]
      },
      {
        "seasonNumber": 2,
        backgroundImage : "https://jujutsukaisen.jp/images/episodes/24-1.jpg",
        "episodes": [
          {
            epiNum: 1,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/1-2.jpg",
            "synopsis": "Yuji learns about Jujutsu High’s history and its past sorcerers.",
            downloadLink: ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/2-2.jpg",
            "synopsis": "Gojo’s past with Geto reveals complex secrets.",
            downloadLink: ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/3-2.jpg",
            "synopsis": "Gojo and Geto battle a powerful curse, shaping Jujutsu High’s future.",
            downloadLink: ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/4-2.jpg",
            "synopsis": "Yuji’s intense training prepares him for battles with curses.",
            downloadLink: ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/5-2.jpg",
            "synopsis": "Deadly curses emerge in the Shibuya incident, testing Jujutsu High.",
            downloadLink: ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/6-2.jpg",
            "synopsis": "Yuji and allies struggle to survive Shibuya’s chaotic streets.",
            downloadLink: ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/7-2.jpg",
            "synopsis": "Yuji pushes his limits against a powerful enemy.",
            downloadLink: ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/8-2.jpg",
            "synopsis": "Gojo fights overwhelming curses alone in Shibuya.",
            downloadLink: ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/9-2.jpg",
            "synopsis": "Yuji and Megumi make a stand against high-level curses.",
            downloadLink: ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/10-2.jpg",
            "synopsis": "The Shibuya incident’s climax leaves Jujutsu High in turmoil.",
            downloadLink: ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/11-2.jpg",
            "synopsis": "Yuji confronts the aftermath of the Shibuya incident.",
            downloadLink: ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://jujutsukaisen.jp/images/episodes/12-2.jpg",
            "synopsis": "With new resolve, Yuji faces future battles in the world of curses.",
            downloadLink: ""
          }
        ]
      }
    ]  },  

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
    backgroundImage: "https://cdn.animenewsnetwork.com/thumbnails/max300x600/cms/episode-review/123299/inuyashiki-ep3.jpg",
    synopsis: "An elderly man and a troubled teen gain powerful abilities after a strange accident, leading them down drastically different paths.",
    seasons: [
      {
        seasonNumber: 1,
        backgroundImage: "https://resizing.flixster.com/FOwo5zCe5Mj9DRVePhvQcFTAGUU=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15532200_b_v8_ac.jpg",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "data:image/webp;base64,UklGRtQRAABXRUJQVlA4IMgRAACQXwCdASoNAZsAPqVEnkymIyKlp3GswMAUiWUAyqzIGUlR6W+MC0N1Mjt1CeevuTmp8U+5S5YY8P4SnyQmJUMJHg+nEvHO3VWPzvz8snTlzqowYNblvkY+ZdeRssbX5jh/6DgQKDseiCpdVC1nVXUlCrLkkGXXtE9cG/T+DcF9YkXD4mT2XH2DOUKypKazITj4AGoK4VCiu6KLODj+iQzOMo1ZWGlkfrIzRYp+9Hvl1ihY/992wRrtlDS7Ouk32VeRVBbwIHKw6ItjSnREJJsXMr0AfDdnbtNux2x81kPjWf57N71p+UNm0ldrzUKR5xIU/2WMSQL7/AnSeP2/3oKE3dwEw8y6fQXde90AiN/XJzZhEpdLkQCK+zOQP6j7Ww8eHh/sqVyG7Q8Av1h83+6h5416u6vS5HAhb0sKOmPFVT9K9mXtE9YVlN51lDTfgJDItNKMcicwxpMtsYpjCJRf6jK4ArhrFykH6aDC3Ulsml0CEeEQn9O9MY3o8ioVV6vEHtEbluDXxJaixl+NIgjaADx5CwZm/V0GZwGrvJXDRoeYTBlzJ5WTf+EAP17CuKyW7/eetLruaJXWoWDSUUPg4zfkBul74SZ5Cc9rxrjGmLzsC6nHXeoofADLD1kPV7hJUFV0lFRGWlrhL9kZQWvxX0ok+PVGO08ncRnPe8lVgLc9CDLNfWxQSQ+B8OpaBuWmF+R9JV34FF2eERoBuC0eczodMrvT2j5tvrtdAfi5XC9azkJmsQ6jauccLERPBLr2x164S3lqT7Fzv0SY5p28UmhIl+naKyK+EXGEnj94/Cr1O8LgNmWoUSBShyJDW1EaN0c/p968js9ax4atShCxA26CwUG6d9nu6PDllj/e1R99K47zux8PEf8/Ln0HTNUo7BiD0+JupVQKCi65mzCvu1tUVHWz9KLop+CnIh5ckGacHnwPGTMwDjLZW4MU+V3wesjDsnNcSuT2AF1NSnsuTVtyZuna0sm9X7PCisF9ib6l0UqCXdWzPOB8y+cIhV+wrVck8AD++Dk5i54jwyBouNLv32/zBWWP//MdqjLo6eBFxXZZc5p/IBaradJxg942m1N9TM/7wtcD9+eQ1mzHgzV6616x11RL129jcggoceNSWV/dbhb3WIP6bFXFuwg0qWszI1ANgWcHBv0625tGTHOdYduaefb020AIBhbNQY1/5+pfumKpvfhdEYfuqcmf/a5s2EsmPtfOf4I9nzN9cP+99g3f9yAEEb1KOiGJ+74EF9H1ms6nh/calEcxvmsdXPyupavzhkxaKdSwLBQadh/L7X+LdiDXkcDFQ6GFN1LbRigHPL5F1P+wqOwtBLjM036PcFXaA88MfVUKeGSCn/Q5cS4m99T0+QzA/+G2eq5iz23ZyHxRQag89P6IMpqVd+Pl3xk8sg1jMa+Nzrnr3xxb55YxeSI2xwnORAYVnbrvSSeAyxEm35YA21HWkd/US11/S11KWwytdnr+yluQKY+Wv3D1dVLNlZinBLhMdrUjvJ3PkwA+eE+kAy6JrMOhdPhbRlqEQWBqYAfgdLFDif8dTn2A2jYkXFGeKDsL8N/LSVo8vzXLxLQ+1lf5BxEV+vbb3m37by8/UfPT3g5Os+kiVFqxoOnBy9wEJpG7DA3mkkIY4lwH5HjJU1OlsCX+nmjA+oGeE/xWDbCr/gicQVKor5ZtwyoBSd9ytg6GjVPKRGKeLjAT6VLy1sqLBGyZReRBzdOtizyoLtNQB4qYQVdsAgaHiG+OwO3X6sLU+4qMwBt872XB2u+uGYAYix+GUAl+Lu+O52dYWRvKbaKFTEuIdxMwNjgX+FTxXxnrV1OID4pYbZ8YUBrJmRWO258FWTYa1MdplLie36RUsV7Mxt5Xekl3FRO8fO2tJFapTTGy1w5VobcN+KqDso7C1gnXx95tjMwI7JeU7lsYe+JA2f0vKlqf1Ypg4B8IjDlX9MsSMHHvBwiB+B/JPrwakdXR2gAXlQ7vbJp5DWF6xv6SRNaWLv5lN+BCv9aB1NrbhHTi6pwbhzMtRBUpdnFLqP0SfXOK/sgISmk9+TTRcNHUPdMjFCX61uxTt8i0UxD+f+WsQEiPBCtWDc1l7CARqOUw3D+WmX+iydGe6jhfxhTd6qO7TacgOtob9xlPPDatIHkbdjdj/grA/hPiRj851rkSaOZd945Tgb4G/F7mW4aoMAcHOiozPDweq+m626HdeGhDd/5hlKJSS7ftwXQ36yWeTeCPohwdX5caDPWi9Mjng1/fRqz1v9kMbm6unFihPnhIS/s/jUS/1ly5vowJpF7dm4yDJ+XSKeqb9hc0gbteQjURwiJKG4cxtdDoAoq54c2A10Z05FwhnmAkqIl3AZUyyf2pqwly6b7lzwNoLFldNqLvWfG623sFKVvCbNi9uSUzVYlXbZRL/aVNPTq1lq26J4108JDVxSek2T1rlSD4RnpmbTZFz/Kjb/k/bOsvL2Sqn4q78f95Am3p3C1FPAkB9vySzzJhGWHNmjG7jHwrrvNnTEAURZMngfCcW+BoxRXrGXHroJY/kxN0sDzgm39dscsvInigXKB7DVcgaOJsZLfvLeUWZR+xCNo9exFD3vxKbCIu2phGccXE70DlM+/28hvNejdesP00p1JZpUDRntzLM9GGS5x3kiNzDXcOY088YHcN5RXhG+IxIW7j97YVtd4YhX+HPuU8bXDwi3O9eLNYY0KcUvsE9OwG7y4gZPdKeqeA3WPT2NZBAgCzng5azVKCeXhmtRcQ7Ejfy+IP3k8HbQbuyqczpLelxG+QKZFg3U+UxKJ+rRXTKkOrJYBE5CWaUWgbe2jBQWs6sHja6mH1yISwoAv9A2TtibPMzFv9f0TD/cYVPDOq65XqxOcdWN6tQtAO3Yv7IGj9SzYRmvx2Kz58RawnfbQwhC0z51eUfuhjoVb72qLaVi6z8mSgmwd6LpCzEUawOCO5iA2Jef4Ek6XALCGxKo1zfD+hw6k5WkBhqFGVnLDxCgnSzpsFDt1FPBJT66X16m8yrndFj8cx1xAJBbJ4rMi+xF03QCvOn56UBNqjtvC2CXePUsDyYKGf8IId6QIiKhvSPA/CLD4QRohuhkKCj1hDzORiyLsFKdf9FYQgIpD6LXSAALJHvvfKW10I2E9nXXIFnvQb0ssZpDQ9aZrJUb4YIoZVsh+EOhjHt5XJEcQykwnBJoP75BIRyXSAuSy7D5lXCVDP4K/NL8+tibOKc3ZMNe1EyWOvYqVbACq4dC+h+daGTXK2Y38jCCV5EFwhrYHPufOYKJEuCaiiji7Y5QSP2RNI3cgkINpnpsIoCIJ3e3+7Kx43zMKaHTZoe1OTxaf9SvNJTPYd6klbaS5EqkSsiuUBjgZYpfH187W3+uiUS/VKa4SeeuMBTHLrifLfpFU7+jhSbsGl9U1Imj4B+lVoUYh2eiadnpnalTU8ad5ok/HEbPmxojZWRxuyhyY+LjDITV2G0xGQ1Xb2R4luVh1X0XUg/z1oBqEnXFcDVi4J2PTCfFnN3uxruxqPA/mdic3M17sQJHwT2LkeHkfM6Ei9luPTsoZAAfMFyiKr7LrahLKWKUQLd4+1yStK95wfNJ9vehioE0F7nV00xwF3qeMcPZrY4uwUmqggnJiMRz7mB46qLkbNrauS0Era8ntgklD52JKaJ27NNN97d/25E7u/qRUnbkYYDlgLBMSddqbT4dkNCkrQGis41lD/j33ouRueMd+DjrLInjFtLTLigRMFvCuNwQk5M/BrzbNPYlKBbZIIhpP7fbnkW8Ux+I/kfvXUpSKAiDNJl7AMrci5wqw1XpZNkthEFnnp8K4k2fINza+xBIhzCtzIle+/mKqZ4S/EGyIeUHMNzf8GhgikEREnLOCEGu5VNed01T+6R7iHP/rOn9YPkIqACAKSknnZNX/T9rWlKv4d15W/2maUqNQR+f0t/Hqfk6rnkO1kaghPdxJPlpn8eTgsSrMIAl66VmCyC/6cVIdYDvdYC3x2wVElc0OD9V3n2l4+JHPPt5eSa56a2RgOrDOlXNRTLsfJ9gjbbp69oRvgeOWMaZG1E3bDax/1M7ktTC2mJqxqJR83Ju33jsJxN+5e9qUis20UnQLwOspc+Nm+fXbzaboGEnneV+Z1WQ6Z2r1iWmauRlVo6l2iW5OiLirDe+1RFEhbUHnXO0pEPwCL9/ETLOCJZqbLUOsaVw87CwA9KyC2byVWU46L9Wz0UlkXCYJOwSMFmUjrW7Lm5Dwg6klOl5km0ZAFZdlfiwyaaoHb8y8GsoEXlgxvXkebU/T8G8J6cHBVs0TmhS7XiYNRWOm6ru4Y0wxzvj9PIIS+iiQucVGP/V97fBVudkvtzjWDQHLy43Sifvmr92j7BP9o+vPtIX3TS5n3WgMEJIt8YOtdEJOEbV798DPMckFN0VZrhzx0QLyGTxK6BhfEASQ0pIbbUUQjjiGh3sOyC3TtpK3ApK3//cKeBCHHz1KHMOoiC07FOLNMNDekTb+/x3+IMuNsets+BLi+kVczWs3y21KuU1dlqFjLoqZuCBDO/sqVW3Y3e1n8f9g7qH8JlgdrColXG8tvRHSqRFFWvJKLU5J+P+NFDSQPxkkZgKgcgj1cAi+zMls2ngLo3/9VuJMmSEzXHhHgzlDA0s0n5dkcJYXcGQJaxUm/zSafmZGDHDxOQiWjAPbtaKRi1IYfxS2WBpShUmsRRiFsqrRRO96Q54HNS7FsuR0VPz3E0VqcMvO6rkJlO4AOjjAbCMx1QiKTxH63bQu7VKVlYmUzV7yCmNgxmcWiopmqxjzeFRyzi9+hrYTBN6Bne4MQrL0NxHfO8onLgTB0SFMzxSP8s6kU1zGGE2vAtTYNtgq8fAo80v3uww0JbR9ygqWE4FjrAS6kPI5USnEFVPi5QZcAPimVsYPNpD5WNvC6eRSdci1T/AxJzIXkhn+IEMh46nQAcsIIHjAtQ3/B1V++wCj15c5D25a/Y2eFOUHT9Wxo/+DGTkae8kevxkw1UEv6fpeFLldxlGJypM/cLyxGKiBBc0zGrdLcYweyK39rj8W5lm7BTjY10jWQh4OstNKydwu2ilygSqulf2S6ayHILZbTmLhOL99mzo4jQzKYAerTUI7r2BHWApGr+Gwr1ozCCAN1mEqkS7ZxZZ15K8EaRjmon+89jRVPevkFXaUAn7a7iktW+EaI8BHTwzvw/URSrF93itIFA0LJ+YGMqE8rszegbDD9kgkzhO6hNz2xIL0pJdvlwB+BxXVic6csHwfL81jjpgdWj0c2ROsKpXpBzXStl9a2YsGucR6VpzDCGj9PGiaWFodnbBcnXwIqWtyFwnyeCLbqkB2tZqKDyqjyr8FXlK5K66HMihKvaIEbASULjtl7c0z8mdAiKfXskaG7yTSm2pRGP+SRjUIrkFyvvJG+mXRziG2ivZmnjhN1yw/KZmTIb+J4TDcR+nhJ88A5HWr0NIvwNAkG0LtwdrRXUxkYXxd6bBpEpklhz+nKgEz+FphfYuHvCptAw/wQz5C1TbR1ospfPfKsLPiUgxb3V3cB/g8sVfzrgk9RGHGMZamIYsaiz6mQOnDvZ0t1RYJYo8hUskFI/b+ryaPxPnJ0ggTj/tmtTqIyCT8aYGNjqE72kwoGubmiY+GPTEvHqPPWN039tdnocXddkJYfwflllYxcrg9RTN7y4jUp5LzZAImURv8/ySw7zuJGXlxSkvWqL7PGdb/5FxbfKqdn9zIrPi/C/+fcMJc69kJR0Ss/mvg8eq8svtMvM9lTOHdtgH2iDRm24YEtM09ge/uvel2x4mcNkgKM4Xlk2Z22SGnllNS0EIhSsoYPTCy0CA22YtvfcOopU5gpDxgiaR0t/spmikjhXN/MPMGzog4kYFbbgThx3AgkOv6dsvaeXij1AX2/8LhxPGBk1LLKM+V0EUfDSlhRYTShdmTPks3kbP+GE6HL5wGjqVJAbAW3cFWm2O+GogxohcxeJ8nSibtJKtJwQvJmW1VEbt7Ie6xDNeJp1Z5+AoA3k2RQG8hl3k6kzvBaLxjbtGkVYrLcqKe4kH1wv6wCdriANWANlFAA",
            synopsis: "Ichiro Inuyashiki, an elderly man with a bleak life, is transformed after an accident, gaining a mysterious new body and powers.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "data:image/webp;base64,UklGRsoKAABXRUJQVlA4IL4KAABwRQCdASoNAZsAPolAmkslI6KlIfM7iKARCWkIkLea2byKzgQY4l/yH/7t/0udR9XewZ+tZGP+JZgCPOKIOGrahHTVYaB3UBs/cN/ok23pBVH4pJj392x7YCPNT1rF3IHwym2KUCupZ3Gv5j2KiyX8IF7cL9NJXpQHWhatUxlO8sE7BYMAsmz0PHXYXW2ZRRFvsNEZTIF4iR7xFtqAi3SqVvXfwG8khxE2oTu/yRCno1N/K7qdSkByutpzdaDsS63nh8QUWMWRSd8YXWj6JrwjILQV5tME41d6NekFEK2aNVcNVBh/PLDkX1Yd2My3OcB0maSGXaqNdVF2Nvq4zeFG16tiw2+gX/fPrrYyyFGp9ECJ6q381FERwS9INynSd0dxFvFyLO3AccrsG6bKszwbk8/vfj4n0vhJS2To3diO2Up6nhiDpmKTJvb7xV+eo1dnMKhU/Q+WFVnZdQz5KVZ/aTEn8Q6KOoU7WVmqOxxyCrSiNhHPkF9zzpCv9bCROe9snm/Y984Odfk9yTwSiTUdWx/DpNIT0KPD/wQPFyfQqyrWLh1iEV90conlz0EGs4IL+k2iIZQxFSvM3HbiUL4qZn1v6H6T2PGbAIkvWUhKo00ABkMaCMt0JRs3LD6UBJIz1chpJCPblJBMTgjHHUr+9AdcwBu++mWdIQH4xvAHjwsuOax6oFtwxbJyj+5d7jQFXCvZb/v/n/fg6N7KSrUtd3DQVUFM1synezZP5dX/XnaMAPAA/uof3665oWJwvgkuLLUY/KtVNX0urYmjXuNx/20kAnuWRhOoJo6rBqjnE12ggk3/+3xeKyTJRWJq8NOFkMzlAtNtLfCZTaqbUdBoiBx5EpsbZ6npuTsajBFYdAwvMe5VZBXWz7T1mpj/NOA7B6t0LfjNMGBMJx3brL+GFLfzhyVSDYMgeOZbet6jL6E2MRcTBurkx4NV/i0cwk5Ym6PgiO5SwvLR8KQNTDFSsMSzF9Uord2vNUGDChnpcNop0k0ihQ8AZy6dC+94Z7qKY+Zpp4pDo4KJq/53nrNctZCFTirIBJ45JZHpPT4CIlUWLYjgMj814zXcycV/Rn7Z4+WLCgLBfRVIw+Uxky56OZLzmIGJ62WEKTiqS4buTUOdflwsArmmCxVT6KPEhDMRq6J8AXMOYn7r6ERXkQZOCZP/gCFTbTYkNA6gHe8KLwWKHnvuOZFX6AvHTHKNGpg7xdQWDbhtQccnK/Fx+blww0C7bWoK4KJVxwDFn3GpQYJv1EQXvuTya2hGy1Xet19FFHYKiAPzGT6MjA5aVcl1YX7HL3Rs5cIANmfgA1ngW3ZN2tAlTXnCjtHfvxNIJvBUcmb888UAU5asDR6AvL9bytohLLX1kSdUS+V794QaY4QjeHFOSGSHhT++Ahw+tGB+Rh5hPr2l5O2xY6G+MgMoyCMpqDlnfCi/xW5Y7EShSw10aMjpHVgqR6Y5cp6iHl3wqDWnT4b4+OBbOqwP132NV4V7lZFNiSd4/wAHWY2QFCIXuypf9daGYturvW44EHiSk6jtWWfsd1eERED7vTa0NU/DFdLmQVlDwu4c5BV6zO9XbcEzY8faBFV1Bbh/wvfrAIy4VIpYDSVikD6Lz0gD1iQ7VOe518/SHfMtmZf5ueEY95UOmOl4QFV9zlaYf1Lvi4R3uTiF2aoj9JmBuQ0r/l2VSvYIrIkJCMA3xHLuJSvLcwssYGiF4CQ6Uz6oB+zErt0oR0AAcTZqOCECv/TEFfkg7wOAmvuHqW9BJAycm0d2zEU1uQCRdqcpRyd5wmeu41/L+r+Uin0sMKMzLWQLitGo+hqCnqyfbzqSNhxr4z0HYnv6FsylDCqWkH2behVtd9pXk6ePNc4TE8qIZ96aBAXhe1QvkjdzWSif7pt2wBAC+t5eqB8Uxz9ERdds9Aqqvigsc0V2pMFhXelhCAmJysBuCd1ly5y0etP57lJwCIQeIC7yqW1vpHJx6erZSbO+5zs37XsxScItMtXOCVWOamhUa1P8JauwKukKuUm6TE/qqNFzxurEGfAk22R+xzyJAfX7eSJArUYKgDk1kdWUQAwuQDl67o5/s0z0PlgAUmET0UFqVMS8ccG4TzMUhN+j88YimrBEbRK8wHOyy3S/w4uAQlmaoY3sMbKQSqjgvw+M0/kkvnj3zxdLDrvME94tUnzNWbPoN/PiyKwBI+Tgnoi5NfI/nvVwN78A5sKsubFvjJirbDs9mEytfE57ycX4ECsOI6OggO0Q0jpYPew4//bKby/SE2j74RVBcuQxm7cJMUpfbAzYxaStIYwBati3cYUa6cp9CGo3/XojLZsUkft6XUdDefv0g30GyTn4IjMZqjG7d3Ku//gRDY4QTDPHnOGOD24RdeUSB9wKKBBQvuKN050AOAbGX8811nmua/sN3bIRQmMplNcCoQT40kuo/Sy6QGLaPVeFH6ENQZufFs/CYTSW+1iA4CJFWirm1mzKQ101y9sKfGsdXg2DijqfAfcBm8e+90KQuchGzlE/PHURs1ZJjKGTf84DYT25lH/y+TcE4ZX/s4cym3sbeMGNFUi4EVx1fTB/XbusBIK0DG3lddnGxf7wNclwBdTQH1V3LSS/WtEhLeZTcMCKWiAitFoFsf/PxrUU8m3jev0WwDDCuD4/s/nPdrsc/SpYIQXgRWFpPNzGY3NNPIfseMgSfRQbh/PdlCjVP7sBx8o5+T2o8VFwhckwJVoSAJ+jnUnRL4D+NCkH8z7TgX76alrGybCMrnbPOA5z4sZnKkQkf7LVt4I5Mmfa2/DUpwwykuspOcfz/dK9NxvIKysuL52RVyD6qABUCvBpW1c/gjDCBP9/nrJwTcRT2DP3XNKd1wx9zEc10o1yNwktZbayujjEOOzGuirRn7xC0jbk2T61N1rbY0xezEYucU/1go2jv9ruYEzXgc9v3bfBlJFs3x6oDB77c0wiSk6+KvI/2/DH58/iA/kudVJgG90x+3SP0goJJGKnbG1LHkZHxpo8p8Ty8FBmXz9pqJxGKZYZyMUUzr9X5Yxlpk3PeIV37spEgcG44VxK+5YR8nca/xV0/W0Fip3FUsm5J5gD8snIE2d6jU3GdTjA3lPMwj0rRflB/p9bccM4YMJpPodjImAP2I3NLCv+9TpY5Xov9noZCd/bEp6fsGsX11eEPDWE8g18ee8M6yz7/b7f6q0Bunr9XLTHSi5QZb9FN8E0eW5bh1IZ5C5fpIScryMzbXm3boPZfKx9UWrJkwaumoJimDrFpRSt7Tf+KP6KL0lVD7BtZA0+FFp/w39OXRrRj8goQlvUPfimeqoTdmJ5NXbOTQE8oivJcvFCCiZW2kvNE0ytEy6kDOB8Ip44k65db0gaNJOVpRRvhzBmB2cGTRVgfRD9B98PVSHMkN3oeRwFYFxW3emQctca4VEameVDsgcfUdxTKn/zDlAONz//UpL1Sig99tEDPZw6SOa/cwKifdIM/boJgdnfuft7/QYFjZ8i0SsjHTtD47ouEbknTGgxgcJcpbOarKv/zJvieLihEzRGcSvsMKD7KZUl0u23YOTV+9TEvwOov3HexbUsQXAXhtS++UrT9wxxxx0PB1cyLanC9+SrYyk4b8b9MhupDpB59aYVh0M4R9D7wjSk9Tkj3r2QQnt4dJgo0P4Dm8qHTQAAAA==",
            synopsis: "Ichiro tests his new abilities and realizes he can heal people, while another man with similar powers uses them in darker ways.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://resizing.flixster.com/ETo6D4GfRtqT5iIlQRA2Tc93ZHw=/620x336/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15532222_e_h8_aa.jpg",
            synopsis: "The other man, Hiro Shishigami, begins a violent spree, pushing Ichiro to use his powers to stop him.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://resizing.flixster.com/p6eiXNQCTNK8Jg62xvbPIk_-3iM=/620x336/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15532229_e_h8_aa.jpg",
            synopsis: "Ichiro saves lives in a hospital and publicly becomes a hero, while Hiro's destructive actions escalate.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://resizing.flixster.com/xIbA0hZ9hCP5humyy9odz-aD528=/620x336/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15532232_e_h8_aa.jpg",
            synopsis: "As Hiro continues his rampage, Ichiro resolves to confront him directly, realizing the responsibility of his abilities.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://resizing.flixster.com/vhTSk-qUqZlTrQxbZ7bkl5ocnoY=/620x336/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15532245_e_h8_aa.jpg",
            synopsis: "A national manhunt for Hiro begins, and Ichiro faces new challenges as he tries to protect innocents.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://resizing.flixster.com/jCKZ5rukhE8Z8y3VXx85J__wqQ4=/620x336/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15532253_e_h8_aa.jpg",
            synopsis: "Ichiro gains more control over his abilities and allies with others to prevent further violence.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://resizing.flixster.com/_FKXbN0Pv4O-VsZqD7rQrvQc7fg=/620x336/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15532258_e_h8_aa.jpg",
            synopsis: "Ichiro and Hiro clash as their paths collide, leading to a battle that puts countless lives at stake.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://resizing.flixster.com/geSFh0tbmppD8uNlxbB1h0oIlqE=/620x336/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15532263_e_h8_aa.jpg",
            synopsis: "Hiro’s motives are questioned as Ichiro finds a way to bring hope to people amidst the chaos.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://resizing.flixster.com/vCxhQh8hKVS9JO9Md6UCn0MgB1I=/620x336/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15532269_e_h8_aa.jpg",
            synopsis: "In a climactic showdown, Ichiro and Hiro face off in a final confrontation that will determine their legacies.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://resizing.flixster.com/jdpZl2NT5kJ5psV9VruzzujG3-8=/620x336/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15532277_e_h8_aa.jpg",
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
        backgroundImage : "https://www.animerankings.com/wp-content/uploads/2024/04/Erased-Anime-1024x768.jpg",
        episodes: [
          {
            "epiNum": 1,
            "backgroundImage": "https://www.animerankings.com/wp-content/uploads/2024/04/Erased-1024x537.jpg",
            "synopsis": "Satoru Fujinuma discovers his power, 'Revival,' which sends him briefly back in time to prevent nearby tragedies.",
            "downloadLink": "https://drive.google.com/uc?id=1DR1ICm4cTV63Xkdx64afb7sMeFt9qOTc&export=download"
          },
          {
            "epiNum": 2,
            "backgroundImage": "https://img4.hulu.com/user/v3/artwork/e350c44c-c10f-426e-a07b-56f48d3e0359?base_image_bucket_name=image_manager&base_image=3366df9a-5699-44ea-b508-2638dcfbdb21&size=600x338&format=webp",
            "synopsis": "After his mother's murder, Satoru's 'Revival' sends him back 18 years, where he tries to stop a series of kidnappings.",
            "downloadLink": "https://drive.google.com/uc?id=1DRrM0ZDp7q5jtSOhWJBcftYXxooFOMAg&export=download"
          },
          {
            "epiNum": 3,
            "backgroundImage": "https://img2.hulu.com/user/v3/artwork/387914b3-0158-4b30-ac1c-a1b3295ee6f0?base_image_bucket_name=image_manager&base_image=441fa77a-18b9-4f5f-8b74-06559f19e638&size=600x338&format=webp",
            "synopsis": "Satoru befriends Kayo Hinazuki, a lonely girl, as he tries to prevent her from becoming the kidnapper's next victim.",
            "downloadLink": "https://drive.google.com/uc?id=1DThjs7up6qiIEDnq7bfUmsXSckq9oavW&export=download"
          },
          {
            "epiNum": 4,
            "backgroundImage": "https://img4.hulu.com/user/v3/artwork/8496e9d3-5266-4cbd-8b28-2e8d3125f698?base_image_bucket_name=image_manager&base_image=9e09548b-2db6-4e31-8f46-c701ccdb9362&size=600x338&format=webp",
            "synopsis": "Satoru begins to see the signs of abuse in Kayo's life and makes efforts to protect her, while the mystery deepens.",
            "downloadLink": "https://drive.google.com/uc?id=1DV4wpo3NHBRLV5-dUtSEHq2lAfXx4cLb&export=download"
          },
          {
            "epiNum": 5,
            "backgroundImage": "https://img1.hulu.com/user/v3/artwork/dd3298ed-06db-4a2f-8844-f111e43a1501?base_image_bucket_name=image_manager&base_image=282f4389-7719-4059-8f94-57d07b3a9c43&size=600x338&format=webp",
            "synopsis": "Satoru's actions start changing the course of events, but new obstacles arise in his mission to save Kayo.",
            "downloadLink": "https://drive.google.com/uc?id=1DZxHsWr6E6IeX49jsqpALzY8zgQl09e7&export=download"
          },
          {
            "epiNum": 6,
            "backgroundImage": "https://img1.hulu.com/user/v3/artwork/88dcc0b6-50a4-4c5f-9e60-ee628e3816d0?base_image_bucket_name=image_manager&base_image=a7499430-ae2d-4f62-bdec-a213029bc43e&size=600x338&format=webp",
            "synopsis": "As Satoru grows closer to Kayo, he becomes more determined to stop the crimes, risking exposure of his plans.",
            "downloadLink": "https://drive.google.com/uc?id=1Da5sJ4fMHWigzreZXn_axtgenciKmze0&export=download"
          },
          {
            "epiNum": 7,
            "backgroundImage": "https://img.hulu.com/user/v3/artwork/a957b98c-95da-4169-8cdd-21560c3ab078?base_image_bucket_name=image_manager&base_image=cfc89b64-c925-4baf-8aad-3bcb6385e50a&size=600x338&format=webp",
            "synopsis": "Satoru's actions lead to major shifts in the timeline, as he works to ensure Kayo's safety and avoid more tragedies.",
            "downloadLink": "https://drive.google.com/uc?id=1DcGP0brjhjEwzKOnSNvufdUyGbMS2u2t&export=download"
          },
          {
            "epiNum": 8,
            "backgroundImage": "https://img4.hulu.com/user/v3/artwork/635a6633-6cf7-4e3f-b13e-73abf4096cc3?base_image_bucket_name=image_manager&base_image=0bde5623-2d99-4f6d-964d-9d11a12ebbeb&size=600x338&format=webp",
            "synopsis": "A breakthrough occurs as Satoru manages to alter Kayo's fate, but the kidnapper remains a threat.",
            "downloadLink": "https://drive.google.com/uc?id=1Dcov6zqm3nrcLUd2y-U0AQYBZ3awtbl7&export=download"
          },
          {
            "epiNum": 9,
            "backgroundImage": "https://img2.hulu.com/user/v3/artwork/97536c3f-a6ea-46b8-9d69-60ab41c96a32?base_image_bucket_name=image_manager&base_image=d35520d4-a0ab-4e0e-914e-35b45de326f3&size=600x338&format=webp",
            "synopsis": "Satoru continues his investigation, but a slip-up brings him closer to danger as the real villain watches him.",
            "downloadLink": "https://drive.google.com/uc?id=1DcpQWfKHLXFSMCKTE1Ijh8Y6F550DEDe&export=download"
          },
          {
            "epiNum": 10,
            "backgroundImage": "https://img3.hulu.com/user/v3/artwork/b4900cf5-f5f8-450c-a825-b7fef0066aeb?base_image_bucket_name=image_manager&base_image=3fa9b16f-68b8-4c47-9945-f5493d9c2e56&size=600x338&format=webp",
            "synopsis": "The kidnapper's identity is revealed, leading to a confrontation that pushes Satoru's 'Revival' to its limits.",
            "downloadLink": "https://drive.google.com/uc?id=1DobJElBwBqrtVyXE_qWnFLAvLur_EPst&export=download"
          },
          {
            "epiNum": 11,
            "backgroundImage": "https://img3.hulu.com/user/v3/artwork/6542023b-0782-4e96-8b69-853dbdb6d049?base_image_bucket_name=image_manager&base_image=689292fa-2116-40b6-9a67-43eab81f1859&size=600x338&format=webp",
            "synopsis": "In the present, Satoru faces the truth about his journey, his powers, and the person responsible for the tragedies.",
            "downloadLink": "https://drive.google.com/uc?id=1E5CZrDaduuKyCnCzb-coumpzv-C0wqBj&export=download"
          },
          {
            "epiNum": 12,
            "backgroundImage": "https://img.hulu.com/user/v3/artwork/828ee729-16f1-48c1-978e-e6cd589ebdc3?base_image_bucket_name=image_manager&base_image=7bd19135-8917-41d8-ba2f-77fe31d34116&size=600x338&format=webp",
            "synopsis": "The series finale sees Satoru confront the villain once more, determined to finally resolve the past.",
            "downloadLink": "https://drive.google.com/uc?id=1EBHsoFZ36nAUlaBYYNufBfM1JgB9Eg2P&export=download"
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
        backgroundImage: "https://img2.hulu.com/user/v3/artwork/6b1c065e-e6e2-45f9-a396-acee6ec4c09a?base_image_bucket_name=image_manager&base_image=f6a75ab5-34b9-4529-8069-e20314349327&size=600x338&format=webp",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/7ace8f41-b966-4a68-b678-3e0330016478?base_image_bucket_name=image_manager&base_image=f34c0a93-b13f-45ff-9a6b-5ef657c924d1&size=600x338&format=webp",
            synopsis: "Emma, Norman, and Ray discover the horrific truth about their orphanage when they try to return a forgotten toy.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/001d09b4-ecc7-429e-9452-0a3c55d2086b?base_image_bucket_name=image_manager&base_image=79e09f31-132a-4950-9b3e-9fb2e8c4fe8c&size=600x338&format=webp",
            synopsis: "The children formulate a plan to escape, while being watched closely by the suspicious 'Mom,' Isabella.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/62601443-856a-49d4-bbaa-afbdc8cb81da?base_image_bucket_name=image_manager&base_image=0a13b7e5-7817-420d-a5bf-69b79f9d32e9&size=600x338&format=webp",
            synopsis: "Emma and Norman investigate possible escape routes while testing their physical abilities.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/154cf025-fc18-46b8-be4e-8b61f9ddfb94?base_image_bucket_name=image_manager&base_image=5dcd66d2-c01a-4fe5-8aec-cde920f44dca&size=600x338&format=webp",
            synopsis: "The arrival of Sister Krone complicates the children's escape plans as she suspects their intentions.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://img.hulu.com/user/v3/artwork/f168f692-d5ac-40b3-8912-2378adb5ca8f?base_image_bucket_name=image_manager&base_image=302c572b-dc79-458f-a932-1e556600e556&size=600x338&format=webp",
            synopsis: "Ray reveals his shocking role as a spy, but he also becomes an unexpected ally to Emma and Norman.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://img3.hulu.com/user/v3/artwork/8d472c46-b159-49a9-83b9-52a168fc0a1c?base_image_bucket_name=image_manager&base_image=b3c5c388-437d-4c62-b93b-bd29438ada70&size=600x338&format=webp",
            synopsis: "The children test Krone's trustworthiness, while Isabella tightens security around the orphanage.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://img3.hulu.com/user/v3/artwork/0b8eafe3-d7bf-4952-b3e5-c98451141772?base_image_bucket_name=image_manager&base_image=1d0bb7d5-a872-41ff-8d48-47b5d9a92867&size=600x338&format=webp",
            synopsis: "Krone learns more about the children’s escape plans, but her ambitions bring unforeseen consequences.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://img3.hulu.com/user/v3/artwork/0b8eafe3-d7bf-4952-b3e5-c98451141772?base_image_bucket_name=image_manager&base_image=1d0bb7d5-a872-41ff-8d48-47b5d9a92867&size=600x338&format=webp",
            synopsis: "The children put their escape plan into action, but Isabella's relentless pursuit puts everything at risk.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/836ca32d-9c95-40e2-8118-aa0df9c8e4e5?base_image_bucket_name=image_manager&base_image=3ff1c968-3cdf-44e1-8142-54a834fe34fc&size=600x338&format=webp",
            synopsis: "The group faces unexpected challenges as their escape unfolds, forcing them to make difficult decisions.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/bac0b181-36f5-4bb0-9dbd-cde2a35a0d9a?base_image_bucket_name=image_manager&base_image=67d51e79-c615-4a94-ae6e-8a8d4ef3603d&size=600x338&format=webp",
            synopsis: "Emma and Ray lead a desperate final attempt to escape, pushing their courage and resolve to the limit.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://img3.hulu.com/user/v3/artwork/886ca3d1-cac5-4589-aa40-f56e7e911a8d?base_image_bucket_name=image_manager&base_image=cf41d943-cf99-4e48-af67-ddd5d583551c&size=600x338&format=webp",
            synopsis: "The children confront Isabella one last time as they struggle to reach freedom.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/008631cf-6f19-4609-8dbd-a655475d085f?base_image_bucket_name=image_manager&base_image=2ab89b72-05cd-4d97-9769-b634542ecc13&size=600x338&format=webp",
            synopsis: "The escape concludes with a heart-pounding climax as the children finally find their way out of the orphanage.",
            downloadLink : ""
          }
        ]
      },
      {
        seasonNumber: 2,
        backgroundImage:"https://img1.hulu.com/user/v3/artwork/df8a0952-b509-4717-a5a6-269e9d51b413?base_image_bucket_name=image_manager&base_image=149d8ceb-a80f-4b96-a0cd-5f8352f60eb4&size=600x338&format=webp",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/d9119f74-777a-4ae1-8ba7-15b67a0f9c85?base_image_bucket_name=image_manager&base_image=17553221-234c-4a98-8e2b-c310895d3de3&size=600x338&format=webp",
            synopsis: "Now in the outside world, the children face new dangers in a mysterious forest filled with demons.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/5cf0ff60-cc3d-4376-8a3d-d9841a92d12d?base_image_bucket_name=image_manager&base_image=36d5e272-1434-460e-afac-8d247f44aa84&size=600x338&format=webp",
            synopsis: "Emma and Ray find unlikely allies as they navigate the unfamiliar terrain outside the orphanage.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/60db3d52-8e87-49ae-be12-e44f66928398?base_image_bucket_name=image_manager&base_image=97c3e54e-8d41-4665-ae0e-2c74f6696ed5&size=600x338&format=webp",
            synopsis: "The group discovers the horrifying history of the world they live in, and their place within it.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/e9e3ce24-cbb2-4562-b86f-bdd8aad34325?base_image_bucket_name=image_manager&base_image=644a6a9b-ef7b-4295-922a-7e3e0c6f2c94&size=600x338&format=webp",
            synopsis: "A deadly pursuit ensues as the children come closer to finding a way to true freedom.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://img3.hulu.com/user/v3/artwork/61c469ca-e6be-49e9-a155-029b93f9700a?base_image_bucket_name=image_manager&base_image=cdd1a6aa-8ad3-40d3-9532-c06a6b05d510&size=600x338&format=webp",
            synopsis: "Emma faces her toughest decision yet, one that will affect the future of all the orphans.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/a1626d6d-c28b-4043-a25e-c663f06e49c3?base_image_bucket_name=image_manager&base_image=fb1a89a5-8e94-4af1-8042-35151b502f35&size=600x338&format=webp",
            synopsis: "The group stumbles upon a hidden base, where they meet those fighting to end the human-demon conflict.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/832d7dc5-4889-469d-829a-4016ab03b1d7?base_image_bucket_name=image_manager&base_image=43d54391-8ccf-48c8-8d44-4b66971710ff&size=600x338&format=webp",
            synopsis: "The children attempt a rescue mission, but the stakes grow higher with every move they make.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/672aefba-4476-4fff-a0c8-d6a66589c46c?base_image_bucket_name=image_manager&base_image=861b68af-d749-4ada-b771-19756c4a2383&size=600x338&format=webp",
            synopsis: "Emma and her friends face betrayal and unforeseen dangers as they push toward their goal.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://img3.hulu.com/user/v3/artwork/84cc4d9e-327a-410d-b678-dae803489fc0?base_image_bucket_name=image_manager&base_image=db137f07-7654-41be-90d6-808a51138d90&size=600x338&format=webp",
            synopsis: "The children confront the harsh realities of their mission, questioning their own beliefs.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://img3.hulu.com/user/v3/artwork/9213d67e-6e2c-40ce-be99-19242c0a72cb?base_image_bucket_name=image_manager&base_image=d55d1fef-9c04-4e71-9a8c-0a80fb21ed5a&size=600x338&format=webp",
            synopsis: "In the season finale, the children make a stand for freedom, hoping to change the fate of all orphans.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/252524cc-dfbe-4c6e-ad61-a21501fb5baf?base_image_bucket_name=image_manager&base_image=83a3b5df-ed0a-4242-b1e7-279d81bb2fc5&size=600x338&format=webp",
            synopsis: "As Emma extends her hand to Peter and says, 'Let's be free,' he shows a calm expression, but realizes his true fate.",
            downloadLink : ""
          }
        ]
      }
    ]
  },

  // {
  //   title: "Psycho-Pass",
  //   genre: "Mystery",
  //   backgroundImage: "https://wallpapercave.com/wp/wp2592210.jpg",
  //   synopsis: "In a future where the state of mind can be quantified, enforcers must capture latent criminals before they act.",
  //   seasons: [
  //     {
  //       seasonNumber: 1,
  //       episodes: [
  //         {
  //           epiNum: 1,
  //           backgroundImage: "https://static1.fandomspot.com/images/8f709249e66de50896c1777ecaa4f1f0.jpg",
  //           synopsis: "A rookie inspector joins the Public Safety Bureau and encounters the harsh reality of crime and justice.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 2,
  //           backgroundImage: "https://static1.fandomspot.com/images/92e88de47cd4b26d62268da705417b0c.jpg",
  //           synopsis: "As tensions rise, the team faces a serial killer with a unique method of eluding the law.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 3,
  //           backgroundImage: "https://static1.fandomspot.com/images/26ca9aa7cbe924ae2e5df5a1dc79e1e6.jpg",
  //           synopsis: "The team investigates a series of murders linked to an underground syndicate, testing their skills and resolve.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 4,
  //           backgroundImage: "https://static1.fandomspot.com/images/3c651f4c4f8cde7339ef92e09f2b6c25.jpg",
  //           synopsis: "A mysterious case arises, leading to a confrontation with a powerful enemy that challenges the system.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 5,
  //           backgroundImage: "https://static1.fandomspot.com/images/94ec79cb13a38e59b1c5c2df458e168b.jpg",
  //           synopsis: "The enforcers must navigate moral dilemmas as they pursue a criminal mastermind with a personal vendetta.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 6,
  //           backgroundImage: "https://static1.fandomspot.com/images/dba4af5c5a23a57922070d6b09ab12d0.jpg",
  //           synopsis: "A terrorist attack shakes the city, forcing the team to act quickly to prevent further chaos.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 7,
  //           backgroundImage: "https://static1.fandomspot.com/images/a65e4f53b11a1252cf817ad16da5380c.jpg",
  //           synopsis: "The investigation leads to shocking revelations about the nature of justice and the human psyche.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 8,
  //           backgroundImage: "https://static1.fandomspot.com/images/98cbe774b1cc51b079e6196de6a91ee2.jpg",
  //           synopsis: "A new case involving a cult tests the team's loyalties and challenges their beliefs about the system.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 9,
  //           backgroundImage: "https://static1.fandomspot.com/images/91e9f1f61dc9d85f91ae05f0c67b0c40.jpg",
  //           synopsis: "As the investigation deepens, the team uncovers a conspiracy that threatens the stability of society.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 10,
  //           backgroundImage: "https://static1.fandomspot.com/images/4170835c55a7e90a42bdfc739047c1f5.jpg",
  //           synopsis: "The stakes rise as personal ties are tested and the line between right and wrong blurs.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 11,
  //           backgroundImage: "https://static1.fandomspot.com/images/d84c8239a5a5620c2d60c8bc57fd63a7.jpg",
  //           synopsis: "A confrontation with a former ally reveals the true nature of their work and the price of justice.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 12,
  //           backgroundImage: "https://static1.fandomspot.com/images/b4f3078d58c0de39ef08e649c4a3732e.jpg",
  //           synopsis: "As the season comes to a close, the team faces their most significant challenge yet, testing their resolve and beliefs.",
  //           downloadLink : ""
  //         }
  //       ]
  //     },
  //     {
  //       seasonNumber: 2,
  //       episodes: [
  //         {
  //           epiNum: 1,
  //           backgroundImage: "https://static1.fandomspot.com/images/4b1b63d1cd23b5b5d07a63707c4f3f3a.jpg",
  //           synopsis: "The story resumes with Akane Tsunemori, who is now a full inspector in the Public Safety Bureau, confronting a new threat.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 2,
  //           backgroundImage: "https://static1.fandomspot.com/images/4d902e4f4e5b8c9421a5a5f8c4ebde4f.jpg",
  //           synopsis: "As new criminals emerge, Akane and her team must adapt to changing circumstances and moral dilemmas.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 3,
  //           backgroundImage: "https://static1.fandomspot.com/images/cf019c5a1a72c558c40946ffb83aa2d4.jpg",
  //           synopsis: "The investigation into a recent crime leads to shocking discoveries about the criminal organization.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 4,
  //           backgroundImage: "https://static1.fandomspot.com/images/6d27e2346e14bb5df0c70754b1c62e2d.jpg",
  //           synopsis: "Tensions rise within the team as personal conflicts and philosophical differences come to light.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 5,
  //           backgroundImage: "https://static1.fandomspot.com/images/7f4ffacbfbb36264fd4368991e72ac2f.jpg",
  //           synopsis: "A confrontation with a rogue agent leads to moral questioning and a deeper exploration of the system.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 6,
  //           backgroundImage: "https://static1.fandomspot.com/images/57a776f36c24587c86bafee6d83da74d.jpg",
  //           synopsis: "As new threats arise, Akane must navigate complex relationships and the consequences of her decisions.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 7,
  //           backgroundImage: "https://static1.fandomspot.com/images/bd42f2511e36caa3d593c98e589019cb.jpg",
  //           synopsis: "The case leads to a confrontation with a shadowy organization intent on manipulating the system.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 8,
  //           backgroundImage: "https://static1.fandomspot.com/images/68a4b22c6c3c623b024678b487f36557.jpg",
  //           synopsis: "As the investigation progresses, Akane faces challenges that test her beliefs about justice and morality.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 9,
  //           backgroundImage: "https://static1.fandomspot.com/images/348fb3d4c677580e9b2da41dbdc9aaab.jpg",
  //           synopsis: "The stakes escalate as personal stakes become intertwined with the broader investigation.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 10,
  //           backgroundImage: "https://static1.fandomspot.com/images/1c676816b0a6c5e4c17f74c6be3c25c9.jpg",
  //           synopsis: "Akane's choices lead to significant consequences, forcing her to confront her role in the system.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 11,
  //           backgroundImage: "https://static1.fandomspot.com/images/a6d80fef12e4e631503bbd5035b3f6c8.jpg",
  //           synopsis: "The season builds to a dramatic confrontation that will test the limits of the law and justice.",
  //           downloadLink : ""
  //         },
  //         {
  //           epiNum: 12,
  //           backgroundImage: "https://static1.fandomspot.com/images/07b5aa6885aa067d58a3ee648e9e34d0.jpg",
  //           synopsis: "In a gripping finale, Akane and her team must face the reality of their world and the choices they’ve made.",
  //           downloadLink : ""
  //         }
  //       ]
  //     }
  //   ]
  // },

  {
    title: "Another",
    genre: "Mystery",
    backgroundImage: "https://cdn.animenewsnetwork.com/thumbnails/crop900x350/video/category/616/key_art_another.jpg",
    synopsis: "A transfer student uncovers the terrifying curse affecting his class, leading to a series of deadly incidents.",
    seasons: [
      {
        seasonNumber: 1,
        backgroundImage : "https://www.anime-planet.com/images/anime/screenshots/another-4417-1.jpg",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvH5N0_V7NcmoQGQrQ2bErc_WqcR_Bk5V4jyZeLRzi3icGukilwkop3g2QCiwmyg5Sjo&usqp=CAU",
            synopsis: "Kouichi Sakakibara transfers to Yomiyama North Middle School and encounters a strange girl named Mei Misaki.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7drGOy83duaYFUgvtBxWGjCKyIyHfsyB36ApAorBc80WEHqA7jcxnVgLy3rWwghKgLIc&usqp=CAU",
            synopsis: "Kouichi tries to learn more about the school's dark history, but his classmates are reluctant to share details.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTahK4CDOI4vAx03bmQswAAsEzLqGAcrQkDPJVNaQvvXa6CFzoFea17Yun8y6fv3ADYw5o&usqp=CAU",
            synopsis: "Mysterious deaths begin, and Kouichi starts to understand the implications of the curse.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaIeMALYL3OfRhx-7XBzEZLW05sqBwRUz0IHs5Tp77cOXnQqgcCB4dH4qy4KYvY3GJSUg&usqp=CAU",
            synopsis: "Kouichi and Mei investigate further, realizing the class is connected to a deadly chain of events.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://images5.alphacoders.com/639/thumbbig-639790.webp",
            synopsis: "The students try different tactics to avoid the curse, but tragedy strikes again.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://images8.alphacoders.com/639/thumbbig-639784.webp",
            synopsis: "Kouichi and Mei piece together clues that might lead to breaking the curse.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://images2.alphacoders.com/639/thumbbig-639792.webp",
            synopsis: "In a desperate attempt, the class uncovers past secrets that shed light on the mystery.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://images.alphacoders.com/639/thumbbig-639785.webp",
            synopsis: "As they face greater dangers, Kouichi and Mei realize the curse's reach is deeper than they imagined.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://images2.alphacoders.com/240/thumbbig-240070.webp",
            synopsis: "The classmates devise a final plan to end the curse once and for all.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://images6.alphacoders.com/639/thumbbig-639822.webp",
            synopsis: "A shocking revelation changes everything, leading to a final showdown with the curse.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://images3.alphacoders.com/727/thumbbig-727995.webp",
            synopsis: "The mystery of the curse comes to light, with devastating consequences for those involved.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://images3.alphacoders.com/639/thumbbig-639809.webp",
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
    backgroundImage: "https://m.media-amazon.com/images/M/MV5BMmVhMWJjMTgtYzVjYS00Y2M2LWE2ZjItZDM3OWQ5NDllMjJlXkEyXkFqcGdeQWRpZWdtb25n._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
    synopsis: "Two teenage boys with a mysterious past embark on a series of terrorist attacks in Tokyo, challenging the city to uncover their motives.",
    seasons: [
      {
        seasonNumber: 1,
        backgroundImage: "https://m.media-amazon.com/images/M/MV5BMGZjOTcxOGMtM2VlOC00YzA1LTk1YjYtYTZmMWJiYTU0NTk1XkEyXkFqcGc@._V1_FMjpg_UX1280_.jpg",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BMDIxYWE5NjUtZGE3NC00NGQyLWIxNWUtYjM5ZTZhNjkxMzkwXkEyXkFqcGc@._V1_QL75_UX388_.jpg",
            synopsis: "In the aftermath of a terrorist attack, the police struggle to find leads as the attackers remain anonymous.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BYmNiNzM4MDEtZDcwNy00MTdjLWI4OTItZjkzOTBjNzExODk5XkEyXkFqcGc@._V1_QL75_UX407_.jpg",
            synopsis: "The mystery deepens as the attackers continue their game, and the authorities race against time to stop them.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BZmQwZTQyZWUtNTFmYS00NjM2LTg0NGEtMDFiMzE2ZTVhZWEzXkEyXkFqcGc@._V1_QL75_UX406_.jpg",
            synopsis: "As the boys reveal their true identities, their motives become clearer, drawing attention from various factions.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BYWNlZjQxZDMtZTg5YS00MmVkLWE3MjQtOTgwMzJiZTk2Y2JhXkEyXkFqcGc@._V1_.jpg",
            synopsis: "The duo's next move puts them on a collision course with law enforcement and raises the stakes of their mission.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BOWRlOGRmNmItODM5MS00ZmRiLWFhNGItYTY4NzAyMmVlNTdkXkEyXkFqcGc@._V1_.jpg",
            synopsis: "A close call forces the boys to reconsider their actions and the implications of their choices.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BY2M3ODZmZmYtZDJmYi00NmY5LWE2NGUtYmZhNjc5YmRkM2E2XkEyXkFqcGc@._V1_.jpg",
            synopsis: "New alliances form as the boys seek help, complicating their plans and increasing the tension.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BMDRhM2ZjMjUtOTdkYS00NzQwLTgxOTctYWZiZTM5OGRjNGIyXkEyXkFqcGc@._V1_.jpg",
            synopsis: "The investigation heats up, and the boys are pushed to their limits as their pasts catch up with them.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BZTYyNzJmYTMtZGNiNy00YzIzLTkxY2UtZjZkNzBhYzg5YzkwXkEyXkFqcGc@._V1_.jpg",
            synopsis: "As the threat escalates, the line between friend and foe blurs, forcing tough decisions.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BNTJjMTBkNmItOGNiMC00Y2NjLThkYWEtNDAwMDhmYmU0ZDRjXkEyXkFqcGc@._V1_.jpg",
            synopsis: "The confrontation reaches its peak as the true purpose of their actions is revealed.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BZmI5YzEwZTItZjZiMi00NzI2LTlhMjQtNzQ1N2MxNzBlMTQ3XkEyXkFqcGc@._V1_.jpg",
            synopsis: "In a race against time, the boys must execute their final plan to achieve their goals.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BY2M2MjAxNTItZjRlYi00Njg3LWIxNDgtNDFiMzYwMGUxYjI5XkEyXkFqcGc@._V1_.jpg",
            synopsis: "The consequences of their actions come to fruition, leading to a shocking conclusion.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BNmJkNWMzMmYtMTdhMi00YzM2LWFkMjYtNjMwYTUzNjlhZmE1XkEyXkFqcGc@._V1_.jpg",
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
    backgroundImage: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Made_in_Abyss_KV.jpg/220px-Made_in_Abyss_KV.jpg",
    synopsis: "In a world where a vast chasm known as the Abyss beckons explorers, a young girl and her robot friend venture deep into its mysterious depths in search of her mother.",
    seasons: [
      {
        seasonNumber: 1,
        backgroundImage : "https://m.media-amazon.com/images/M/MV5BODYzNDYwMjAtMWE5Yy00MTQ3LWIxN2ItMWE2NTAyM2U0YmIzXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BODYzNDYwMjAtMWE5Yy00MTQ3LWIxN2ItMWE2NTAyM2U0YmIzXkEyXkFqcGc@._V1_QL75_UX500_CR0,0,500,281_.jpg",
            synopsis: "Riko, a young girl, descends into the Abyss to find her mother, meeting a mysterious robot boy named Reg along the way.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BZWFlZDdiNmEtNTNlMC00MGNjLWJjNjMtMzBmOTUzMjRiMTRiXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
            synopsis: "Riko and Reg face the dangers of the Abyss as they begin their adventure, encountering strange creatures and environments.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BNjZiMmFkYWItMjQxNC00MDVkLWE2YjgtNWFmZDc1ODFkZjM4XkEyXkFqcGc@._V1_QL75_UY563_CR0,0,1000,563_.jpg",
            synopsis: "The duo faces their first real challenge in the Abyss, testing their skills and determination.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BNjE5YWM0ZGItYzFkYy00ZjlkLTg3ZTctYjEyNjRjMWU2NGI4XkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
            synopsis: "As they delve deeper, Riko and Reg learn more about the Abyss and the perils it holds.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BZjI5M2VmOWItY2UwOC00MzgwLTgxYzgtMTZhZTBhYzkzYTU4XkEyXkFqcGc@._V1_QL75_UY563_CR1,0,1000,563_.jpg",
            synopsis: "Riko's resolve is tested when they face the harsh realities of the Abyss's effects on explorers.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BOWJhNDE5MTUtYjVmMS00MWFkLWJiMzQtMGI4MGZmNjNiZjM1XkEyXkFqcGc@._V1_QL75_UY563_CR0,0,1000,563_.jpg",
            synopsis: "The duo encounters new allies and threats as they navigate the mysteries of the Abyss.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BNTAzOWQ5MTQtMzE2Ni00OWFlLTg4ZGMtMTQ2Y2UzODMzNDVlXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
            synopsis: "Riko and Reg confront the challenges posed by the Abyss and learn about its history.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BZWRlOTUzNGEtZWZhMi00ODczLWFjMzMtOGZjODc5ZDRlODMyXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
            synopsis: "The mysteries of the Abyss deepen as Riko and Reg encounter dangerous foes.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BMTljYTZlMmMtNjk4NC00NGNkLTllZmItZDIxZTU3YTdiZTY0XkEyXkFqcGc@._V1_QL75_UY563_CR1,0,1000,563_.jpg",
            synopsis: "Riko faces personal challenges and doubts as the journey continues deeper into the Abyss.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BMTljYTZlMmMtNjk4NC00NGNkLTllZmItZDIxZTU3YTdiZTY0XkEyXkFqcGc@._V1_QL75_UY563_CR1,0,1000,563_.jpg",
            synopsis: "Reg's true nature is revealed, changing the dynamics of their partnership.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BMjIxNDRlYzUtMTM5OC00ZThlLWIzZTItOTA5YWE1MGQxODYxXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
            synopsis: "The climax approaches as Riko and Reg prepare for the challenges that await in the Abyss.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BZjdkNWE1MmMtZmI3Mi00ZTk1LWFkNGQtNjY3NDUyY2MzYjFjXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
            synopsis: "In the season finale, Riko's journey leads her to shocking discoveries about her mother and the Abyss.",
            downloadLink : ""
          },          
          {
            epiNum: 13,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BMDdhN2IxNzYtNmMxNC00ODVkLWFmODMtZWVjMDUwNDFkMTljXkEyXkFqcGc@._V1_QL75_UX500_CR0,0,500,281_.jpg",
            synopsis: "Nanachi and Mitty's past is revealed. How did they become what they are and who is responsible for it? Meanwhile, Riko is on the mend after her injuries.",
            downloadLink : ""
          }
        ]
      },
      {
        seasonNumber: 2,
        backgroundImage :"https://m.media-amazon.com/images/M/MV5BYTZiZDVkMWMtY2M1ZS00MzQwLTkwMmMtMjJhYjkxMzRhYTBmXkEyXkFqcGc@._V1_QL75_UX500_CR0,0,500,281_.jpg",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BMjE3OTVkY2UtZmZmNS00MWM3LWFmZjAtYzViODcwYjYwZjYxXkEyXkFqcGc@._V1_QL75_UX500_CR0,0,500,281_.jpg",
            synopsis: "Riko and Reg continue their journey deeper into the Abyss, encountering new challenges and old foes.",
            downloadLink : ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BNDFjZTk0MTctODczNS00NmQ4LWI2ZDYtMmRhYjY3ZTNkZmNhXkEyXkFqcGc@._V1_QL75_UY281_CR1,0,500,281_.jpg",
            synopsis: "As they navigate the dangers of the Abyss, Riko and Reg's bond is tested in unexpected ways.",
            downloadLink : ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BNDRlYTY2NTAtYmJiOS00YWUxLThkYjEtYjQwZDVkYmRmMWRjXkEyXkFqcGc@._V1_QL75_UY281_CR1,0,500,281_.jpg",
            synopsis: "The duo discovers new allies who aid them in their quest but also face new threats lurking in the shadows.",
            downloadLink : ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BZDEwMzEzZDYtNDk3Ni00MjNmLWI0NGMtNzgwMzk1NTljOTk1XkEyXkFqcGc@._V1_QL75_UY281_CR1,0,500,281_.jpg",
            synopsis: "Riko encounters a former explorer who shares the dark truths of the Abyss, leaving her shaken.",
            downloadLink : ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BZTEyOTg5ODYtMDUwOC00ZDU1LWIxMDctM2Q2NjE2ZWE1NjQ4XkEyXkFqcGc@._V1_QL75_UX500_CR0,0,500,281_.jpg",
            synopsis: "The duo faces an overwhelming challenge that tests their strength and determination.",
            downloadLink : ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BYmIxM2FlNTItM2ZlOS00NmQ5LTg3YjItOWY2MWY5ZDRiMTk4XkEyXkFqcGc@._V1_QL75_UY281_CR1,0,500,281_.jpg",
            synopsis: "Riko discovers a hidden area of the Abyss filled with wonders and dangers alike.",
            downloadLink : ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BYmQ0ZWM3ZjQtYzk4NC00MTM0LTkzYzItM2IyMDRiYTk5NGY1XkEyXkFqcGc@._V1_QL75_UX500_CR0,0,500,281_.jpg",
            synopsis: "As they descend further, Riko and Reg face moral dilemmas that challenge their beliefs.",
            downloadLink : ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BY2M1MWM5NzEtYzNmZS00ZDBkLWJmMmMtYTVjYjkwMDhjZDBhXkEyXkFqcGc@._V1_QL75_UY281_CR1,0,500,281_.jpg",
            synopsis: "New threats emerge as the duo navigates the Abyss, leading to intense confrontations.",
            downloadLink : ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BMzVjNjA0ZjgtMjU5Yi00NGEzLWFjNjYtNTNhOTRiNGZjY2EwXkEyXkFqcGc@._V1_QL75_UX500_CR0,0,500,281_.jpg",
            synopsis: "Riko's quest becomes more perilous as she learns of the Abyss's true nature.",
            downloadLink : ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BZjg0OGYzMDktMjlkMy00ODI0LTlkYzUtZGU2MTY0YzVlZGJiXkEyXkFqcGc@._V1_QL75_UX500_CR0,0,500,281_.jpg",
            synopsis: "Reg faces his own past as the duo confronts their fears and the realities of the Abyss.",
            downloadLink : ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BNjM1NDg2MGQtOWQ1Yy00YTBjLTk5ZTctMTgxNDliMGVlMjRmXkEyXkFqcGc@._V1_QL75_UY281_CR1,0,500,281_.jpg",
            synopsis: "In a climactic battle, Riko and Reg must unite their strengths to survive the Abyss's threats.",
            downloadLink : ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://m.media-amazon.com/images/M/MV5BZjM4ODA5YTktNjliMC00NzI5LTk3ZTctZWYyYWEyNTJhMmQzXkEyXkFqcGc@._V1_QL75_UX500_CR0,216,500,281_.jpg",
            synopsis: "In the season finale, revelations unfold, and the journey ahead is set for Riko and Reg.",
            downloadLink : ""
          }
        ]
      }
    ]
  },

 {
    title: "Solo Leveling",
    genre: "Adventure",
    backgroundImage: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/4305090653ee4239dd0d797f1a4a6bdf.jpg",
    synopsis: "In a world filled with hunters fighting monsters from mysterious gates, weak hunter Sung Jinwoo gains a leveling-up ability that could turn him into the world’s strongest hunter.",
    seasons: [
      {
        seasonNumber: 1,
        backgroundImage: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/4305090653ee4239dd0d797f1a4a6bdf.jpg",
        episodes: [
          {
            epiNum: 1,
            backgroundImage: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/9685e02cab2b3d22296e7c7e46d78aa8.jpg",
            synopsis: "Sung Jinwoo, known as the weakest hunter, faces a near-fatal encounter in a dangerous dungeon and awakens a mysterious power.",
            downloadLink: ""
          },
          {
            epiNum: 2,
            backgroundImage: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/50a0eb40c919b8efea01fd4799df08ff.jpg",
            synopsis: "Jinwoo explores his newfound abilities, encountering the challenges of leveling up in dangerous situations.",
            downloadLink: ""
          },
          {
            epiNum: 3,
            backgroundImage: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/c6adceca173ff32ae979af193a476fb2.jpg",
            synopsis: "Jinwoo takes on quests assigned by the System, leading to shocking discoveries about his strength.",
            downloadLink: ""
          },
          {
            epiNum: 4,
            backgroundImage: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/78de61960488c9f16f960dae0b554eca.jpg",
            synopsis: "Growing stronger, Jinwoo revisits old dungeons and reveals more of his potential to others.",
            downloadLink: ""
          },
          {
            epiNum: 5,
            backgroundImage: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/403416c5837765866f3b19ac27932777.jpg",
            synopsis: "Jinwoo uncovers the dangers of the System’s penalties while trying to balance his new power.",
            downloadLink: ""
          },
          {
            epiNum: 6,
            backgroundImage: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/4622fd0dd6f0072211526a8ae67f0c5c.jpg",
            synopsis: "His abilities tested, Jinwoo faces higher-level monsters and realizes he can no longer stay unnoticed.",
            downloadLink: ""
          },
          {
            epiNum: 7,
            backgroundImage: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/018425874ef4c1b18b32c26645d6c848.jpg",
            synopsis: "Jinwoo gains allies as he grows in strength, but his reputation among hunters begins to shift.",
            downloadLink: ""
          },
          {
            epiNum: 8,
            backgroundImage: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/ba4454c313d44737a3a72fc390bd2159.jpg",
            synopsis: "Venturing into new territories, Jinwoo begins understanding the darker secrets of the hunter world.",
            downloadLink: ""
          },
          {
            epiNum: 9,
            backgroundImage: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/08ade842ca3ae544ccc5e4f6a207b529.jpg",
            synopsis: "A powerful foe challenges Jinwoo’s newfound abilities, testing his limits.",
            downloadLink: ""
          },
          {
            epiNum: 10,
            backgroundImage: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/9833d2909af5311139e79b32a44d9605.jpg",
            synopsis: "Jinwoo faces the true extent of the System’s challenges as he is pushed into a deadly situation.",
            downloadLink: ""
          },
          {
            epiNum: 11,
            backgroundImage: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/66e3cabc8e0557f77c93c24178e7a5cd.jpg",
            synopsis: "With higher stakes, Jinwoo realizes his journey as a hunter will reshape his life.",
            downloadLink: ""
          },
          {
            epiNum: 12,
            backgroundImage: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/cda77a98de7021522ebb5f0cc9bebd7d.jpg",
            synopsis: "In a climactic battle, Jinwoo reveals his full potential, leaving an impact on the hunter world.",
            downloadLink: ""
          }
        ]
      }
    ]
  },
  
  {
    title: "Jobless Reincarnation: Mushoku Tensei",
    genre: "Adventure",
    backgroundImage: "https://img4.hulu.com/user/v3/artwork/787a5fb4-9cba-4a69-96b2-4fb3b10c860a?base_image_bucket_name=image_manager&base_image=f435465f-3115-4c3c-bd4b-0ec734091b12&size=1024x576&format=webp",
    synopsis: "A 34-year-old NEET is reincarnated in a fantasy world with the resolve to live his new life to the fullest.",
    seasons: [
      {
        seasonNumber: 1,
        backgroundImage: "https://img1.hulu.com/user/v3/artwork/466615c0-7686-48c9-be32-068ca9504625?base_image_bucket_name=image_manager&base_image=9850838f-8ca8-4c75-9fe1-40566bfe1189&size=600x338&format=webp",
        episodes: [
          { 
            epiNum: 1,
            backgroundImage: "https://img3.hulu.com/user/v3/artwork/ba54ca0d-6bd0-44d8-bbd3-2fd3249eb28a?base_image_bucket_name=image_manager&base_image=7369bb29-b8a4-49c8-af73-0a9463cd2def&size=600x338&format=webp",
            synopsis: "A man reincarnates into a fantasy world as Rudeus, and begins his journey with new goals and challenges.",
            downloadLink : ""
          },
          { 
            epiNum: 2,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/c9b1df90-ac68-46af-8d6a-a336dab5e71f?base_image_bucket_name=image_manager&base_image=28dac980-c9c3-4332-b0c8-b1966caf8e98&size=600x338&format=webp",
            synopsis: "Rudeus starts magic training with his new tutor, Roxy, showcasing his talent and determination.",
            downloadLink : ""
          },
          { 
            epiNum: 3,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/b1ae7571-98d6-434e-8348-1feb40d682f5?base_image_bucket_name=image_manager&base_image=5ac09629-ff90-433e-9a65-8151b1b3df36&size=600x338&format=webp",
            synopsis: "Rudeus makes his first friend, Sylphiette, and learns the importance of kindness and companionship.",
            downloadLink : ""
          },
          { 
            epiNum: 4,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/f81a6825-636b-4533-970b-64f4a5015008?base_image_bucket_name=image_manager&base_image=120f44f1-4d83-469a-b95c-1b9b2903a9b8&size=600x338&format=webp",
            synopsis: "Family conflicts arise, forcing Rudeus to navigate the complexities of relationships in his new world.",
            downloadLink : ""
          },
          { 
            epiNum: 5,
            backgroundImage: "https://img.hulu.com/user/v3/artwork/c918a1f8-5afd-4335-95bc-84e2533f71ac?base_image_bucket_name=image_manager&base_image=5058bcf7-9084-42d8-924a-308269e39bd7&size=600x338&format=webp",
            synopsis: "Rudeus encounters Eris, a feisty noble, and faces new challenges in a hostile environment.",
            downloadLink : ""
          },
          { 
            epiNum: 6,
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/f1bfcbe6-7cf0-4477-b618-fa4b7541625e?base_image_bucket_name=image_manager&base_image=925d8e3e-44a3-443f-809d-01441d0a7574&size=600x338&format=webp",
            synopsis: "Rudeus and Eris experience life in the city, developing a friendship as they learn about each other.",
            downloadLink : ""
          },
          { 
            epiNum: 7,
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/a3371975-27a6-44d2-bb34-3eba889eae01?base_image_bucket_name=image_manager&base_image=9952bff0-3d82-46ad-96b2-0169df10d8fd&size=600x338&format=webp",
            synopsis: "Rudeus trains hard with Eris, preparing for unexpected challenges while discovering his potential.",
            downloadLink : ""
          },
          { 
            epiNum: 8,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/8165c1f4-366f-4bbc-8ccc-94810e314672?base_image_bucket_name=image_manager&base_image=aa23c39e-40e8-481c-9543-0f166ee55455&size=600x338&format=webp",
            synopsis: "A mysterious incident transports Rudeus to a dangerous new location, changing his life forever.",
            downloadLink : ""
          },
          { 
            epiNum: 9,
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/3f700315-cd00-4e21-9ec5-2054d2935101?base_image_bucket_name=image_manager&base_image=e3663824-793a-4dd7-aea9-1b1465549576&size=600x338&format=webp",
            synopsis: "Rudeus meets Ruijerd, a powerful warrior, who aids him and Eris in surviving their new surroundings.",
            downloadLink : ""
          },
          { 
            epiNum: 10,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/546f243c-ef27-4c07-95ad-3a78cfa67a32?base_image_bucket_name=image_manager&base_image=64d8aa06-3d42-4065-aa68-0b2a68690903&size=600x338&format=webp",
            synopsis: "Rudeus takes on his first job, learning the harsh realities of survival and the weight of decisions.",
            downloadLink : ""
          },
          { 
            epiNum: 11,
            backgroundImage: "https://img1.hulu.com/user/v3/artwork/964e35e0-90a3-4927-978d-457e61570f61?base_image_bucket_name=image_manager&base_image=a9f0ad78-d751-4206-b6a8-956208daec8d&size=600x338&format=webp",
            synopsis: "Rudeus and his companions tackle challenges that test their strength and resolve as adventurers.",
            downloadLink : ""
          },
          { 
            epiNum: 12,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/7a159500-341b-4a2d-a63f-b31c4b453a00?base_image_bucket_name=image_manager&base_image=3a2b7999-6c6a-4233-b514-7d26499d2218&size=600x338&format=webp",
            synopsis: "Rudeus meets a mysterious figure with extraordinary powers, opening new possibilities and dangers.",
            downloadLink : ""
          }
        ]
      }
    ]
  },

  // {
  //   "title": "Konosuba: God's Blessing on this Wonderful World!",
  //   genre: "Adventure",
  //   backgroundImage: "https://cdn.myanimelist.net/images/anime/8/78243.jpg",
  //   synopsis: "A man is reincarnated in a fantasy world after his tragic death, where he teams up with a group of misfits on hilarious adventures.",
  //   "seasons": [
  //     {
  //       "seasonNumber": 1,
  //       "episodes": [
  //         {
  //           epiNum: 1,
  //           "title": "This Self-Proclaimed Goddess and Reincarnation in Another World",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79672.jpg",
  //           synopsis: "Kazuma is reincarnated in a fantasy world with a goddess, where they begin their chaotic journey.",
  //           downloadLink: "https://example.com/download/konosuba-episode-1"
  //         },
  //         {
  //           epiNum: 2,
  //           "title": "The Great Chaos at the Crystal Tower",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79674.jpg",
  //           synopsis: "Kazuma and his party attempt to defeat a dangerous monster, only to end up in disastrous situations.",
  //           downloadLink: "https://example.com/download/konosuba-episode-2"
  //         },
  //         {
  //           epiNum: 3,
  //           "title": "Explosion Magic and a Battle of Wits",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79675.jpg",
  //           synopsis: "Megumin, the eccentric mage, introduces her explosive magic, and the group is caught in a tight situation.",
  //           downloadLink: "https://example.com/download/konosuba-episode-3"
  //         },
  //         {
  //           epiNum: 4,
  //           "title": "A Bet's a Bet!",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79676.jpg",
  //           synopsis: "Kazuma faces a tough challenge involving a bet with an unlikely opponent, leading to more misadventures.",
  //           downloadLink: "https://example.com/download/konosuba-episode-4"
  //         },
  //         {
  //           epiNum: 5,
  //           "title": "A Lively Reincarnation and a Blessed Adventure",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79677.jpg",
  //           synopsis: "The party embarks on a new quest, with Kazuma’s team facing more hilarious but dangerous situations.",
  //           downloadLink: "https://example.com/download/konosuba-episode-5"
  //         },
  //         {
  //           epiNum: 6,
  //           "title": "The Wonderful, Blessed Life of the Adventurer",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79678.jpg",
  //           synopsis: "Kazuma and the gang face challenges, including dealing with their dysfunctional team dynamics and strange foes.",
  //           downloadLink: "https://example.com/download/konosuba-episode-6"
  //         },
  //         {
  //           epiNum: 7,
  //           "title": "A Day in the City and the Adventurer's Guide",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79679.jpg",
  //           "synopsis": "Kazuma and his companions learn more about the city’s rules while participating in local events.",
  //           downloadLink: "https://example.com/download/konosuba-episode-7"
  //         },
  //         {
  //           epiNum: 8,
  //           "title": "Chasing the Lost Demon and the Ransacked Town",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79680.jpg",
  //           "synopsis": "The party goes after a demon that is terrorizing the town, leading to unexpected events.",
  //           downloadLink: "https://example.com/download/konosuba-episode-8"
  //         },
  //         {
  //           epiNum: 9,
  //           "title": "The Feast of the Gods and the Battle of Desperation",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79681.jpg",
  //           "synopsis": "The team faces a dangerous foe at the mercy of powerful gods, leading to a risky battle.",
  //           downloadLink: "https://example.com/download/konosuba-episode-9"
  //         },
  //         {
  //           epiNum: 10,
  //           "title": "A Little Princess and a Righteous Path",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79682.jpg",
  //           "synopsis": "Kazuma and his team deal with a princess who needs their help, but things go awry.",
  //           downloadLink: "https://example.com/download/konosuba-episode-10"
  //         },
  //         {
  //           epiNum: 11,
  //           "title": "The Final Battle and a New Start",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79683.jpg",
  //           "synopsis": "The party faces off against a major enemy in an epic battle, but the adventure is far from over.",
  //           downloadLink: "https://example.com/download/konosuba-episode-11"
  //         },
  //         {
  //           epiNum: 12,
  //           "title": "A Reincarnation that Will Never End",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79684.jpg",
  //           "synopsis": "The final episode of season 1 wraps up the first adventure with a hilarious and dramatic conclusion.",
  //           downloadLink: "https://example.com/download/konosuba-episode-12"
  //         }
  //       ]
  //     },
  //     {
  //       "seasonNumber": 2,
  //       "episodes": [
  //         {
  //           epiNum: 1,
  //           "title": "A New Life in the Country",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79685.jpg",
  //           "synopsis": "Kazuma's party faces a new challenge in the countryside, where they try to make a living.",
  //           downloadLink: "https://example.com/download/konosuba-s2-episode-1"
  //         },
  //         {
  //           epiNum: 2,
  //           "title": "A Duel to the Death in the City",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79686.jpg",
  //           "synopsis": "Kazuma faces off against a powerful foe in the city while the team deals with growing problems.",
  //           downloadLink: "https://example.com/download/konosuba-s2-episode-2"
  //         },
  //         {
  //           epiNum: 3,
  //           "title": "The World's Most Unusual Adventurer",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79687.jpg",
  //           "synopsis": "The team faces an odd situation as they encounter a new ally with strange powers.",
  //           downloadLink: "https://example.com/download/konosuba-s2-episode-3"
  //         },
  //         {
  //           epiNum: 4,
  //           "title": "A Beautiful Adventure and a Precious Memory",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79688.jpg",
  //           "synopsis": "Kazuma and the team take on a new quest that will test their skills and resolve.",
  //           downloadLink: "https://example.com/download/konosuba-s2-episode-4"
  //         },
  //         {
  //           epiNum: 5,
  //           "title": "Foolish Decisions and a New Rival",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79689.jpg",
  //           "synopsis": "Kazuma’s rivalry with a new adventurer leads to more challenges and conflicts.",
  //           downloadLink: "https://example.com/download/konosuba-s2-episode-5"
  //         },
  //         {
  //           epiNum: 6,
  //           "title": "The Road to Victory and the Fight for Glory",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79690.jpg",
  //           "synopsis": "Kazuma’s team faces a tough battle to save the day while navigating complicated new relationships.",
  //           downloadLink: "https://example.com/download/konosuba-s2-episode-6"
  //         },
  //         {
  //           epiNum: 7,
  //           "title": "Life as a Hero and the Battle of Desperation",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79691.jpg",
  //           "synopsis": "The team fights to protect the village from a great threat, risking everything.",
  //           downloadLink: "https://example.com/download/konosuba-s2-episode-7"
  //         },
  //         {
  //           epiNum: 8,
  //           "title": "A Dangerous Game and a Worthy Opponent",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79692.jpg",
  //           "synopsis": "The party faces off against a dangerous foe, learning some valuable lessons along the way.",
  //           downloadLink: "https://example.com/download/konosuba-s2-episode-8"
  //         },
  //         {
  //           epiNum: 9,
  //           "title": "The Final Battle and the Ultimate Challenge",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79693.jpg",
  //           "synopsis": "The team faces their greatest challenge yet, leading to a thrilling and emotional finale.",
  //           downloadLink: "https://example.com/download/konosuba-s2-episode-9"
  //         },
  //         {
  //           epiNum: 10,
  //           "title": "The Adventures Continue and New Beginnings",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79694.jpg",
  //           "synopsis": "The season ends with new adventures on the horizon for Kazuma and his party.",
  //           downloadLink: "https://example.com/download/konosuba-s2-episode-10"
  //         }
  //       ]
  //     },
  //     {
  //       "seasonNumber": 3,
  //       "episodes": [
  //         {
  //           epiNum: 1,
  //           "title": "A Return to Glory",
  //           backgroundImage: "https://cdn.myanimelist.net/images/anime/9/79695.jpg",
  //           "synopsis": "The story picks up with the team facing their most challenging yet hilarious adventure yet.",
  //           downloadLink: "https://example.com/download/konosuba-s3-episode-1"
  //         }
  //       ]
  //     }
  //   ]
  // },

  {
    title: "No Game No Life",
    genre: "Adventure",
    backgroundImage: "https://img.hulu.com/user/v3/artwork/6e4dd558-5c67-465f-be02-abc5226900bb?base_image_bucket_name=image_manager&base_image=d02d15a0-74ca-4c25-9292-8ec677a6cfad&size=1024x576&format=webp",
    synopsis: "Sora and Shiro, an undefeated sibling duo of gamers, are transported to a mysterious world where everything is decided by games. They aim to defeat the enigmatic being, Tet, and conquer the world.",
    seasons: [
      {
        seasonNumber: 1,
        backgroundImage : "https://img.hulu.com/user/v3/artwork/efc54025-5a45-4a86-bc92-1dc8a32c948a?base_image_bucket_name=image_manager&base_image=ee54cd16-8695-49e0-a50c-30ae3aa18435&size=600x338&format=webp",
        episodes: [
          {
            epiNum: 1,
  
            backgroundImage: "https://img.hulu.com/user/v3/artwork/efc54025-5a45-4a86-bc92-1dc8a32c948a?base_image_bucket_name=image_manager&base_image=ee54cd16-8695-49e0-a50c-30ae3aa18435&size=600x338&format=webp",
            "synopsis": "Sora and Shiro, two brilliant siblings, are invited to a world of games by a mysterious being, Tet. They accept the challenge to beat Tet in a game of chess and win a place in this new world."
          },
          {
            epiNum: 2,

            backgroundImage: "https://img2.hulu.com/user/v3/artwork/80d70ca0-1d4f-4a1d-bc3b-161af32e6e62?base_image_bucket_name=image_manager&base_image=7046a3a6-f4a7-458e-8cf6-de43c4bf9ccd&size=600x338&format=webp",
            "synopsis": "The siblings take on the challenge of defeating their first opponent, the Eastern Federation, in a game of poker, aiming to prove their gaming skills and superiority."
          },
          {
            epiNum: 3,

            backgroundImage: "https://img2.hulu.com/user/v3/artwork/80d70ca0-1d4f-4a1d-bc3b-161af32e6e62?base_image_bucket_name=image_manager&base_image=7046a3a6-f4a7-458e-8cf6-de43c4bf9ccd&size=600x338&format=webp",
            "synopsis": "Sora and Shiro enter their first serious game in the world of Disboard, against the Eastern Federation. The siblings must outsmart the Federation to gain control over the first piece of land."
          },
          {
            epiNum: 4,
            backgroundImage: "https://img2.hulu.com/user/v3/artwork/80d70ca0-1d4f-4a1d-bc3b-161af32e6e62?base_image_bucket_name=image_manager&base_image=7046a3a6-f4a7-458e-8cf6-de43c4bf9ccd&size=600x338&format=webp",
            "synopsis": "Sora and Shiro aim to beat the Eastern Federation’s Chess King, and they realize their opponents are more dangerous than they first thought."
          },
          {
            epiNum: 5,

            backgroundImage: "https://img2.hulu.com/user/v3/artwork/80d70ca0-1d4f-4a1d-bc3b-161af32e6e62?base_image_bucket_name=image_manager&base_image=7046a3a6-f4a7-458e-8cf6-de43c4bf9ccd&size=600x338&format=webp",
            "synopsis": "Sora and Shiro face new challenges in the world of Disboard, encountering strange characters and power struggles, all while trying to stay ahead of their rivals."
          },
          {
            epiNum: 6,
   
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/467805ea-da6e-4448-986e-0fe60d30a9af?base_image_bucket_name=image_manager&base_image=febaaa44-86ab-4443-b743-b037d1598df1&size=600x338&format=webp",
            "synopsis": "The siblings take on a new, powerful opponent in a game of strategy and wit, testing their skills and determination as gamers."
          },
          {
            epiNum: 7,
   
            backgroundImage: "https://img4.hulu.com/user/v3/artwork/467805ea-da6e-4448-986e-0fe60d30a9af?base_image_bucket_name=image_manager&base_image=febaaa44-86ab-4443-b743-b037d1598df1&size=600x338&format=webp",
            "synopsis": "Sora and Shiro face yet another tough challenge, proving that they are indeed unbeatable as they face stronger and more cunning enemies."
          },
          {
            epiNum: 8,

            backgroundImage: "https://img.hulu.com/user/v3/artwork/5f00e53d-07a5-4762-abd2-d569835a4715?base_image_bucket_name=image_manager&base_image=16867095-8190-4abc-9bb9-6a3f7f7913a8&size=600x338&format=webp",
            "synopsis": "The siblings come face-to-face with Tet in an epic game that will determine their future in the world of Disboard, leading to a life-changing victory or defeat."
          }
        ]
      }
    ]
  }
  

]

export default movieData;
