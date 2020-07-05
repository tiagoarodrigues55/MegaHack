import React, { Component } from 'react'
import { MdMenu, MdSearch } from 'react-icons/md'
import { Bgmenu, Stylemenu, NavStyle } from "./styleHead";
import {
  MdDashboard, MdRssFeed, MdFavoriteBorder,
  MdNotificationsNone, MdExitToApp,
  MdEdit,
} from 'react-icons/md'
import { Link } from 'react-router-dom'


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { isHidden: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ isHidden: !this.state.isHidden });
  }


  render() {
    return (
      <>

        <Bgmenu onClick={this.handleClick}
          style={{ display: this.state.isHidden ? 'none' : 'block' }}>
          <Stylemenu >
            <div className="slide-theme">

              <div className="img-wrp">
                <img src={process.env.PUBLIC_URL + "assets/avatar-serg.png"} alt="" />
              </div>
              <div className="user-inf">
                <p>Sergio Martins</p>
                <p>sergiomt@gmail.com</p>
              </div>
              <button className="edit-btn"><MdEdit size={18} style={{ color: "rgba(255, 255, 255, 0.69)" }} /> </button>
              {/* Imagem dos usuário, nome e email */}

            </div>
            <NavStyle>
              <nav>
                <ul>
                  <li>
                    <Link style={{ textDecoration: "none" }} to={"Dashboard"}>
                      <span><MdDashboard size={26} /> </span> Dashboard
                  </Link>
                  </li>

                  <li>
                    <Link style={{ textDecoration: "none" }} to={"Home"}>
                      <span><MdRssFeed size={26} /> </span> Feed
                  </Link>
                  </li>

                  <li>
                    <Link style={{ textDecoration: "none" }} to={"Favoritos"}>
                      <span><MdFavoriteBorder size={26} /> </span> Favoritos
                  </Link>
                  </li>

                  <li>
                    <Link style={{ textDecoration: "none" }} to={"Notificacoes"}>
                      <span><MdNotificationsNone size={26} /> </span> Notificações
                  </Link>
                  </li>

                  <li>
                    <Link style={{ textDecoration: "none" }} to={"Logout"}>
                      <span><MdExitToApp size={26} /> </span> Logout
                  </Link>
                  </li>

                </ul>
              </nav>
            </NavStyle>

          </Stylemenu>
        </Bgmenu>
        <div className="fixed">

          <div className="header-div">
            <button onClick={this.handleClick} className="menu_btn">
              <MdMenu style={{ color: "#000040" }} size={34} />
            </button>
            <input type="text" placeholder="Pesquisar!" />
            <button className="search-ico"><MdSearch size={32} /></button>
          </div>

        </div>
      </>
    )
  }

}

export default Header;