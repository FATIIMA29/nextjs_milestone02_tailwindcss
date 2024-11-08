import React from 'react'
import Image from 'next/image'
import Slay from '../../../public/Saly-12 (1).png'
import Link from 'next/link'

export default function hero() {
  return (
<div id='hero' className="flex flex-col md:flex-row">
  <div className="md:w-1/2">
    <Image data-aos="zoom-in" src={Slay} alt="img" className="w-full h-auto md:h-[600px] md:w-full object-cover" />
  </div>
  <div className="md:w-1/2 p-8 mt-20 md:p-16">
    <h1 data-aos="zoom-in-up" className="text-4xl font-bold mb-4 text-pink-200 indent-2 hover:text-pink-300">WELCOME</h1>
    <p data-aos="zoom-in-up" className="text-lg mb-4">Hi there! Im Fatima AKIF, a dedicated web developer.</p>
    <p data-aos="zoom-in-up" className="text-lg mb-8">Explore my portfolio to see my latest projects and skills.</p>
    <button  data-aos="zoom-in-up" className="inline-block Typewriter bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded sm:hover:scale-90 lg:hover:scale-110 md:hover:scale-100 " ><Link href='contact_me'>Lets Build Something Great Together!</Link></button>
  </div>
 
</div>
    
)
}
