import React, { useState } from "react"
import api from "../../server/api"

import { CourseImg, ContainerBox } from './styles'

import { MdArrowBack, MdPlayCircleOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default () => {

    const [files, setFiles] = useState([
        {name: "nome curso", url: ""}

    ])
    api.get('dados').then(res => {
        setFiles(res.data)
    })
    return (
        <>
            {files ? files.map(file => (
                <div>
                    <CourseImg>
                        <div className="video">
                            <img src={file.url} alt="video" />
                            <div className="cover">
                                <Link to={"Home"}><MdArrowBack size={24} /></Link>
                                <span><MdPlayCircleOutline size={50} /></span>
                            </div>
                        </div>
                    </CourseImg>
                    <ContainerBox>
                        <div>
                            <span> Aulas </span> <span style={{ color: 'rgba(92, 92, 92, 0.85)' }}>Sobre</span>

                            <div className="classes">
                                <a href={file.url}>{file.name}</a> {/* Aqui seriam gerados os arquivos do bd*/}

                                <div>
                                    <p>Aula 01 - Noções Básicas</p>

                                    <span className="play-class">
                                        <MdPlayCircleOutline size={28} />
                                    </span>
                                </div>

                                <div className="shadoww">
                                    <p>Aula 02 - Princípios</p>
                                    <span className="play-class">
                                        <MdPlayCircleOutline size={28} />
                                    </span>
                                </div>

                                <div>
                                    <p>Aula 03 - Resumo</p>
                                    <span className="play-class">
                                        <MdPlayCircleOutline size={28} />
                                    </span>
                                </div>

                                <div className="shadoww"><p>Avaliação Final</p></div>
                            </div>

                        </div>
                    </ContainerBox>

                </div>
            )) : null}
        </>
    )
}
