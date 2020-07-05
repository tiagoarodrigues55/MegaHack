
import React from 'react';
import { Container, CardShape } from './styles'
import Header from '../Header/header'
import { MdFavorite } from "react-icons/md"
import { HeaderStyle } from "../Header/styleHead"


function Favoritos() {

    const temp_url = "https://images.unsplash.com/photo-1564144573017-8dc932e0039e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"

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
                                    <img src={temp_url} alt="" />
                                </div>
                                <h2 className="course-title">Curso básico de primeiros socorros</h2>
                                <div className="fav-btn">
                                    <button>
                                        <MdFavorite style={{ color: "#2F98EA" }} size={21} />
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