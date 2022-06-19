import React from 'react'
import { Link } from "react-router-dom"
import "./Nav.css"
import{useContext} from "react"
import {ThemeContext}from '../../Context/ThemeContext'

function Nav() {
    
    const {theme}= useContext(ThemeContext);
    return (
      
           
        <>
        <div >
        <div className= {theme ? 'Nav light': 'Nav dark'} >
            <nav className="navbar  navbar-expand">
                
                <div className=" row container">
                        <div className="col-md-3 ps-5 ms-5">
                            <Link to="Home" className='nav-a '><img src="images/logo.png" alt="" className='logo animate__animated animate__flash' /></Link>
                        </div>
                        <div className="col-md-7">
                            <ul className='navbar-nav '>
                                <li className="nav-item">
                                    <Link to="Home" id='Home' className='nav-a '>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="About" className='nav-a'>About me</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="Portfolio" className='nav-a'>Portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="Blog" className='nav-a'>Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="Contact" className='nav-a'>Contact</Link>
                                </li>
                               


                            </ul>
                        </div>
                  

                  
                </div>
            </nav>

        </div>
</div>

        </>
    )
}
export default Nav;