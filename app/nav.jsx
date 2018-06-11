import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
const NavBar = () => (
    <div>
        <div>
            <NavLink exact to='/' className='blue'>hanhan</NavLink>|&nbsp;
            <NavLink to='/hanhanB'>hanhanB</NavLink>|&nbsp;
            <NavLink to='/hanhanC/IloveU' activeClassName='active'>hanhanC</NavLink>|&nbsp;
            <NavLink to='/redirect'>redirect</NavLink>|&nbsp;
            <NavLink to='/react'>404</NavLink>
        </div>
    </div>
)
export default NavBar