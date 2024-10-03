import Navbar from "./Navbar";
import { MdSkipNext } from "react-icons/md";
const ToonedIn = () => {
  return (
    <div>
        <Navbar />
        <div className="bg-black flex p-[20px] h-full mt-[200px] text-white justify-between flex-col">
          <div className="flex gap-8 flex-col">
          <h2 className="text-2xl">Lets Get You</h2>
          <h1 className="text-6xl">&ldquo;In-Toon&ldquo;</h1>
          <button className="w-full md:w-[190px] h-[40px] p-3 bg-yellow-500 flex justify-center items-center text-white rounded-full transition-transform duration-300 hover:scale-105">
                  <MdSkipNext className="text-2xl" /> Watch All Trailers
                </button>
          </div>
        </div>


        <section className="w-full h-full ">

        </section>
    </div>
  )
}

export default ToonedIn