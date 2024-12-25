// src/Trivias.js
import Navbar from "./Navbar";
import Footer from "./Footer";
 
import triviaData from "../Constants/triviasdata";
import { motion } from "framer-motion";

const Trivias = () => {

  return (
    <div
      className="main-content pt-24 min-h-screen bg-gradient-to-br from-purple-200 via-blue-300 to-pink-300 relative overflow-hidden"
    >
      <Navbar />

      {/* Background and Header */}
      <div className="absolute inset-0 bg-trivia-pattern opacity-10"></div>
      <motion.div
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
      </motion.div>

      {/* Trivia Section */}
      <motion.div
        className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 p-8 md:p-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
        }}
      >
        {Object.entries(triviaData).map(([movie, trivias]) => (
          <motion.div
            key={movie}
            className="relative group bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-transform transform hover:-rotate-1 hover:scale-105"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
          >
            <div className="p-5 border-b border-gray-200 bg-blue-600 text-white font-bold text-2xl">
              {movie}
            </div>
            <div className="p-6 space-y-3">
              {trivias.map((trivia, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-300 p-4 rounded-lg shadow-md hover:bg-blue-300 transition-colors duration-300 transform group-hover:rotate-1"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                >
                  <p className="text-gray-700 text-sm leading-relaxed">{trivia}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Footer />
 
    </div>
  );
};

export default Trivias;
