

import Navbar from '@/components/bar/Navbar'
import '@/styles/globals.css'
import '@/styles/modal.css'
import '@/styles/animations.css'
import type { AppProps } from 'next/app'
import {Quicksand} from 'next/font/google'
import Notificationbar from '@/components/bar/notification/Notificationbar'
import { useEffect } from 'react'

const font = Quicksand({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div id='App' className={font.className + ' flex flex-col'}>
          <div className='bg-black'>
            
            <Component {...pageProps} />
          </div>
        
          <div className='fixed bottom-0 w-full'>
            <Navbar/>
          </div>
          <Notificationbar className='z-[70]'></Notificationbar>
      </div>
  )
}
