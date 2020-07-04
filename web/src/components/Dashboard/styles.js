import styled from 'styled-components'

export const UserInfo = styled.div`
display: flex;
max-height: 137px;


    .img-wrp {
        margin: 32px 15px 27px 16px;
        display: inline-block;
        overflow: hidden;
        display: flex;
        align-items: center;
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    img {
        max-width: 90px;
    }

    p {
        margin: 0;
    }

    .user-inf {
        margin-top: 54px;
        font-size: 22px;
        line-height: 15px;
        color: #004F8C;
        display: inline-block;
    }

    .user-inf p:not(:first-child) {
        font-size: 16px;
        padding-top: 15px;
        padding-left: 2px;
        color: rgba(92, 92, 92, 0.85)
    }
`

export const Biography = styled.div`
max-width: 296;
min-height: 40px;
margin: 24px 32px 0 32px;

    h2 {
        font-size: 20px;
        color: #004F8C;
        font-family: 'Roboto', sans-serif;

    }

    p {  
        margin-top: 11px;
        color: rgba(92, 92, 92, 0.85);
    }
`

export const Platforms = styled.div`
width: 100%;
margin-top: 12px;
    
    h4 {
        color: #004F8C;
        margin-left: 32px;
        font-size: 16px;
        font-weight: normal;
        padding-bottom: 14px;
    }

    ::-webkit-scrollbar {
    width:0;
}

    .plat-list {
        width: 100%;
        display: flex;
        overflow-x: scroll;
    }
`

export const PlatCard = styled.div`
background-color: #000040;
text-align: center;
padding: 4px 23px;
border-radius: 11px;
min-width: 120px;
width: 100%;
min-height: 22px;
max-height: 22px;
color: #fff;
font-size: 12px;
white-space:nowrap;


:first-child {
    margin-left: 32px;
}
:not(:first-child) {
    margin-left: 15px;
}
`