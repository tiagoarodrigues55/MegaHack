import styled from 'styled-components'

export const HeaderFeed = styled.div`
width: 100%;
height: 65px;
position: fixed;
top: 0;
background-color: #FFFAFA;

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

    input:focus{
            border: 2px solid black;
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


export const Container = styled.div`
height: 100%;
width: 100%;
/* margin-left: 30px; */


h2 {
    margin-left: 30px;
    font-weight: normal;
    font-size: 18px;
    color: #004F8C;
}

::-webkit-scrollbar {
    width:0;
}
.cards-list {
    width: 100%;
    display: flex;
    overflow-x: scroll;
}
`

export const CardShape = styled.div`
min-width: 233px;
max-width: 233px;
height: 234px;
border: 2px solid rgba(164, 191, 188, 0.2);
border-radius: 6px;
overflow: hidden;
margin-top: 12px;
position: relative;


:not(:first-child) {
    margin-left: 24px;
}

.card-img-wrp {
    width:100%;
    height: 143px;
    overflow: hidden;
}

img {
    max-width: 250px;
}

.course-title {
    color: #2F98EA;
    margin: 17px 18px 0 8px;
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
}

.fav-btn{
    text-align: right;
    width:100%;

}

.fav-btn button {
    border: 0;
    background: transparent;
    margin-right: 18px;
    margin-top: 4px;
}
`

export const Stylemenu = styled.div`
display: none;
position: absolute;
z-index: 100;
background-color: #f4d8d9;
width: 277px;
height: 100%;

.slide-theme {
    display: flex;
    max-height: 137px;
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
