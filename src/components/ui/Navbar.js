import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

// import './navbar.css'

export const Navbar = () => {
    const {user: {email},dispatch} = useContext(AuthContext)

    const history = useHistory()



    const handleLogout = () => {
        history.replace('/login')
        dispatch({
            type: types.logout
        })


    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Heroes
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search-hero"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="ml-2">
                <ul className="navbar-nav ">
                    <p className="nav-item nav-link">
                        <i className="fas fa-user-circle text-primary">{email} </i>
                    </p>
                    <button 
                        className="btn btn-outline-danger h-50 mt-1 m-lg-2 "
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
            
        </nav>
    )
}