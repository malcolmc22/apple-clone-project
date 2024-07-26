// rafce with the extension to quickly make the component
import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
// instead of the array we can import our navlist from our constants and map over that instead
import { navLists } from '../constants'
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
            {/* devices with a width of 600 or less applies to max-sm */}
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {/* This will be all of our nav items made dynamically, we put the nav items in an array and map over them getting the nav item
                and it's index, and render it with divs */}
                {/* ['Phones', 'Macbooks', 'Tablets'] */ navLists.map((nav, i) =>(
                    // transition to add a nice effect when the text goes from gray to white
                    <div key={i} className='cursor-pointer px-5 text-sm text-gray transition-all hover:text-white'>
                        {nav}
                    </div>
                ))}
            </div>

            <div className='flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end'>
                <img src={searchImg} alt='search' width={18} height={18}/>
                <img src={bagImg} alt='bag' width={18} height={18}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
