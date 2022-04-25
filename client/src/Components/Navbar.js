import React from "react";
import '../CSS/Pokedex.css'
import Pokelogo from '../images/Sin título-1.png'

const Navbar = () => {

    return (
        <nav>
            
            <div>
                
                <img src={Pokelogo} alt='pokedex-logo' className='Navbar-image' />
            </div>
            
        </nav>
    );
};

export default Navbar;