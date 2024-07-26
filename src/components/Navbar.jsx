// rafce with the extension to quickly make the component
import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
const Navbar = () => {
  return (
    <header>
        <nav>
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
