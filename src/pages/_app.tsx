import { NavBar } from '@/Components/Shared/NavBar/NavBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
     <NavBar></NavBar>
     <Component {...pageProps} />
  </>
}
