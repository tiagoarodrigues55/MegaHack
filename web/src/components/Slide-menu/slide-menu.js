import { Bgmenu, Stylemenu, NavStyle } from "./styleSlide";
import React from 'react'
import { 
    MdDashboard, MdRssFeed, MdFavoriteBorder,
    MdNotificationsNone, MdExitToApp,
    MdEdit,
} from 'react-icons/md'

import { Link } from 'react-router-dom'

export default () => {


    return (
        <Bgmenu>
        <Stylemenu>
            <div className="slide-theme">

                <div className="img-wrp">
                    <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="" />
                </div>
                <div className="user-inf">
                    <p>User Name</p>
                    <p>user.email@example</p>
                </div>
                <button className="edit-btn"><MdEdit style={{ color: "rgba(255, 255, 255, 0.69)"}}/> </button>
                {/* Imagem dos usuário, nome e email */}

            </div>
            <NavStyle>
                <nav>
                    <ul>
                        <li> <span><MdDashboard size={20}/> </span> Dashboard </li>
                        <li> <span><MdRssFeed size={20}/> </span> Feed </li>
                        <li> <span><MdFavoriteBorder size={20}/> </span> Favoritos</li>
                        <li> <span><MdNotificationsNone size={20}/> </span>Favoritos</li>
                        <li> <span><MdExitToApp size={20}/> </span> Logout</li>
                    </ul>
                </nav>
            </NavStyle>

        </Stylemenu>
        </Bgmenu>
    )
}