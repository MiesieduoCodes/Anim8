// src/Trivias.js
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingMusicButton from '../FloatingMusicButton';

const Trivias = () => {
  const triviaData = {
    "Incredibles 2": [
      "Evelyn Deavor's name is a pun on 'evil endeavor,' foreshadowing her villainous side.",
      "This was Pixar's fourth follow-up film where the protagonist and side character switch roles, with Mrs. Incredible/Elastigirl taking on the role of the protagonist from Mr. Incredible.",
      "The fourteen-year gap between the first film and this follow-up was the longest waiting time between a Disney/Pixar movie and its follow-up.",
      "As of 2017, this movie holds the record for the most viewed animated teaser trailer of all time, with one hundred thirteen million views in the opening week.",
      "When Mr. Incredible is drinking coffee while learning Dash's math homework, he uses an Insuricare coffee mug, the company for which he worked in The Incredibles (2004).",
      "This was Pixar's fourth film to have a female protagonist, after Brave (2012), Inside Out (2015), and Finding Dory (2016).",
      "Just before Evelyn Deavor is revealed as the villain, she modifies her voice while drinking, hinting at her alter ego, Screenslaver.",
      "Winston says he bought his house from an eccentric billionaire, resembling Tony Stark's Malibu home in Iron Man (2008).",
      "A government device with a red beam of light erases memories, similar to the Neuralyzer used in Men in Black (1997).",
      "Frozone's wife Honey does not appear on-screen, only heard yelling at him off camera.",
      "Jack-Jack has seventeen superpowers, the most for any superhero in the movie."
    ],
    "Toy Story 4": [
      "When Bo Peep gets taken away, the car driven by the new owner has the license plate RMRF97, referencing a near loss of Toy Story 2.",
      "Duke Caboom first appeared in Jack-Jack's crib in Incredibles 2 (2018).",
      "Bing Bong's rocket from Inside Out (2015) and Ellie and Carl's house from Up (2009) can be seen in an antique shop.",
      "Tom Hanks, Tim Allen, Wallace Shawn, John Ratzenberger, Debi Derryberry/Jeff Pidgeon, and Frank Welker are the only cast members to appear in all four Toy Story films.",
      "Each successive Toy Story film is 11 minutes longer than its predecessor, except for the fourth film.",
      "Toy Story 4 is the only film in the franchise that does not have a villain.",
      "Remains the only Toy Story film that doesn't feature or mention the Green Army Men.",
      "When Duke does his big jump at the end, he does it with his eyes closed, referencing Buzz's attempt to fly.",
      "This is the third Toy Story film where a main character loses an arm.",
      "When Duke hypes himself up, the Canadian national anthem 'O Canada' can be heard, likely a nod to his voice actor Keanu Reeves.",
      "This is Pixar's first film to win the Academy Award for Best Animated Feature since Coco (2017)."
    ],
    "Toy Story 3": [
      "There are 302 characters in Toy Story 3, the most of any Pixar film.",
      "Rex gets his wish for a new dinosaur in Toy Story 3 when Bonnie has Trixie.",
      "Mr. Potato Head was originally just a set of eyeballs and hands for real vegetables.",
      "Andy's bedroom door has a sign that says 'Newt Xing,' referencing a canceled Pixar film.",
      "Big Baby is based on a doll owned by Lee Unkrich's daughter.",
      "Andy's calendar features Snot Rod from Cars (2006).",
      "When Ms. Davis parks at Sunnyside Daycare, you can see Van from Cars next to her car.",
      "The sanitation worker in the film is Sid, now all grown up.",
      "Set approximately 10 years after Toy Story 2.",
      "First sequel to win the Academy Award for Best Animated Feature.",
      "The first Toy Story film without a human antagonist, though Sid briefly appears."
    ],
    "Finding Dory": [
      "Dory is the most liked character on Facebook from any Disney or Pixar film.",
      "The license plate on the truck is CALA113, referencing Cal Arts.",
      "Characters from other Pixar films make cameos as visitors to the Marine Institute.",
      "The Pizza Planet truck appears in a wrecked state in the film.",
      "Ellen DeGeneres revealed the first trailer for Finding Dory on her show.",
      "Most characters in this movie have a handicap or disability.",
      "Finding Dory became the highest grossing animated film in American box office history.",
      "Features fewer characters without American accents than Finding Nemo.",
      "Dory talks in her sleep, referencing Fix-It Felix.",
      "One of the tanks says 2015, referencing the film's release date.",
      "Hank is the third Pixar character with camouflage ability."
    ],
    "Kung Fu Panda": [
      "The character Po was inspired by a panda that was raised in a zoo in China.",
      "Jackie Chan was originally approached to voice Po but declined the role.",
      "The film's animation team studied real martial arts experts to create realistic fight scenes.",
      "The movie was nominated for an Academy Award for Best Animated Feature.",
      "Po's father, Mr. Ping, is a goose, while Po is a panda, highlighting the film's themes of family and identity."
    ],
    "Frozen": [
      "The song 'Let It Go' won the Academy Award for Best Original Song in 2014.",
      "Elsa was originally intended to be the villain of the story.",
      "The film was inspired by Hans Christian Andersen's fairy tale 'The Snow Queen.'",
      "Frozen became the highest-grossing animated film at the time of its release.",
      "The character Olaf was originally going to be a villain."
    ],
    "How to Train Your Dragon": [
      "The film was based on the book series by Cressida Cowell.",
      "Toothless, the dragon, was designed to be a mix between a cat and a dragon.",
      "The film's animators studied the movements of real animals to create realistic dragon behavior.",
      "How to Train Your Dragon won several awards, including the Academy Award nomination for Best Animated Feature.",
      "The franchise includes two sequels and a TV series."
    ],
    "Spider-Man: Into the Spider-Verse": [
      "The film features over 140 characters, with 40 of them being unique Spider-People.",
      "It was the first animated film to win the Academy Award for Best Animated Feature under the new category.",
      "The animation style combines traditional 2D comic book art with 3D animation.",
      "Shameik Moore, who voices Miles Morales, also contributed to the film's soundtrack.",
      "The film was praised for its representation of a diverse cast of characters."
    ],
    "Zootopia": [
      "The film explores themes of prejudice and stereotypes through its anthropomorphic animal characters.",
      "Zootopia's design was inspired by real-world cities like San Francisco and Tokyo.",
      "The character Judy Hopps is the first rabbit police officer in the city of Zootopia.",
      "The film won the Academy Award for Best Animated Feature in 2017.",
      "Zootopia's creative team visited several zoos to study animal behavior and habitats."
    ],
    "Big Hero 6": [
      "The film is loosely based on the Marvel comic of the same name.",
      "Baymax, the inflatable healthcare companion, was inspired by the concept of a health care worker.",
      "Big Hero 6 won the Academy Award for Best Animated Feature in 2015.",
      "The film features a mix of Eastern and Western animation styles.",
      "The character design for Baymax was influenced by the idea of a 'cuddle buddy.'"
    ],
    "The Mitchells vs. The Machines": [
      "The film was originally titled 'Connected' before its release on Netflix.",
      "It features a unique animation style that combines 2D and 3D techniques.",
      "The movie addresses themes of family dynamics and technology's impact on relationships.",
      "The character of Katie Mitchell was inspired by director Mike Rianda's own experiences growing up.",
      "This film received critical acclaim for its humor and heartwarming story."
    ],
    "DC: Batman: Mask of the Phantasm": [
      "This film was originally intended to be a direct-to-video release but was released in theaters due to positive early screenings.",
      "It features Mark Hamill as the voice of the Joker, a role he is renowned for.",
      "The animation style is heavily influenced by film noir, enhancing the film's darker themes.",
      "It explores Bruce Wayne's past and his motivations for becoming Batman.",
      "The film is often regarded as one of the best animated superhero films of all time."
    ],
  
  };

  return (
   <div className="main-content pt-24 min-h-screen bg-gradient-to-br from-purple-200 via-blue-300 to-pink-300 relative overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 bg-trivia-pattern opacity-10"></div>
      <div
        className="relative bg-cover bg-center h-80 md:h-96 lg:h-[32rem]"
        style={{
          backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ee4200b4-1ca8-4ef7-9ccb-1b66359eb247/dfzdlcd-c0e41887-185c-4b65-a24f-e88ba60ee8f4.jpg/v1/fill/w_1192,h_670,q_70,strp/dreamworks_wallpaper_by_maxtop9002_dfzdlcd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZWU0MjAwYjQtMWNhOC00ZWY3LTljY2ItMWI2NjM1OWViMjQ3XC9kZnpkbGNkLWMwZTQxODg3LTE4NWMtNGI2NS1hMjRmLWU4OGJhNjBlZThmNC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MmZD7VVsp2Fx8uii0TWUCo0J7Q_JEMyMLnEGYo2twQM')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 flex flex-col justify-center items-center p-6">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold text-center">
            Animation Trivia
          </h1>
          <p className="text-white text-xl md:text-2xl mt-4 text-center">
            Discover Hidden Facts Behind Your Favorite Films
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 p-8 md:p-12">
        {Object.entries(triviaData).map(([movie, trivias]) => (
          <div
            key={movie}
            className="relative group bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-transform transform hover:-rotate-1 hover:scale-105"
          >
            <div className="p-5 border-b border-gray-200 bg-blue-600 text-white font-bold text-2xl">
              {movie}
            </div>
            <div className="p-6 space-y-3">
              {trivias.map((trivia, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-blue-100 transition-colors duration-300 transform group-hover:rotate-1"
                >
                  <p className="text-gray-700 text-sm">{trivia}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
      <FloatingMusicButton />
    </div>

  );
};

export default Trivias;