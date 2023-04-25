import MyImageGallery from '@/components/ImageGallery'
import Link from 'next/link';

const GalleryPage = () => {
  return (
    <div className='pt-5'>
      <hr />  
      <h1 className='m-3 text-center sm:text-2xl md:text-3xl'>Fall Hollow Image Gallery</h1>
      <div className='flex mb-3'>
      <Link className='flex-1 pl-10 text-violet-800 hover:opacity-30 hover:underline duration-300 text-xl' href="/">Home</Link>
      <Link className='pr-10 text-violet-800 hover:opacity-30 hover:underline duration-300 text-xl' href="/videos">Videos</Link>
      </div>
      <hr />
      <MyImageGallery />
    </div>
  );
};

export default GalleryPage;
