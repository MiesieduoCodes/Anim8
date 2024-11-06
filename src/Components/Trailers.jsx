import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from "./Navbar";
import { FaHeart, FaShare, FaPlus } from 'react-icons/fa';
import initialTrailersData from "../Constants/Trailersdata";
const ReelsPage = () => {
  const videoRefs = useRef([]);
  const [trailersData, setTrailersData] = useState(initialTrailersData);
  const [likes, setLikes] = useState(new Array(initialTrailersData.length).fill(false));
  const [favorites, setFavorites] = useState(new Array(initialTrailersData.length).fill(false));

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
  }, [trailersData]);

  const lastTrailerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreTrailers();
        }
      },
      { root: null, rootMargin: '0px', threshold: 1.0 }
    );

    if (lastTrailerRef.current) {
      observer.observe(lastTrailerRef.current);
    }

    return () => {
      if (lastTrailerRef.current) {
        observer.unobserve(lastTrailerRef.current);
      }
    };
  }, [trailersData]);

  const loadMoreTrailers = () => {
    const newTrailers = [
      {
        id: trailersData.length + 1,
        title: `Movie ${trailersData.length + 1}`,
        videoUrl: 'https://www.youtube.com/embed/example1', // Replace with actual URL
        synopsis: 'New exciting story...',
      },
      {
        id: trailersData.length + 2,
        title: `Movie ${trailersData.length + 2}`,
        videoUrl: 'https://www.vimeo.com/example2', // Replace with actual URL
        synopsis: 'Another thrilling tale...',
      },
    ];

    setTrailersData((prevData) => [...prevData, ...newTrailers]);
    setLikes((prevLikes) => [...prevLikes, ...new Array(newTrailers.length).fill(false)]);
    setFavorites((prevFavorites) => [...prevFavorites, ...new Array(newTrailers.length).fill(false)]);
  };

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
          ref={index === trailersData.length - 1 ? lastTrailerRef : null}
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
  
            <button className="flex flex-col items-center text-white">
              <FaShare className="text-3xl" />
              <span className="text-sm">Share</span>
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  );
};

export default ReelsPage;