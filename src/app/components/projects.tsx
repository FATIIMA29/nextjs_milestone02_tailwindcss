import React from 'react'
import Heading from './heading'
import Card from './card'

const data=[
    {
        id:0,
        title:'Static Resume ',
        desc:'Simple Static Resume build by using HTML & CSS',
        img :'/project1.png',
        tags:['html','CSS','Node','Typescript']
    },
    {
        id:1,
        title:'Dynamic  Resume builder',
        desc:'Dynamic Resume builder by using HTML & CSS',
        img :'/project2.png',
        tags:['html','CSS','Node','Typescript']
    },
     {
        id:2,
        title:'Governor Initiative Website',
        desc:'The Governor House Initiative website is developed using Next.js and Tailwind CSS',
        img :'/governorweb.webp',
        tags:['Next.JS','Tailwind CSS','Node','Typescript']
    }
]

const projects = () => {
  return (
    <div id='projects' data-aos="zoom-in-up" className='container pt-32'>
        <Heading  title='My Projects'/>
      
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el)=>(<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
    </div>
  )
}

export default projects