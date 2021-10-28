import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${({ theme }) => theme.color.whiteLilac};
        font-family: 'Inter', sans-serif;
        transition-property: background-color, color;
        transition-duration: 0.5s, 1s;

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