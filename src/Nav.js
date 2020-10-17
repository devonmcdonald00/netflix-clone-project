import React, { useEffect, useState } from 'react'
import './Nav.css'


function Nav(){
    const [show, handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true)
            }
            else{
                handleShow(false)
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return(
        <div className = {`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
                alt="Netflix Logo"
            />
            <img
                className="nav_avatar"
                src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
                alt="Avatar Logo"
            />
        </div>
    )
}

export default Nav;