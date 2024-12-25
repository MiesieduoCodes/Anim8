import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer" // Import the FloatingMusicButton

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Anim8?",
      answer: "Anim8 is a platform that offers high-quality animated films and anime for animation enthusiasts. We focus on providing a seamless and enjoyable experience, with data-efficient downloads and a curated selection of films across diverse genres."
    },
    {
      question: "How do I download animations from Anim8?",
      answer: "You can download animations by visiting the respective movie or anime page and clicking the download button. We offer both App Store and Google Play options for downloading the Anim8 app to ensure the best experience."
    },
    {
      question: "How often is the content updated?",
      answer: "We regularly update our library with new releases and exclusive content to keep our users entertained. Follow our social media channels for updates on new film releases."
    },
    {
      question: "Can I suggest content to be added to Anim8?",
      answer: "Yes! We value community input. You can share your suggestions for films or anime through our contact form or social media channels, and we will consider adding them to the platform."
    },
    {
      question: "What are the community features?",
      answer: "Anim8 offers community features like Instagram, Facebook, and WhatsApp integration, where users can discuss content, share their thoughts, and stay updated with our latest news."
    },
    {
      question: "How can I contact customer support?",
      answer: "If you need assistance, you can contact our customer support through the 'Contact' page. We are available via email, phone, and our social media channels."
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
