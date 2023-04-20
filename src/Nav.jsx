import React, { useState,useEffect } from 'react'
import './Nav.css'

const Nav = () => {
    const [show,hnadleShow]=useState(false)
    useEffect(() => {
        window.addEventListener('scroll',()=>{
                if (window.scrollY>100) {
                    hnadleShow(true)
                }else{
                    hnadleShow(false)
                }
        })

        
        
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_logo">
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="NETFLIX" />
            </div>
            <div className="nav_avatar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="PROFILE" />
            </div>

        </div>
    )
}

export default Nav
