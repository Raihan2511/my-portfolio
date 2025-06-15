// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body className="antialiased">
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }





// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Raihan's Portfolio - ML | DL | LLMs | Curious Mind in the AI Space" />
        <meta name="keywords" content="web developer, full stack, react, next.js, portfolio, machine learning" />
        <meta name="author" content="Raihan" />
        <meta property="og:title" content="Raihan's Portfolio" />
        <meta property="og:description" content="Raihan's Portfolio - ML | DL | LLMs | Curious Mind in the AI Space" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}