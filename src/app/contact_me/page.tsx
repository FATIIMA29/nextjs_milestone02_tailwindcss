import React from 'react'
import Heading from '../components/heading';


const page = () => {
  return (
    <div id='container' data-aos="zoom-in-up" className='pt-32 container'>
       <Heading  title='Contact Me'/>
      <div className=''>
     
          <div>
            <div className='mb-6'>
              <label htmlFor="name" className='block'>Name</label>
              <input type="text" 
              className='h-[40px] mb-2 block w-full bg-transparent rounded-lg border  border-r-2' id='name' required/>
            </div>
          </div>
          <div className='mb-6' >
              <label htmlFor="email" className='block'>Email</label>
              <input type="text" 
              className='h-[40px] mb-2 block w-full bg-transparent border  rounded-lg border-r-2' id='email' required/>
            </div>
            <div className='mb-6'>
              <label htmlFor="message">Message</label>
              <textarea name="message" rows={7} id="msg" className='mb-2  w-full bg-transparent border rounded-lg border-r-2' ></textarea>
           </div>
           <div>
            <button data-aos="zoom-in-up" className='rounded-sm bg-blue-500 w-[80px] h-10 hover:text-black '>Send</button>
           </div>
        </div>
      </div>
      
    
  )
}

export default page
