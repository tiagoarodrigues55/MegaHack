import styled from 'styled-components'

export const Container = styled.div`
height: 100%;
width: 100%;
margin-top: 10px;
/* margin-left: 30px; */


h2 {
    margin-left: 32px;
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

:first-child {
    margin-left: 32px;
}


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