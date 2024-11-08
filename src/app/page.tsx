'use client';
import Hero from "./components/hero";
import Projects from "./components/projects";
import About from './about_me/page'
import Contact from './contact_me/page'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";
export default function Home() {
  useEffect(()=>{Aos.init({
    easing:'ease-out-back',
    duration:1200,
    delay:100,
    mirror:true,
    anchorPlacement:"bottom-bottom",
    offset:160, 
  });
  Aos.refresh()
},[]);

  return (

    <div>
  <Hero/>
  <About/>
  <Projects/>
  <Contact/>
 
    </div>
  );
}
