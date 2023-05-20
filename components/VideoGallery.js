import { useState, useEffect } from 'react'

const MyVideoGallery = () => {
  const [videoPaths, setVideoPaths] = useState([])

  useEffect(() => {
    async function fetchVideoPaths() {
      const res = await fetch('/api/videos')
      const { videoPaths } = await res.json()
      setVideoPaths(videoPaths)
    }

    fetchVideoPaths()
  }, [])

  return (
    <div className="grid grid-cols-1 gap-4 p-10">
      {videoPaths.map((videoPath) => (
        <video key={videoPath} controls className="w-full h-full border-2 rounded-md">
          <source src={videoPath} type="video/mp4" />
        </video>
      ))}
    </div>
  )
}

export default MyVideoGallery
