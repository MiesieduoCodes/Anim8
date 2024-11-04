const movieData = [
  {
    title: "Your Lie in April",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/264/75/737/anime-sunset-piano-clouds-wallpaper-preview.jpg",
    synopsis: "A pianist rediscovers his passion for music and love through a violinist he meets.",
    seasons: [
      {
        seasonNumber: 1,
        episodes: Array.from({ length: 22 }, (_, i) => ({
          epiNum: i + 1,
          description: `Episode ${i + 1} description for "Your Lie in April" – pivotal events and emotional development in Kosei’s journey.`,
          backgroundImage: "https://wallpapercave.com/wp/wp5536141.jpg"
        }))
      }
    ]
  },
  {
    title: "Toradora!",
    backgroundImage: "https://eyeforaneyepiece.wordpress.com/wp-content/uploads/2013/09/konachan-com-42979-aisaka_taiga-kawashima_ami-kitamura_yusaku-kushieda_minori-takasu_ryuuji-toradora.jpg?w=625&h=400",
    synopsis: "Two high school students form an unlikely friendship to help each other pursue their crushes.",
    seasons: [
      {
        seasonNumber: 1,
        episodes: Array.from({ length: 25 }, (_, i) => ({
          epiNum: i + 1,
          description: `Episode ${i + 1} of "Toradora!" – Ryuji and Taiga’s unique friendship blossoms as they help each other with their crushes.`,
          backgroundImage: "https://wallpapercave.com/wp/wp2591514.jpg"
        }))
      }
    ]
  },
  {
    title: "Kaguya-sama: Love Is War",
    backgroundImage: "https://thecambridgegeek.com/posts/2019/03/20190301-a.jpg",
    synopsis: "A battle of wits and romance between two high school geniuses.",
    seasons: [
      {
        seasonNumber: 1,
        episodes: Array.from({ length: 12 }, (_, i) => ({
          epiNum: i + 1,
          description: `Episode ${i + 1} of "Kaguya-sama: Love Is War" – a tactical mind game between Kaguya and Miyuki unfolds.`,
          backgroundImage: "https://wallpapercave.com/wp/wp6306544.jpg"
        }))
      },
      {
        seasonNumber: 2,
        episodes: Array.from({ length: 12 }, (_, i) => ({
          epiNum: i + 1,
          description: `Episode ${i + 1} of "Kaguya-sama: Love Is War" – season 2’s mind games intensify as emotions grow.`,
          backgroundImage: "https://wallpapercave.com/wp/wp6651540.jpg"
        }))
      },
      {
        seasonNumber: 3,
        episodes: Array.from({ length: 13 }, (_, i) => ({
          epiNum: i + 1,
          description: `Episode ${i + 1} of "Kaguya-sama: Love Is War" – the romantic tension between Kaguya and Miyuki reaches new heights.`,
          backgroundImage: "https://wallpapercave.com/wp/wp10887916.jpg"
        }))
      }
    ]
  },
  {
    title: "Horimiya",
    backgroundImage: "https://i0.wp.com/beneaththetangles.com/wp-content/uploads/2023/07/horimiya-the-missing-pieces-ep-1c.png?resize=1400%2C400&ssl=1",
    synopsis: "A sweet high school romance that reveals the unexpected sides of two classmates.",
    seasons: [
      {
        seasonNumber: 1,
        episodes: Array.from({ length: 13 }, (_, i) => ({
          epiNum: i + 1,
          description: `Episode ${i + 1} of "Horimiya" – Hori and Miyamura explore each other's hidden sides.`,
          backgroundImage: "https://wallpapercave.com/wp/wp9398544.jpg"
        }))
      }
    ]
  },
  {
    title: "Ao Haru Ride",
    backgroundImage: "https://faos.home.blog/wp-content/uploads/2020/10/ao-haru-ride-futaba-friends.jpg?w=1024",
    synopsis: "A girl reunites with her first love and faces the changes time has brought them.",
    seasons: [
      {
        seasonNumber: 1,
        episodes: Array.from({ length: 12 }, (_, i) => ({
          epiNum: i + 1,
          description: `Episode ${i + 1} of "Ao Haru Ride" – Futaba reconnects with her old friend Kou.`,
          backgroundImage: "https://wallpapercave.com/wp/wp5192585.jpg"
        }))
      }
    ]
  },
  {
    title: "Darwin's Game",
    backgroundImage: "https://thespookyredhead.wordpress.com/wp-content/uploads/2022/02/darwins-game.jpg?w=1024",
    synopsis: "A high-stakes survival game in which players must fight or die.",
    seasons: [
      {
        seasonNumber: 1,
        episodes: Array.from({ length: 11 }, (_, i) => ({
          epiNum: i + 1,
          description: `Episode ${i + 1} of "Darwin's Game" – Kaname faces deadly challenges in the game.`,
          backgroundImage: "https://wallpapercave.com/wp/wp6764166.jpg"
        }))
      }
    ]
  },
  {
    title: "One Punch Man",
    backgroundImage: "https://images.thedirect.com/media/article_full/one-punch-man-season-3-release.jpg?imgeng=/cmpr_60/w_auto",
    synopsis: "A hero who can defeat any opponent with a single punch searches for meaning.",
    seasons: [
      {
        seasonNumber: 1,
        episodes: Array.from({ length: 12 }, (_, i) => ({
          epiNum: i + 1,
          description: `Episode ${i + 1} of "One Punch Man" – Saitama’s search for a worthy opponent begins.`,
          backgroundImage: "https://wallpapercave.com/wp/wp6422561.jpg"
        }))
      },
      {
        seasonNumber: 2,
        episodes: Array.from({ length: 12 }, (_, i) => ({
          epiNum: i + 1,
          description: `Episode ${i + 1} of "One Punch Man" – Saitama continues to face new challenges.`,
          backgroundImage: "https://wallpapercave.com/wp/wp5120175.jpg"
        }))
      }
    ]
  },
  {
    title: "Mob Psycho 100",
    backgroundImage: "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/10/mob-psycho-100-III-mob-and-dimple.jpg?resize=696%2C392&ssl=1",
    synopsis: "A powerful psychic faces both supernatural and everyday challenges.",
    seasons: [
      {
        seasonNumber: 1,
        episodes: Array.from({ length: 12 }, (_, i) => ({
          epiNum: i + 1,
          description: `Episode ${i + 1} of "Mob Psycho 100" – Mob learns to control his psychic powers.`,
          backgroundImage: "https://wallpapercave.com/wp/wp2178326.jpg"
        }))
      },
      {
        seasonNumber: 2,
        episodes: Array.from({ length: 13 }, (_, i) => ({
          epiNum: i + 1,
          description: `Episode ${i + 1} of "Mob Psycho 100" – Mob’s powers evolve as he faces new threats.`,
          backgroundImage: "https://wallpapercave.com/wp/wp4012544.jpg"
        }))
      },
      {
        seasonNumber: 3,
        episodes: Array.from({ length: 12 }, (_, i) => ({
          epiNum: i + 1,
          description: `Episode ${i + 1} of "Mob Psycho 100" – Mob’s journey reaches its peak in this season.`,
          backgroundImage: "https://wallpapercave.com/wp/wp4012552.jpg"
        }))
      }
    ]
  },
  {
    title: "Fate/Zero",
    backgroundImage: "https://images.squarespace-cdn.com/content/v1/52a28c62e4b0b9264e00c55a/1433095857903-JZCGB06DEUHLVEOP1063/upload.jpeg?format=1500w",
    synopsis: "Seven mages summon heroic spirits to fight in a war for the Holy Grail.",
    seasons: [
      {
        seasonNumber: 1,
        episodes: Array.from({ length: 13 }, (_, i) => ({
          epiNum: i + 1,
          description: `Episode ${i + 1} of "Fate/Zero" – The epic Holy Grail War begins.`,
          backgroundImage: "https://wallpapercave.com/wp/wp6316360.jpg"
        }))
      },
      {
        seasonNumber: 2,
        episodes: Array.from({ length: 12 }, (_, i) => ({
          epiNum: i + 1,
          description: `Episode ${i + 1} of "Fate/Zero" – The war intensifies as alliances form and betrayals emerge.`,
          backgroundImage: "https://wallpapercave.com/wp/wp6764188.jpg"
        }))
      }
    ]
  }
];
export default movieData;