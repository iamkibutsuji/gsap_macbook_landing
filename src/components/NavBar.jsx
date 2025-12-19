import React from 'react'
import {navLinks} from "../constants/index.js";


const NavBar = () => {
    return (
        <header>
            <nav>
                <div className="bg-black h-20 flex items-center px-6">
                <img src="/logo.svg" alt="Apple logo" className="h-6"/>
                </div>
                <ul>
                    {navLinks.map(({label})=> (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <img src="/search.svg" alt="search" />
                    </button>
                    <button>
                        <img src="/cart.svg" alt="cart" />
                    </button>



                </div>
            </nav>
        </header>
    )
}
export default NavBar
