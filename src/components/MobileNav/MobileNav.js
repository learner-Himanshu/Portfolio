import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineMenuFold } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { FcHome, FcAbout, FcLineChart, FcMultipleDevices, FcBusinessman, FcOpenedFolder, FcCustomerSupport } from "react-icons/fc";


import './MobileNav.css'
const MobileNav = () => {
  const [open,setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }
  const handleMenuClick = () => {
    setOpen(false)
  }
  return (
    <>
      <div className="Mobile-nav">
        <div className="Mobile-nav-header">
          {open ? (<AiOutlineMenuFold size={30} onClick={handleOpen}/>) : (<GiHamburgerMenu size={30} onClick={handleOpen} />)}
          
          <span>My Portfolio Website</span>
        </div>
        { open && (
          <div className="icons">
          <div className="nav-items" data-aos="fade-right" data-aos-duration="800">
            <div className="nav-item ">
              <div className="nav-link">
                <Link to='home' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white' onClick={handleMenuClick} >
                  <FcHome title='Home' /> Home

                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to='about' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white' onClick={handleMenuClick}>

                  <FcAbout title='About' /> About
                </Link>

              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to='education' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white' onClick={handleMenuClick}>

                  <FcBusinessman title='Education Details' /> Education
                </Link>
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white' onClick={handleMenuClick}>

                  <FcMultipleDevices title='Tech Stack' /> Tech Stack
                </Link>
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                <Link to='project' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white' onClick={handleMenuClick}>

                  <FcOpenedFolder title='Projects' /> Projects
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to='workexperience' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white' onClick={handleMenuClick}>

                  <FcLineChart title='Work Experience' /> Work Exp.
                </Link>
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white' onClick={handleMenuClick}>

                  <FcCustomerSupport title='Contact' /> Contact
                </Link>
              </div>
            </div>


          </div>
        </div>
        )}
      </div>
    </>
  )
}

export default MobileNav