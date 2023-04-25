import { useState, useEffect } from 'react';

const MyVideoGallery = () => {
  const [videoPaths, setVideoPaths] = useState([]);

  useEffect(() => {
    async function fetchVideoPaths() {
      const res = await fetch('/api/videos');
      const { videoPaths } = await res.json();
      setVideoPaths(videoPaths);
    }

    fetchVideoPaths();
  }, []);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 p-10">
      {videoPaths.map((videoPath) => (
        <video key={videoPath} controls className="w-full h-full">
          <source src={videoPath} type="video/mp4" />
        </video>
      ))}
    </div>
  );
};

export default MyVideoGallery;
