import Navbar from '@/components/bar/Navbar'
import '@/styles/globals.css'
import '@/styles/modal.css'
import '@/styles/animations.css'
import type { AppProps } from 'next/app'
import {Quicksand} from 'next/font/google'

const font = Quicksand({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={font.className}>
        <div className='bg-black h-screen w-full fixed'>
          <Component {...pageProps} />
        </div>
      
        <div className='fixed bottom-0 w-full'>
          <Navbar/>
        </div>
    </div>

    
  )
}
