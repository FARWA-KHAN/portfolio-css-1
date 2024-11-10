import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import "../app/styles/navbar.css";
import Image from "next/image";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] =useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="navbar-container">
        <div className="navbar">
        <div className="navbar-brand">
         
        <Image 
           src="/logo.jpg" 
            alt="Farwa Khan" 
            height={56} // Equivalent to `h-14`
             width="56" 
            className="56" 
            />
            </div>Personal Portfolio!
            
            {/* Large Screen Navbar Links */}

             <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <li className="menulink"><a href="#hero">Home</a></li>
                <li className="menulink"><a href="#about">About</a></li>
                <li className="menulink"><a href="#projects">Projects</a></li>
                <li className="menulink"><a href="#contact">Contact</a></li>
                
             </ul>
              
              {/*hamburger menu link */}
             <div className="navbar-menu-icon" onClick={toggleMenu}>
              {isMenuOpen ? <AiOutlineClose size={30} /> :
              <AiOutlineMenu size={30} />
              }
             </div>
        </div>

        {/* mobile menu */}
        {isMenuOpen && (
          <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
            <li className="navbar-Link">
              <a href="#hero" onClick={toggleMenu}>Home</a>
            </li>

            <li className="nabar-Link">
              <a href="#about" onClick={toggleMenu}>About</a>
            </li>

            <li className="navbar-Link">
              <a href="#projects" onClick={toggleMenu}>Projects</a>
            </li>

            <li className="navbar-Link">
              <a href="#contact" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        )

        }
    </div>
  )
};

export default Navbar;

