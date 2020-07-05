import React from "react"
import Header from "../Header/header"
import  { HeaderStyle } from "../Header/styleHead"
import { NotificStyle } from "./styles"
import HeaderNotif from "./header"
export default () => {
    return (

        <HeaderStyle>
            <Header/>

            <NotificStyle>
                <div className="notif-list">
                    <ul>
                        <li>
                            <div className="notif-card">
                                <div className="img-wrp">
                                    <img src={process.env.PUBLIC_URL + "/assets/notif-example.png"} alt="img da notif" />
                                </div>
                                <div className="notif-info">
                                    <h4>Você tem um novo curso disponível.</h4>
                                    <p>5 hrs</p>
                                </div>

                            </div>
                        </li>
                    </ul>

                </div>
            </NotificStyle>
        </HeaderStyle>
    )
}