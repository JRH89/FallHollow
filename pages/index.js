import Image from 'next/image'
import { Inter } from 'next/font/google'
import MyImageGallery from '@/components/ImageGallery'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='p-10 text-center'>
      <div>
        <ul>
          <li><Link href="/gallery" >Images</Link></li>
          <li><Link href="/videos" >Videos</Link></li>
        </ul>
      </div>
    </main>
  )
}
