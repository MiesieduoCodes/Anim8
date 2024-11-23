const movieData = [
    {
      title: "Justice League Unlimited",

      backgroundImage: "https://example.com/images/justice-league.jpg",
      synopsis: "The Justice League faces off against a host of villains while dealing with personal challenges and alliances.",
      seasons: [
        {
          seasonNumber: 1,
          backgroundImage: "https://example.com/images/justice-league-s1.jpg",
          episodes: [
            {
              epiNum: 1,
              backgroundImage: "https://example.com/images/justice-league-s1e1.jpg",
              synopsis: "The League battles a new enemy threatening global destruction."
            },
            {
              epiNum: 2,
              backgroundImage: "https://example.com/images/justice-league-s1e2.jpg",
              synopsis: "A mysterious figure manipulates the League into conflict with an alien force."
            },
            {
              epiNum: 3,
              backgroundImage: "https://example.com/images/justice-league-s1e3.jpg",
              synopsis: "The League uncovers a secret organization with sinister plans."
            }
          ]
        },
        {
          seasonNumber: 2,
          backgroundImage: "https://example.com/images/justice-league-s2.jpg",
          episodes: [
            {
              epiNum: 1,
              backgroundImage: "https://example.com/images/justice-league-s2e1.jpg",
              synopsis: "A cosmic threat forces the League to join forces with unlikely allies."
            },
            {
              epiNum: 2,
              backgroundImage: "https://example.com/images/justice-league-s2e2.jpg",
              synopsis: "A rift in the League's ranks jeopardizes their mission."
            }
          ]
        }
      ]
    },
    {
      title: "Avengers Assemble",

      backgroundImage: "https://example.com/images/avengers.jpg",
      synopsis: "Earth's Mightiest Heroes come together to save the world from various threats.",
      seasons: [
        {
          seasonNumber: 1,
          backgroundImage: "https://example.com/images/avengers-s1.jpg",
          episodes: [
            {
              epiNum: 1,
              backgroundImage: "https://example.com/images/avengers-s1e1.jpg",
              synopsis: "The Avengers team up to defeat a formidable foe threatening global peace."
            },
            {
              epiNum: 2,
              backgroundImage: "https://example.com/images/avengers-s1e2.jpg",
              synopsis: "The team faces internal struggles while fighting a powerful villain."
            },
            {
              epiNum: 3,
              backgroundImage: "https://example.com/images/avengers-s1e3.jpg",
              synopsis: "A shocking betrayal shakes the team to its core."
            }
          ]
        },
        {
          seasonNumber: 2,
          backgroundImage: "https://example.com/images/avengers-s2.jpg",
          episodes: [
            {
              epiNum: 1,
              backgroundImage: "https://example.com/images/avengers-s2e1.jpg",
              synopsis: "The Avengers encounter a new villain with a dangerous agenda."
            },
            {
              epiNum: 2,
              backgroundImage: "https://example.com/images/avengers-s2e2.jpg",
              synopsis: "An intergalactic mission tests the team's unity."
            }
          ]
        }
      ]
    },
    {
      title: "Scooby-Doo, Where Are You!",
      backgroundImage: "https://example.com/images/scooby-doo.jpg",
      synopsis: "Scooby-Doo and the gang solve mysteries involving supposedly supernatural creatures.",
      seasons: [
        {
          seasonNumber: 1,
          backgroundImage: "https://example.com/images/scooby-doo-s1.jpg",
          episodes: [
            {
              epiNum: 1,
              backgroundImage: "https://example.com/images/scooby-doo-s1e1.jpg",
              synopsis: "The gang investigates a haunted mansion."
            },
            {
              epiNum: 2,
              backgroundImage: "https://example.com/images/scooby-doo-s1e2.jpg",
              synopsis: "A ghostly pirate terrorizes a small coastal town."
            },
            {
              epiNum: 3,
              backgroundImage: "https://example.com/images/scooby-doo-s1e3.jpg",
              synopsis: "A mysterious creature stalks an abandoned airfield."
            }
          ]
        },
        {
          seasonNumber: 2,
          backgroundImage: "https://example.com/images/scooby-doo-s2.jpg",
          episodes: [
            {
              epiNum: 1,
              backgroundImage: "https://example.com/images/scooby-doo-s2e1.jpg",
              synopsis: "The gang faces a phantom at a local carnival."
            },
            {
              epiNum: 2,
              backgroundImage: "https://example.com/images/scooby-doo-s2e2.jpg",
              synopsis: "A haunted lighthouse hides a surprising secret."
            }
          ]
        }
      ]
    },
    {
      title: "Barbie: Dreamhouse Adventures",

      backgroundImage: "https://example.com/images/barbie.jpg",
      synopsis: "Barbie and her friends embark on exciting adventures and solve everyday challenges.",
      seasons: [
        {
          seasonNumber: 1,
          backgroundImage: "https://example.com/images/barbie-s1.jpg",
          episodes: [
            {
              epiNum: 1,
              backgroundImage: "https://example.com/images/barbie-s1e1.jpg",
              synopsis: "Barbie and her friends organize a charity event at the Dreamhouse."
            },
            {
              epiNum: 2,
              backgroundImage: "https://example.com/images/barbie-s1e2.jpg",
              synopsis: "A mix-up leads to hilarious misunderstandings as Barbie and her friends plan a party."
            },
            {
              epiNum: 3,
              backgroundImage: "https://example.com/images/barbie-s1e3.jpg",
              synopsis: "Barbie helps a friend achieve their dream in unexpected ways."
            }
          ]
        },
        {
          seasonNumber: 2,
          backgroundImage: "https://example.com/images/barbie-s2.jpg",
          episodes: [
            {
              epiNum: 1,
              backgroundImage: "https://example.com/images/barbie-s2e1.jpg",
              synopsis: "Barbie and her sisters discover a hidden treasure."
            },
            {
              epiNum: 2,
              backgroundImage: "https://example.com/images/barbie-s2e2.jpg",
              synopsis: "A surprising new visitor shakes up life at the Dreamhouse."
            }
          ]
        }
      ]
    },
    {
      title: "Teen Titans",
  
      backgroundImage: "https://example.com/images/teen-titans.jpg",
      synopsis: "The Teen Titans band together to protect their city from villains while navigating their own lives.",
      seasons: [
        {
          seasonNumber: 1,
          backgroundImage: "https://example.com/images/teen-titans-s1.jpg",
          episodes: [
            {
              epiNum: 1,
              backgroundImage: "https://example.com/images/teen-titans-s1e1.jpg",
              synopsis: "The Titans face off against a powerful foe threatening their city."
            },
            {
              epiNum: 2,
              backgroundImage: "https://example.com/images/teen-titans-s1e2.jpg",
              synopsis: "A strange signal leads the Titans to uncover a sinister plot."
            }
          ]
        }
      ]
    },
];
export default movieData;