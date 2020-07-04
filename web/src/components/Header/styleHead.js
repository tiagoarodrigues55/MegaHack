import styled from 'styled-components'

export const HeaderStyle = styled.div`
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