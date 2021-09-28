import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header>
            <div>
                <div>Logo</div>
            </div>
            <form action="">
                <input type="search" placeholder='search by name or email'/>
                <input type='submit' value='Search' />
            </form>
            <ul>
                <li><Link to='/home' >Home</Link></li>
                <li><Link to='' >friends</Link></li>
                <li><Link to='' >groups</Link></li>
                <li><Link to='/profile' >Profile</Link></li>
            </ul>
            <div>
                <div>Notification</div>
            </div>
        </header>
    )
}

export default Header
