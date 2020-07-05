import React, { useState } from "react"
import api from "../../server/api"

export default () => {

    const [files, setFiles] = useState([
        {nome: "nome curso", url: ""}
    ])
    api.get('dados').then(res => {
        setFiles(res.data)
    })
    return (
        <>
            {files ? files.map(file => (
                <div>

                    <div className="video">
                        <img src={""} alt="video" />
                    </div>
                    <div>
                        <span> Aula </span> <span>Sobre</span>

                        <div>
                            <a href={file.url}>{file.name}</a>
                        </div>

                    </div>
                </div>
            )) : null}
        </>
    )
}
