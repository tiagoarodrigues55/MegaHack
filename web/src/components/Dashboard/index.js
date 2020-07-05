import React, { useState } from 'react'

import { RiArrowDropDownLine } from 'react-icons/ri'

import { UserInfo, Biography, Platforms, PlatCard, Courses } from './styles'

import { Line } from 'rc-progress'

// import PieChart from './chart'
import Header from "../Header/header"
import { HeaderStyle } from "../Header/styleHead"


function Dashboard() {

  const [showOngoing, setShowOngoing] = useState(false);

  const [showDone, setShowDone] = useState(false)


  return (
    <>
      <HeaderStyle>
        <Header />
        <UserInfo>
          <div className="img-wrp">
            <img src={process.env.PUBLIC_URL + "assets/avatar-serg.png"} alt="avatar" />
          </div>
          <div className="user-inf">
            <h2>Sergio Martins</h2>
            <p>Engenheiro</p>
          </div>
        </UserInfo>

        <Biography>
          <h2>Biografia</h2>
          <p>Meu nome é  Sergio e  sou Engenheiro de Projeto de Manutenção.
                        Tenho 8 anos na área e trabalho embarcado há 4 anos.</p>
        </Biography>

        <Platforms>
          <h4>Embarcações</h4>
          <div className="plat-list">

            <PlatCard>
              <p>ASD 2411</p>
            </PlatCard>


            <PlatCard>
              <p>PSD</p>
            </PlatCard>


            <PlatCard>
              <p>Combi 9200</p>
            </PlatCard>


            <PlatCard>
              <p>ASD 2810</p>
            </PlatCard>

          </div>
        </Platforms>
        <h2>Habilidades</h2>
        <ul>
          <li>SAP-PM</li>
          <li>RPN</li>
          <li>Inspeção</li>
        </ul>
        {/* <PieChart/> */}
        <Courses>
          <h4>Cursos</h4>

          <div className="Ongoing">
            <h3>Em andamento</h3>
            <div>
              <span>2</span>
              <button onClick={() => setShowOngoing(!showOngoing)} >
                <RiArrowDropDownLine style={{ color: "#99879D" }} size={26} />
              </button>
            </div>
          </div>
          {showOngoing &&
            <div className="Ongoing-child">
              <div>
                {/* cor do P #004F8C */}
                <p>CURSO BÁSICO DE PRIMEIROS SOCORROS</p>
                <Line percent="50" strokeWidth="1" strokeColor="#0065B2" />
                <p>PREVENÇÃO COVID 19</p>
                <Line percent="75" strokeWidth="1" strokeColor="#0065B2" />
              </div>

            </div>
          }


          <div className="Done">
            <h3>Concluidos</h3>
            <div>
              <span>3</span>
              <button onClick={() => setShowDone(!showDone)}>
                <RiArrowDropDownLine style={{ color: "#99879D" }} size={26} />
              </button>
            </div>
          </div>
          {showDone &&
            <div className="Done-child">
              <div>
                <p>REBOCADOR ASD 2411</p>
                <p>CHEFE DE MÁQUINAS</p>
                <p>PREVENÇÃOS DE SEGURANÇA DE ACIDENTES NO MAR</p>
              </div>
            </div>
          }

        </Courses>


      </HeaderStyle>
    </>
  )
}

export default Dashboard;