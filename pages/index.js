import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='mt-5 text-center align-center justify-center'>
      <div className='w-full text-3xl md:text-6xl'>
        <hr />
        <h1 className='m-3 text-center sm:text-2xl md:text-3xl'>
          Adventures in Fall Hollow
        </h1>
        <hr />
      </div>
      <div className='p-10'>      
      <Image loading='eager' width="1080" height="720" src="/images/fh/IG_1.png" className="max-w-full mx-auto m-10 border rounded-md" />
      </div>
      <div className='text-2xl md:text-3xl'>
        <ul className='text-violet-900 pb-5 space-y-3'>
          <li><Link href="/gallery" >Images</Link></li>
          <li><Link href="/videos" >Videos</Link></li>
        </ul>
      </div>
      <h2 className='p-10'>Unleash the power of friendship and exploration with 'Adventures In Fall Hollow', the action-packed game being built in Unreal Engine 5. Play as one of three unique characters - a scarecrow, fox, or crow - and embark on a journey filled with adventure, danger, and self-discovery. Befriend the fox and crow and use their special abilities to uncover hidden areas or gain a strategic advantage over enemies. From dark caves to fast-paced magic/melee battles, 'Adventures In Fall Hollow' can take you on a sentimental journey that will remind you of the importance of connections and relationships in the human experience.
        <br />
        <br />
        <hr />
        <br />
        As a solo game developer, my role is to wear many hats and handle every aspect of game development on my own. From designing and programming the game mechanics to creating and implementing the art and audio, I am responsible for bringing my vision to life. Using Unreal Engine 5 as my development platform allows me to take advantage of its powerful tools and features to create high-quality, visually appealing games. However, it also requires me to be proficient in a wide range of skills and have a deep understanding of the engine's capabilities. It can be challenging at times, but the reward of seeing my creation come to life makes it all worth it.
      </h2>
  
    </main>
  )
}
