import '../styles/globals.css'
import Navbar from './Navbar'

// import { Poppins } from '@next/font/google';

// const poppins = Poppins({
//   weight: '400',
  
// });

export default function RootLayout({ children }) {
  return (
    <html >
      <head>
      </head>
      <body className='bg-zinc-900 lg:ml-20 mb-20 lg:mb-4 text-amber-50'>
        <div className="nav relative z-50">
          <Navbar />
        </div>
        <div className="main z-0 ">
          {children}
        </div>
      </body>
    </html>
  )
}
