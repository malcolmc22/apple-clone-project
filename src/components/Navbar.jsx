// rafce with the extension to quickly make the component
import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
const Navbar = () => {
  return (
    // w-full so it takes the full width
    // py-5 to give it a padding on the y axis of 5
    // sm for small devies a padding x of 10
    // a padding x of 5
    <header className='flex w-full items-center justify-between p-5 sm:px-10'>
        {/* this will use the screen-max-width in our index.css */}
        <nav className='screen-max-width flex w-full'>
            <img src={appleImg} width={14} height={18} />

            <div>
                {/* This will be all of our nav items made dynamically, we put the nav items in an array and map over them getting the nav item
                and it's index, and render it with divs */}
                {['Phones', 'Macbooks', 'Tablets'].map((nav, i) =>(
                    <div key={i}>
                        {nav}
                    </div>
                ))}
            </div>

            <div>
                <img src={searchImg} alt='search' width={18} height={18}/>
                <img src={bagImg} alt='bag' width={18} height={18}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
