// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// pages/_app.js
import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Add smooth scroll behavior
    document.querySelector('html').style.scrollBehavior = 'smooth'
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
