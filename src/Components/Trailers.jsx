import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from "./Navbar";
import { FaHeart, FaShare, FaPlus } from 'react-icons/fa';

const trailersData = [
  {
    id: 1,
    title: 'Movie 1',
    videoUrl: 'trailer1.mp4',
    synopsis: 'Action-packed adventure...',
  },
  {
    id: 2,
    title: 'Movie 2',
    videoUrl: 'trailer2.mp4',
    synopsis: 'Heartwarming drama...',
  },
  {
    id: 3,
    title: 'Movie 3',
    videoUrl: 'trailer3.mp4',
    synopsis: 'Epic fantasy tale...',
  },
  {
    id: 3,
    title: 'Movie 3',
    videoUrl: 'trailer3.mp4',
    synopsis: 'Epic fantasy tale...',
  },  
  {
    id: 3,
    title: 'Movie 3',
    videoUrl: 'trailer3.mp4',
    synopsis: 'Epic fantasy tale...',
  },  
  {
    id: 3,
    title: 'Movie 3',
    videoUrl: 'trailer3.mp4',
    synopsis: 'Epic fantasy tale...',
  },
  {
    id: 3,
    title: 'Movie 3',
    videoUrl: 'trailer3.mp4',
    synopsis: 'Epic fantasy tale...',
  },
  {
    id: 3,
    title: 'Movie 3',
    videoUrl: 'trailer3.mp4',
    synopsis: 'Epic fantasy tale...',
  },
];

const ReelsPage = () => {
  const videoRefs = useRef([]);
  const [likes, setLikes] = useState(new Array(trailersData.length).fill(false)); // Like state for each video
  const [favorites, setFavorites] = useState(new Array(trailersData.length).fill(false)); // Favorites state

  // Handle video playback when the trailer is in view
  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the trailer is in view
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play(); // Play the video when in view
        } else {
          video.pause(); // Pause the video when not in view
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

  // Toggle like and favorite functionality
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
    <div  style={{
      background: 'radial-gradient(circle, rgba(190, 30, 45, 0.8), rgba(1, 1, 20, 0.95))',
      padding: '20px',
    }}
    >
      <Navbar />
      <div className="flex flex-col items-center space-y-8 p-4">
        {trailersData.map((trailer, index) => (
          <motion.div
            key={trailer.id}
            className="w-full max-w-md md:max-w-2xl lg:max-w-4xl mx-auto rounded-lg overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'radial-gradient(circle, rgba(5, 10, 80, 0.9), rgba(190, 30, 45, 0.8))',
              padding: '20px',
            }} // Radial gradient background
          >
            <div className="relative h-[70vh] md:h-[60vh] lg:h-[80vh]"> {/* Responsive video section */}
              <video
                ref={el => (videoRefs.current[index] = el)}
                src={trailer.videoUrl}
                className="w-full h-full object-cover"
                loop
                muted
              ></video>
              <div className="absolute bottom-4 left-4">
                <h2 className="text-white text-2xl font-bold">{trailer.title}</h2>
                <p className="text-gray-400">{trailer.synopsis}</p>
              </div>
            </div>

            {/* Sidebar for actions like TikTok */}
            <div className="absolute right-4 bottom-10 flex flex-col items-center space-y-4">
              {/* Like button */}
              <button
                className="flex flex-col items-center text-white"
                onClick={() => handleLike(index)}
              >
                <FaHeart
                  className={`text-3xl ${likes[index] ? 'text-red-500' : 'text-white'}`}
                />
                <span className="text-sm">{likes[index] ? 'Liked' : 'Like'}</span>
              </button>

              {/* Add to Favorites button */}
              <button
                className="flex flex-col items-center text-white"
                onClick={() => handleFavorite(index)}
              >
                <FaPlus
                  className={`text-3xl ${favorites[index] ? 'text-green-500' : 'text-white'}`}
                />
                <span className="text-sm">{favorites[index] ? 'Favorited' : 'Favorite'}</span>
              </button>

              {/* Share button */}
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
