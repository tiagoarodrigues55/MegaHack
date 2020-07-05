import styled from 'styled-components'


export const NotificStyle = styled.div`
width: 100%;
height: 100%;

.notif-list ul li {
    list-style: none;
}

.notif-card {
    margin-left: 32px; 
    display: flex;
}

 .img-wrp {
    margin: 0 15px 27px 16px;
    overflow: hidden;
    display: flex;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
}

.notif-info {
    font-size: 14px;
    margin: 10px 0 12px 0;
    
        h4 {
            font-family: "Roboto", sans-serif;
            color: #000000;
            font-weight: normal;
        }
}
`