import styled from 'styled-components'
// import Logo from '%P'
export default styled.div`
height:100%;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.Logo-Educanauta {
    max-width:240;
    height:240;
    margin: 47px 59px 0 61px;
}

.login-form {
    margin: 0 30px 50px 32px;
}

input {
    width: 297px;
    height: 50px;
    background-color: #E2EDEC;
    border-radius: 5px;
    border: 0;
    outline: none;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 20px;
    padding-left: 15px;
    font-family: "Source Sans Pro";

}
.div-pass-inp {
    width: 297px;
}

.div-pass-inp::after {
    clear: both;
    /* content: ''; */
}

.pass-inp {
    margin-bottom: 13px;
    border-radius: 5px 0 0 5px;
    /* display: inline-block; */
    width: 247px;
    float: left;
}

.show-pass {
    display: inline-block;
    width: 50px;
    background-color: #E2EDEC;
    height: 50px;
    border-radius: 0 5px 5px 0;
    line-height: 0.5;
    outline: none;
}

.rec-pass {
    width: 100%;
    text-align: left;
    font-family: 'Roboto', sans-serif;
    color: #0065B2;
    font-size: 14px;
    margin-bottom: 43px;

}

button {
    background-color: #2F98EA;
    border: 0;
    width: 295px;
    height: 50px;
    border-radius: 20px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 12px;
    color: #fff;
}

`

/* LOGO Educanauta_OFICIAL 2 */

// position: absolute;
// width: 240px;
// height: 240px;
// left: 61px;
// top: 47px;

// background: url(LOGO Educanauta_OFICIAL.png);
