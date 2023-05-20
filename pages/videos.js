import VideoGallery from '@/components/VideoGallery'
import Link from 'next/link';

const VGalleryPage = () => {
  return (
      <>
      <div className='m-3 w-auto text-center text-3xl md:text-6xl'>
        <hr />
        <h1 className='m-3 flex justify-center text-3xl md:text-3xl'>
          Adventures In Fall Hollow
        </h1>
        <div className='flex justify-between w-full mb-3'>
      <Link className='flex  text-orange-500 hover:opacity-30 hover:underline duration-300 text-xl' href="/">Home</Link>
      <Link className='flex  text-orange-500 hover:opacity-30 hover:underline duration-300 text-xl' href="/gallery">Images</Link>
      </div>
        <hr />
      
      <VideoGallery />
    </div></>
  );
};

export default VGalleryPage;