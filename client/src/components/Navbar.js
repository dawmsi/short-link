import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
    const auth = useContext(AuthContext)

    const logoutHandler = () => {
        auth.logout()
    }

    return (
        <nav>
            <div className="nav-wrapper orange darken-2">
                <ul id="nav-mobile" className="right">
                    <li>
                        <NavLink to="/create">Create</NavLink>
                    </li>
                    <li>
                        <NavLink to="/links">Links</NavLink>
                    </li>
                    <li>
                        <Link to="/" onClick={logoutHandler}>
                            LogOut
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
