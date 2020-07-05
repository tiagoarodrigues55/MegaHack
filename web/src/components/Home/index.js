import React/*, { useState }*/ from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"
import { Container, CardShape } from "./styles"



import Header from "../Header/header"
import { HeaderStyle } from "../Header/styleHead"
import { Link } from "react-router-dom";

// import { Container } from './styles';

function Home() {

  return (

    <>

      <HeaderStyle>
        <Header />

        <Container>
          <div className="ongoing-cards">
            <h2>Em andamento</h2>
            <div className="cards-list">

              <CardShape>
                <div className="card-img-wrp">
                  <img src={process.env.PUBLIC_URL + "/assets/cursbasic1.png"} alt="img do curso" />
                </div>
                <Link to={"Curso"}>
                  <h2 className="course-title">Curso básico de primeiros socorros</h2>
                </Link>
                <div className="fav-btn">
                  <button>

                    <MdFavorite style={{ color: "#2F98EA" }} size={24} />

                  </button>
                </div>
              </CardShape>

              <CardShape>
                <div className="card-img-wrp">
                  <img src={process.env.PUBLIC_URL + "/assets/Group 12.png"} alt="img do curos" />
                </div>
                <Link to={"Curso"}>

                  <h2 className="course-title">Prevenção COVID 19</h2>

                </Link>
                <div className="fav-btn">
                  <button>
                    <MdFavoriteBorder style={{ color: "#2F98EA" }} size={24} />
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
                  <img src={process.env.PUBLIC_URL + "/assets/segumar.png"} alt="img do curso" />
                </div>
                <Link to={"Curso"}>

                  <h2 className="course-title">Prevenção e Segurança de acidentes no Mar</h2>

                </Link>
                <div className="fav-btn">
                  <button>
                    <MdFavoriteBorder style={{ color: "#2F98EA" }} size={24} />
                  </button>
                </div>
              </CardShape>

              <CardShape>
                <div className="card-img-wrp">
                  <img src={process.env.PUBLIC_URL + "/assets/msproj.png"} alt="img do curso" />
                </div>
                <Link to={"Curso"}>

                  <h2 className="course-title">Curso de MS Project</h2>

                </Link>
                <div className="fav-btn">
                  <button>
                    <MdFavoriteBorder style={{ color: "#2F98EA" }} size={24} />
                  </button>
                </div>
              </CardShape>

              <CardShape>
                <div className="card-img-wrp">
                  <img src={process.env.PUBLIC_URL + "/assets/gestproc.png"} alt="img do curso" />
                </div>
                <Link to={"Curso"}>

                  <h2 className="course-title">Gestão de Processos</h2>

                </Link>
                <div className="fav-btn">
                  <button>
                    <MdFavoriteBorder style={{ color: "#2F98EA" }} size={24} />
                  </button>
                </div>
              </CardShape>




            </div>
          </div>

          <div className="Especificacoes">
            <h2>Especificações Técnicas</h2>

            <div className="cards-list">
              <CardShape>
                <div className="card-img-wrp">
                  <img src={process.env.PUBLIC_URL + "/assets/cargo-1.png"} alt="img do curso" />
                </div>
                <Link to={"Curso"}>
                  <h2 className="course-title">Oficial de Náutica</h2>
                </Link>
                <div className="fav-btn">
                  <button>
                    <MdFavoriteBorder style={{ color: "#2F98EA" }} size={24} />
                  </button>
                </div>
              </CardShape>

              <CardShape>
                <div className="card-img-wrp">
                  <img src={process.env.PUBLIC_URL + "/assets/cargo-2.png"} alt="img do curso" />
                </div>
                <Link to={"Curso"}>
                  <h2 className="course-title">Chefe de Máquinas</h2>
                </Link>
                <div className="fav-btn">
                  <button>
                    <MdFavoriteBorder style={{ color: "#2F98EA" }} size={24} />
                  </button>
                </div>
              </CardShape>

              <CardShape>
                <div className="card-img-wrp">
                  <img src={process.env.PUBLIC_URL + "/assets/marconv.png"} alt="img do curso" />
                </div>
                <Link to={"Curso"}>
                  <h2 className="course-title">Marinheiro de Convés</h2>
                </Link>
                <div className="fav-btn">
                  <button>
                    <MdFavoriteBorder style={{ color: "#2F98EA" }} size={24} />
                  </button>
                </div>
              </CardShape>


            </div>
          </div>

          <div className="Embarcacoes">
            <h2>Embarcações</h2>

            <div className="cards-list">
              <CardShape>
                <div className="card-img-wrp">
                  <img src={process.env.PUBLIC_URL + "/assets/rebocador-1.png"} alt="img do curso" />
                </div>
                <Link to={"Curso"}>
                  <h2 className="course-title">Rebocador ASD 2411</h2>
                </Link>
                <div className="fav-btn">
                  <button >
                    <MdFavorite style={{ color: "#2F98EA" }} size={24} />
                  </button>
                </div>
              </CardShape>

              <CardShape>
                <div className="card-img-wrp">
                  <img src={process.env.PUBLIC_URL + "/assets/rebocador-2.png"} alt="img do curso" />
                </div>
                <Link to={"Curso"}>
                  <h2 className="course-title">Oil Spill Recovery Vessel</h2>
                </Link>
                <div className="fav-btn">
                  <button style={{ color: "#2F98EA" }}>
                    <MdFavoriteBorder size={24} />
                  </button>
                </div>
              </CardShape>

              <CardShape>
                <div className="card-img-wrp">
                  <img src={process.env.PUBLIC_URL + "/assets/platsup.png"} alt="img do curso" />
                </div>
                <Link to={"Curso"}>
                  <h2 className="course-title">Plataform Supply Vessel</h2>
                </Link>
                <div className="fav-btn">
                  <button>
                    <MdFavoriteBorder style={{ color: "#2F98EA" }} size={24} />
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