import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,900;1,300&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
      font-family: Arial, Helvetica, sans-serif, 'Roboto', sans-serif;
      font-size: 14px;
      color: black;
      background: white;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
  }


`