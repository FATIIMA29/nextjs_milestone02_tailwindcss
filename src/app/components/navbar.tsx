import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (
    <div className='sticky-top-0 bg-[#5b5e61]'>
   <div className="text_shadow font-sans font-extrabold hover:text-pink-100 hover:underline hover:scale-105 text-[#f4f6f7] text-center justify-between lg:hidden text-[1.125rem] pt-2">
  <span>FATIMA AKIF</span>
  
</div>
    
     
     
      <div className='h-30 bg-[#38220] m-auto hidden md:flex h-15 w-[95%] items-center justify-evenly  md:h-18 lg:h-20 capitalize '>
      < h1 className='text_shadow text-[2rem] hover:text-pink-100 hover:underline hover:scale-105 font-sans font-extrabold  text-[#f4f6f7] text-left justify-evenly   hidden lg:block xl-lg:text-xl xl:text-2xl pt-2  '> FATIMA AKIF</h1>
      <div className='flex text-lg  items-center gap-5 text-[#FAF9f6]  lg:gap-10 '>
      <Link href='/'><div className='hover:text-pink-200 hover:scale-105 hover:underline '> home</div></Link>
      <Link href='about_me'><div className='hover:text-pink-100 hover:scale-105 hover:underline'> about me</div></Link>
      < Link href='/#projects'><div className='hover:text-pink-100 hover:scale-105 hover:underline' > projects </div></Link>
      <Link href='contact_me'><div className='hover:text-pink-100 hover:scale-105 hover:underline' > contact me </div></Link>
    
      </div>


     
      </div>
     
    </div>
  )
}
