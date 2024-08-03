import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
// npm install gsap @gsap/react to get gsap packages
const Hero = () => {
  useGSAP(() => {

  },[])
  // dependcy array at the end
  return (
    <section className='nav-height relative w-full bg-black'>
      {/* this pushes the highlights which means this section is taking full height of the screen */}
      <div className='flex-center h-5/6 w-full flex-col'>
      {/* hero title dissapears after adding the classname becauser in our index we have hero-tile with set attributes */}
      <p className='hero-title'>iPhone 15 Pro</p>
      </div>
    </section>
  )
}

export default Hero
