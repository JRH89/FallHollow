import VideoGallery from '@/components/VideoGallery'
import Link from 'next/link';

const VGalleryPage = () => {
  return (
      <div className='pt-5'>
      <hr />
      <h1 className='m-3 text-center sm:text-2xl md:text-3xl'>Fall Hollow Video Gallery</h1>
      <div className='flex mb-3'>
      <Link className='flex-1 pl-10 text-violet-800' href="/">Home</Link>
      <Link className='pr-10 text-violet-800' href="/gallery">Images</Link>
      </div>
      <hr />
      <VideoGallery />
    </div>
  );
};

export default VGalleryPage;