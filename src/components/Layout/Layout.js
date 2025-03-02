import React, { useState } from 'react'
import Homepage from '../../pages/Home/Homepage'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import './Layout.css'
import Menu from '../Menu/Menu';

const Layout = () => {

    const [Toggle, settoggle] = useState(true)

    const HandleToggle = () => {
        settoggle(!Toggle)
    }
    return (
        <>
            <div className="sidebar-section">
                <div className={Toggle ? "sidebar-toggler sidebar" : "sidebar"}>
                    <div className="sidebar-toggle-icon" onClick={HandleToggle}>

                        <p>
                            {Toggle ? (<AiOutlineDoubleLeft size={30} />)
                                :
                                (<AiOutlineDoubleRight size={30} />)

                            }

                        </p>
                    </div>
                    <Menu Toggle={Toggle} />
                </div>
                <div className={Toggle ? "container-fluid content-shifted" : "container-fluid"}>
                    <Homepage />
                </div>
            </div>
        </>
    )
}

export default Layout
