import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from "./Navbar";
import { FaHeart, FaShare, FaPlus, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaTimes } from 'react-icons/fa';
import initialTrailersData from "../Constants/Trailersdata";

const ReelsPage = () => {
  const videoRefs = useRef([]);
  const [trailersData] = useState(initialTrailersData);
  const [likes, setLikes] = useState(new Array(initialTrailersData.length).fill(false));
  const [favorites, setFavorites] = useState(new Array(initialTrailersData.length).fill(false));
  const [sharePopupVisible, setSharePopupVisible] = useState(false);
  const [currentTrailer, setCurrentTrailer] = useState(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    videoRefs.current.forEach(video => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      videoRefs.current.forEach(video => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, []);

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };

  const handleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  const handleShareClick = (trailer) => {
    setCurrentTrailer(trailer);
    setSharePopupVisible(true);
  };

  const closePopup = () => {
    setSharePopupVisible(false);
  };

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentTrailer?.videoUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentTrailer?.videoUrl)}&text=${encodeURIComponent(currentTrailer?.title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(currentTrailer?.videoUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentTrailer?.videoUrl)}`,
  };

  return (
    <div
      style={{
        background: 'radial-gradient(circle, rgba(190, 30, 45, 0.8), rgba(1, 1, 20, 0.95))',
        padding: '0px',
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
      }}
    >
      <Navbar />
      <div className="flex flex-col">
        {trailersData.map((trailer, index) => (
          <motion.div
            key={trailer.id}
            className="w-full h-screen relative flex-shrink-0"
            style={{ scrollSnapAlign: 'start' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full">
              {trailer.videoUrl.includes('youtube') ? (
                <iframe
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={trailer.videoUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={trailer.videoUrl}
                  className="w-full h-full object-cover"
                  loop
                ></video>
              )}
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-2xl font-bold">{trailer.title}</h2>
                <p className="text-gray-400">{trailer.synopsis}</p>
              </div>
            </div>
            <div className="absolute right-4 bottom-10 flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <button
                className="flex flex-col items-center text-white"
                onClick={() => handleLike(index)}
              >
                <FaHeart
                  className={`text-3xl ${likes[index] ? 'text-red-500' : 'text-white'}`}
                />
                <span className="text-sm">{likes[index] ? 'Liked' : 'Like'}</span>
              </button>

              <button
                className="flex flex-col items-center text-white"
                onClick={() => handleFavorite(index)}
              >
                <FaPlus
                  className={`text-3xl ${favorites[index] ? 'text-green-500' : 'text-white'}`}
                />
                <span className="text-sm">{favorites[index] ? 'Favorited' : 'Favorite'}</span>
              </button>

              <button
                className="flex flex-col items-center text-white"
                onClick={() => handleShareClick(trailer)}
              >
                <FaShare className="text-3xl" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {sharePopupVisible && currentTrailer && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
        >
          <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-xl text-gray-600 hover:text-gray-800"
            >
              <FaTimes />
            </button>
            <h3 className="text-xl font-bold mb-4 text-center">Share this trailer</h3>
            <div className="flex justify-center space-x-6">
              <a
                href={shareUrls.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaFacebook className="text-3xl" />
              </a>
              <a
                href={shareUrls.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <FaTwitter className="text-3xl" />
              </a>
              <a
                href={shareUrls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-700"
              >
                <FaWhatsapp className="text-3xl" />
              </a>
              <a
                href={shareUrls.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ReelsPage;
