import React from 'react'
import logo from '../../Assets/logo.png'
import './navbar.css'
function Navbar() {
  return (
    <div>
        <div className="nav1">
            <ul>
                <div className="one">
                <div className="image">
                    <img src={logo} alt="logo" />
                </div>
                <div className="elem">
                    <p>Internships <i class="ri-arrow-drop-down-line"></i></p>
                    <p>Jobs <i class="ri-arrow-drop-down-line"></i></p>
                </div>

                </div>

                <div className="two">
                <div className="search">
                <i class="ri-search-line"></i>
                <input type="text" placeholder='Search' />
                </div>

                <div className="auth">
                    <button className='lightbtn'>Login</button>
                    <button className='darkbtn'>Register</button>

                </div>
                <div className="text">
                    <p>Hire Talent</p>
                </div>

                <div className="admin">
                    <button className='darkbtn'>Admin</button>
                </div>
                </div>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar