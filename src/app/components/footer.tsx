import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TbMail } from 'react-icons/tb'

const footer = () => {
  return (
    <div className='mt-16 bg-[#5b5e61] text-[#f4f6f7] py-6 text-center '>
      <p className='capitalize'>connect with me </p>
      <div className='flex justify-center items-center gap-3 my-2 '>
          <Link href='fatimaahaamughal@gmail.com' className='hover:scale-110' > <TbMail size={30}/> </Link>
        
       
           <Link href="https://github.com/FATIIMA29" className='hover:scale-110' target='blank'>< FaGithub size={30}/></Link>
      
        
         <Link href="https://www.linkedin.com/in/fatima-akif-312640278/" className='hover:scale-110' target='blank'>   <FaLinkedin size={30}/></Link>
          </div>
          <div>
          <pre>© Fatima Akif | All rights reserved 2024 </pre>
          </div>
    </div>
  )
}

export default footer
