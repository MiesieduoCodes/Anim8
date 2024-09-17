import { motion} from "framer-motion"; 
import Navbar from "../Components/Navbar";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
const TalkToUs = () => {
  return (
    <div>
        <Navbar/>
        <div className="relative flex inset-0 z-10 items-center justify-center h-full bg-black bg-opacity-50">
          <main className="p-8">
            <motion.h1
              whileInView={{ opacity: 1, x: 1 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="text-3xl text-center text-white font-bold"
            >
              Connect With Anim8 On: 
            </motion.h1>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
           <a href="https://www.linkedin.com/in/goofyphotography209/"> <FaLinkedin /></a>
            <a href="https://github.com/MiesieduoCodes"><FaGithub /></a>
            <a href="https://www.instagram.com/goofy_did_this/"><FaInstagram /></a>
            <a href=""><FaSquareXTwitter /></a>
            <a href="https://api.whatsapp.com/send/?phone=2349060462206&text&type=phone_number&app_absent=0"><FaWhatsapp /></a>
        </div>
        
          </main>
        </div>
    </div>
  )
}

export default TalkToUs