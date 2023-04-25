import { useState, useEffect } from 'react';

const MyImageGallery = () => {
  const [imagePaths, setImagePaths] = useState([]);
  const [clickedImage, setClickedImage] = useState(null);

  useEffect(() => {
    async function fetchImagePaths() {
      const res = await fetch('/api/images');
      const { imagePaths } = await res.json();
      setImagePaths(imagePaths);
    }

    fetchImagePaths();
  }, []);

  const handleClick = (imagePath) => {
    setClickedImage(imagePath);
  };

  const handleClose = () => {
    setClickedImage(null);
  };

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 p-10">
      {imagePaths.map((imagePath) => (
        <img
          key={imagePath}
          src={imagePath}
          alt="Image"
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => handleClick(imagePath)}
        />
      ))}
      {clickedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={handleClose}
        >
          <img src={clickedImage} alt="Clicked Image" className="max-w-full max-h-full" />
        </div>
      )}
    </div>
  );
};

export default MyImageGallery;
