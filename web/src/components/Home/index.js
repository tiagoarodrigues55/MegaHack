import React from "react";
import { MdFavoriteBorder, MdMenu, MdSearch } from "react-icons/md"
import { Container, CardShape, HeaderFeed } from "./styles"
import SlideMenu from "./slide-menu"


// import { Container } from './styles';

function Home() {
  const temp_url = "https://images.unsplash.com/photo-1564144573017-8dc932e0039e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
  return (

    <>
      <SlideMenu />
      <HeaderFeed>
        <div className="header-div">
          <button className="menu_btn"><MdMenu style={{ color: "#000040" }} size={34} /></button>
          <input type="text" placeholder="Pesquisar!" />
          <button className="search-ico"><MdSearch size={32} /></button>
        </div>
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
      </HeaderFeed>

    </>
  )
}

export default Home;