import styled from 'styled-components'

export const Bgmenu = styled.div`
display: none;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.5);
z-index: 100;
position: absolute;
`

export const Stylemenu = styled.div`
/* display: none; provavelmente não preciso mais desse*/
position: absolute;
z-index: 200;
background-color: #f4d8d9;
width: 277px;
height: 100%;

.slide-theme {
    display: flex;
    max-height: 137px;
    background-color: #f0f0f5;
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUY8uSYhSCGb654ebdpn-_TUadf0C9hGqhZg&usqp=CAU');

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
background-color: #f0f0f5;

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
    }
}




li:not(:first-child) {
    margin-top: 37px;
}

`