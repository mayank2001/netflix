import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body{
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothinh: antialiased;
        -moz-osx-font-smotthing: grayscale;
        background-color: black;
        color: #333333;
        font-size: 16px;
    }
`;