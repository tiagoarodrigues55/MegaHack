import styled from 'styled-components'
import "./TEMA.png"


export const HeaderStyle = styled.div`
width: 100%;
height: 65px;
position: relative;
padding-top: 1px; /* ISSO É UMA MEDIDA TESTE */
background-color: #FFFAFA;

    .fixed {
        position: sticky;
    }

    .header-div{
        display: flex;
        margin: 18px 33px 13px 35px;


        
        input {
            margin-left: 30px;
            padding: 15px;
            width: 192px;
            height: 34px;
            background-color: rgba(140, 193, 234, 0.18);
            border-radius: 17px 0 0 17px;
            border: 0;
            outline:none;

        }

        .menu_btn {
            border: 0;
            background: transparent;
            cursor: pointer;
            
        }

        .search-ico {
            background-color: rgba(140, 193, 234, 0.18);
            height: 34px;
            width: 40px;
            border: 0;
            border-radius: 0 17px 17px 0;
            outline: none;
        }

    }
`
// Aqui vai o MENU

export const Bgmenu = styled.div`
display: none;
width: 100%;
height: 100vh;
background-color: rgba(0,0,0,0.5);
z-index: 100;
position: fixed; /* ANTES ERA Absolute */
`

export const Stylemenu = styled.div`
/* display: none; provavelmente não preciso mais desse*/
position: absolute;
z-index: 200;
background-color: #fff;
width: 277px;
height: 100%;

.slide-theme {
    display: flex;
    max-height: 137px;
    background: rgb(2,0,36);
    background: linear-gradient(128deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 36%, rgba(0,212,255,1) 100%);

}

.img-wrp {
    margin: 32px 15px 27px 16px;
    display: inline-block;
    overflow: hidden;
    display: flex;
    align-items: center;
    width: 78px;
    height: 78px;
    border-radius: 50%;
}

img {
    max-width: 90px;
}

p {
    margin: 0;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    :first-child {
        padding-bottom: 3px;
    }
}

.user-inf {
    margin-top: 54px;
    font-size: 14px;
    line-height: 15px;
    color: #FEFEFE;
    display: inline-block;
}

.user-inf p:not(:first-child) {
    font-size: 13px;
}

.edit-btn {
    outline: none;
    height: 100%;
    margin-top: 32px;
    border: 0;
    background: transparent;
}
`

export const NavStyle = styled.div`
height: 100%;
width: 100%;


nav {
    position: absolute;
    height: 100%;
}

ul {
    margin-top: 39px;
    margin-left: 35px;
}

li {
    display: flex;
    font-size: 19px;
    color: #000040;
    list-style: none;



    span {
        padding-right: 25px;
        vertical-align: middle;
    }
}




li:not(:first-child) {
    margin-top: 37px;
}

a {
    color: #000040;
    text-decoration: none;
}
`
