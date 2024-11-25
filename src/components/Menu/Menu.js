import React from 'react'
import profile from '../../assets/images/Profile-Image.jpeg'
import './Menu.css'

import { Link } from 'react-scroll';
import { FcHome, FcAbout, FcLineChart, FcMultipleDevices, FcBusinessman, FcOpenedFolder, FcCustomerSupport } from "react-icons/fc";


const Menu = ({ Toggle }) => {

    return (
        <>

            {Toggle ? (
                <>

                    <div data-aos="zoom-in" data-aos-duration="500">
                        <div className="navbar-portfolio-pic">
                            <img src={profile} alt="Profile-picture" className='img-fluid' />
                        </div>
                    </div>
                    <div className="nav-items mt-5" data-aos="fade-right" data-aos-duration="800">
                        <div className="nav-item mt-5">
                            <div className="nav-link">
                                <Link to='home' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white' >
                                    <FcHome title='Home' /> Home

                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='about' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white' >

                                    <FcAbout title='About' /> About
                                </Link>

                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='education' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white' >

                                    <FcBusinessman title='Education Details' /> Education
                                </Link>
                            </div>
                        </div>

                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white' >

                                    <FcMultipleDevices title='Tech Stack' /> Tech Stack
                                </Link>
                            </div>
                        </div>

                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='project' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white' >

                                    <FcOpenedFolder title='Projects' /> Projects
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='workexperience' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white' >

                                    <FcLineChart title='Work Experience' /> Work Experience
                                </Link>
                            </div>
                        </div>

                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white' >

                                    <FcCustomerSupport title='Contact' /> Contact
                                </Link>
                            </div>
                        </div>

                    </div>
                </>
            ) : (
                <>
                    <div className="nav-items mt-5">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='home' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white'>

                                    <FcHome title='Home' />
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">

                                <Link to='about' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white'>

                                    <FcAbout title='About' />
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">

                                <Link to='education' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white'>

                                    <FcBusinessman title='Education' />
                                </Link>
                            </div>
                        </div>

                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white'>

                                    <FcMultipleDevices title='Tech Stack' />
                                </Link>
                            </div>
                        </div>

                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='project' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white'>

                                    <FcOpenedFolder title='Projects' />
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='workexperience' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white'>

                                    <FcLineChart title='Work Experience' />
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} className='text-decoration-none text-white'>

                                    <FcCustomerSupport title='Contact' />
                                </Link>
                            </div>
                        </div>

                    </div>

                </>)
            }

        </>
    )
}

export default Menu