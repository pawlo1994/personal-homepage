import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${({ theme }) => theme.color.whiteLilac};
        font-family: 'Inter', sans-serif;
        transition: background-color 0.5s, color 1s;

        @media(max-width: 767px){
            padding: 0;
        }
    }

    html{
        box-sizing: border-box;
    }

    *, ::after, ::before{
        box-sizing: inherit;
    }
    `;

export default GlobalStyle;