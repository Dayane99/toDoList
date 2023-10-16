import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
    font-family: 'Poppins', sans-serif;
  }
  
  body {
    background-color: #F0DAAC;
  }

  h1 {
    font-family: 'Tilt Neon', sans-serif;
  }

  button{
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  input::placeholder {
    color: #fff;
  }

  /* input:checked{
  background-color: red;
  width: 20px;
} */
`