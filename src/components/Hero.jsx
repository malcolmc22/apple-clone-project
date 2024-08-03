import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
// npm install gsap @gsap/react to get gsap packages
const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  c
  useGSAP(() => {
    gsap.to('#hero', { opacity : 1, delay: 1.5})
  },[])
  // dependcy array at the end
  return (
    <section className='nav-height relative w-full bg-black'>
      {/* this pushes the highlights which means this section is taking full height of the screen */}
      <div className='flex-center h-5/6 w-full flex-col'>
      {/* hero title dissapears after adding the classname becauser in our index we have hero-tile with set attributes */}
      <p id = 'hero' className='hero-title'>iPhone 15 Pro</p>
      <div className='w-9/12 md:w-10/12'>
      <video className='pointer-events-none' src={videoSrc} type='video/mp4' autoPlay muted playsInline={true} key={videoSrc}>

        </video>
      </div>
      </div>
    </section>
  )
}

export default Hero
