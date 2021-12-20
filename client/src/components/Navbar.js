import React from 'react'
import { useState } from 'react';
export const Navbar = () => {




    return (
        <div className='Navbar'>

            <h1>DeeraCode</h1>
            <ul className="List">

<li > <a href="/" >Home</a>   </li>
<li><a href="/Portfolio">Portfolio</a></li>
<li><a href="/Contact">Contact</a></li>

</ul>

<i class="fas fa-bars fa-2x"></i>

        </div>
    )
}


export default Navbar