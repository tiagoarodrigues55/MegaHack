import React from 'react'

import SlideMenu from '../Slide-menu/slide-menu'

import { UserInfo, Biography, Platforms, PlatCard } from './styles'

import Header from "../Header/header"
import { HeaderStyle } from "../Header/styleHead"


function Dashboard() {

    return (
        <>
            <SlideMenu />
            <HeaderStyle>
                <Header />
                <UserInfo>
                    <div className="img-wrp">
                        <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="" />
                    </div>
                    <div className="user-inf">
                        <h2>User Name</h2>
                        <p>Engenheir0</p>
                    </div>
                </UserInfo>

                <Biography>
                    <h2>Biografia</h2>
                    <p>Meu nome é  "Name" e  sou Engenheiro de Projeto de Manutenção.
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
            </HeaderStyle>
        </>
    )
}

export default Dashboard