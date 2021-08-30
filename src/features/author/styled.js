import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    padding: 16px;
    max-width: 1216px;
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
    margin: 63px auto;

    @media(max-width: 767px){
        margin: 32,67px auto;
        grid-template-columns: 1fr;
        grid-gap: 12.67px;
    }
`;

export const Image = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;

    @media(max-width: 767px){
        width: 132.67px;
        height: 132.67px;
    }
`;

