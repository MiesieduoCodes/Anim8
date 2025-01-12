import { useState, useEffect, useContext } from "react";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { UserContext } from "./UserContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import collections from "../Constants/Animedata";

const AnimeFilms = () => {
  const [animeCollections, setAnimeCollections] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    setAnimeCollections(collections);
  }, []);

  const handleDownload = (item) => {
    if (!user) {
      alert("Please sign in to download.");
    } else {
      const element = document.createElement("a");
      const fileData = `Title: ${item.title}\nRating: ${item.rating}`;
      const blob = new Blob([fileData], { type: "text/plain" });
      const url = URL.createObjectURL(blob);

      element.href = url;
      element.download = `${item.title}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-content pt-24">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={0}
          slidesPerView={1}
        >
          {/* Add Swiper slides here */}
        </Swiper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {animeCollections[0]?.items.map((item, index) => (
            <div key={index} className="relative">
              <h3>{item.title}</h3>
              <button
                onClick={() => handleDownload(item)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AnimeFilms;
