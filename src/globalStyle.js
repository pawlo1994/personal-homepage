import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        padding: 115px 0;
        background-color: ${({ theme }) => theme.color.whiteLilac};
        font-family: 'Inter', sans-serif;

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