
import React from 'react';
import { Container, CardShape } from './styles'
import Header from '../Header/header'
import { MdFavorite } from "react-icons/md"
import { HeaderStyle } from "../Header/styleHead"
import { Link } from "react-router-dom"


function Favoritos() {

    return (
        <>

            <HeaderStyle>

                <Header />
                <Container>
                    <div className="ongoing-cards">
                        <h2>Seus cursos favoritos ficam aqui!</h2>
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
                                        <MdFavorite style={{ color: "#2F98EA" }} size={21} />
                                    </button>
                                </div>
                            </CardShape>

                            <CardShape>
                                <div className="card-img-wrp">
                                    <img src={process.env.PUBLIC_URL + "/assets/rebocador-1.png"} alt="img do curso" />
                                </div>
                                <Link to={"Curso"}>
                                    <h2 className="course-title">Rebocador ASD 2411</h2>
                                </Link>
                                <div className="fav-btn">
                                    <button>
                                        <MdFavorite style={{ color: "#2F98EA" }} size={21} />
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

export default Favoritos;