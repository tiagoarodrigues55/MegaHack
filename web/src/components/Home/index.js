import React from "react";
import { MdFavoriteBorder } from "react-icons/md"
import { Container, CardShape } from "./styles"

import SlideMenu from "../Slide-menu/slide-menu"

import Header from "../Header/header"
import { HeaderStyle } from "../Header/styleHead"

// import { Container } from './styles';

function Home() {
  const temp_url = "https://images.unsplash.com/photo-1564144573017-8dc932e0039e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
  return (

    <>
      <SlideMenu />
      <HeaderStyle>
      <Header/>

        <Container>
          <div className="ongoing-cards">
            <h2>Em andamento</h2>
            <div className="cards-list">
              <CardShape>
                <div className="card-img-wrp">
                  <img src={temp_url} alt="" />
                </div>
                <h2 className="course-title">Curso básico de primeiros socorros</h2>
                <div className="fav-btn">
                  <button>
                    <MdFavoriteBorder style={{ color: "#000040" }} size={21} />
                  </button>
                </div>
              </CardShape>

              <CardShape>
                <div className="card-img-wrp">
                  <img src={temp_url} alt="" />
                </div>
                <h2 className="course-title">Curso básico de primeiros socorros</h2>
                <div className="fav-btn">
                  <button>
                    <MdFavoriteBorder style={{ color: "#000040" }} size={21} />
                  </button>
                </div>
              </CardShape>

              <CardShape>
                <div className="card-img-wrp">
                  <img src={temp_url} alt="" />
                </div>
                <h2 className="course-title">Curso básico de primeiros socorros</h2>
                <div className="fav-btn">
                  <button>
                    <MdFavoriteBorder style={{ color: "#000040" }} size={21} />
                  </button>
                </div>
              </CardShape>


            </div>
          </div>

          <div className="available-cards">
            <h2>Cursos disponíveis</h2>
            <div className="cards-list">
          
            <CardShape>
                <div className="card-img-wrp">
                  <img src={temp_url} alt="" />
                </div>
                <h2 className="course-title">Curso básico de primeiros socorros</h2>
                <div className="fav-btn">
                  <button>
                    <MdFavoriteBorder style={{ color: "#000040" }} size={21} />
                  </button>
                </div>
              </CardShape>

              <CardShape>
                <div className="card-img-wrp">
                  <img src={temp_url} alt="" />
                </div>
                <h2 className="course-title">Curso básico de primeiros socorros</h2>
                <div className="fav-btn">
                  <button>
                    <MdFavoriteBorder style={{ color: "#000040" }} size={21} />
                  </button>
                </div>
              </CardShape>

              <CardShape>
                <div className="card-img-wrp">
                  <img src={temp_url} alt="" />
                </div>
                <h2 className="course-title">Curso básico de primeiros socorros</h2>
                <div className="fav-btn">
                  <button>
                    <MdFavoriteBorder style={{ color: "#000040" }} size={21} />
                  </button>
                </div>
              </CardShape>

            </div>
          </div>
        </Container>
        </HeaderStyle>
    </>
  )
}

export default Home;