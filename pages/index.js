import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='pt-5'>
      <div className='m-3 text-center text-3xl md:text-6xl'>
        <hr />
        <h1 className='m-3 flex justify-center text-3xl md:text-3xl'>
          Adventures In Fall Hollow
        </h1>
        <div className='flex w-full mb-3'>
      <Link className='flex-1 pl-5 text-violet-800 hover:opacity-30 hover:underline duration-300 text-xl' href="/gallery">Images</Link>
      <Link className='flex-1 pr-5  text-violet-800 hover:opacity-30 hover:underline duration-300 text-xl' href="/videos">Videos</Link>
      </div>
        <hr />
      </div>
      <div className='p-5 pt-10'>      
      <Image loading='eager' width="1080" height="720" src="/images/fh/IG_1.png" className="max-w-full mx-auto border rounded-md" />
      </div>
      <h2 className='text-center p-8 text-2xl ms:text-3xl'>Unleash the power of friendship and exploration with 'Adventures In Fall Hollow', the action-packed game being built in Unreal Engine 5. Play as one of three unique characters - a scarecrow, fox, or crow - and embark on a journey filled with adventure, danger, and self-discovery. Befriend the fox and crow and use their special abilities to uncover hidden areas or gain a strategic advantage over enemies. From dark caves to fast-paced magic/melee battles, 'Adventures In Fall Hollow' can take you on a sentimental journey that will remind you of the importance of connections and relationships in the human experience.
        <br />
        <br />
        <hr />
        <br />
        As a solo game developer, my role is to wear many hats and handle every aspect of game development on my own. From designing and programming the game mechanics to creating and implementing the art and audio, I am responsible for bringing my vision to life. Using Unreal Engine 5 as my development platform allows me to take advantage of its powerful tools and features to create high-quality, visually appealing games. However, it also requires me to be proficient in a wide range of skills and have a deep understanding of the engine's capabilities. It can be challenging at times, but the reward of seeing my creation come to life makes it all worth it.
      </h2>
  
    </main>
  )
}
