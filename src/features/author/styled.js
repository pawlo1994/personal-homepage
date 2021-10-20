import styled from "styled-components";

export const AuthorWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;

    @media(max-width: 767px){
        grid-template-columns: 1fr;
        grid-gap: 12.67px;
    };
`

export const Image = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;

    @media(max-width: 767px){
        width: 132.67px;
        height: 132.67px;
    }
`;

