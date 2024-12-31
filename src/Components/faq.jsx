import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"; // Import the FloatingMusicButton

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What Is Anim8?",
      answer:
        "Anim8.com.ng is a pay-to-use blogsite that offers its users access to downloadable top-rated animation movies as well as anime series, movies, and comics.",
    },
    {
      question: "Is Anim8 A Streaming Platform?",
      answer:
        "Anim8.com.ng is currently not an online streaming platform as all contents can be downloaded directly to the phone storage of its users.",
    },
    {
      question: "What Does Anim8 Offer?",
      answer:
        "Anim8.com.ng currently is designed to offer top-rated animation movies, series, and movies, as well as comics in downloadable MP4 format, with all animated movies on its platform bearing a 5.0 and above rating.",
    },
    {
      question: "What type of Animation movies can I find on Anim8?",
      answer:
        "Unlike other movie download sites, Anim8.com.ng offers just top-rated animation movie content with its library consisting only of top-rated animated feature movies from Disney, Pixar, Illumination, DreamWorks, and Netflix.",
    },
    {
      question: "Does Anim8 offer Anime Contents?",
      answer:
        "Yes! Anim8.com.ng offers both anime series and anime movies, with all being top-rated only.",
    },
    {
      question: "What Genre of Anime Series can I find on Anim8?",
      answer:
        "Currently, Anim8.com.ng offers anime series in the genres of Romance, Action, Adventure, and Mystery.",
    },
    {
      question: "What era of Anime series can I find on Anim8?",
      answer:
        "Anim8.com.ng offers downloadable top-rated anime series produced from 2010 till present.",
    },
    {
      question: "What other animated contents can I find on Anim8?",
      answer:
        "Anim8.com.ng offers full movie collections ranging from Scooby Doo, Barbie Adventures, Pokemon, etc., which users can get by requesting, subject to agreeing with terms and conditions policies.",
    },
    {
      question: "Why Should I use Anim8?",
      answer:
        "Anim8.com.ng offers an easy-to-understand user interface, eliminates constant decoy and intrusive ads users experience while using other download sites, and also renders value for data usage of users in terms of downloads, as all film content is mainly top-rated with a 5.0 rating and above, giving users a clear knowledge of the best animated films to download.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-cover bg-slate-500 bg-center text-white py-20 px-6">
        <div className="bg-black bg-opacity-50 py-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-10">Frequently Asked Questions</h1>

          <div className="space-y-8">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-md">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left text-2xl font-semibold focus:outline-none"
                >
                  <div className="flex justify-between items-center">
                    {faq.question}
                    <span className="ml-2">
                      {openIndex === index ? (
                        <svg
                          className="w-6 h-6 text-yellow-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6 text-yellow-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      )}
                    </span>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openIndex === index ? "max-h-full mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-lg text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Faq;
