import styled, { css } from "styled-components";

export const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 600;
    padding: 12px 16px;
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    text-decoration: none;
    background-color: ${({ theme }) => theme.color.scienceBlue};
    color: ${({ theme }) => theme.color.buttonTextColor};
    width: 154px;
    height: 49px;
    transition: 0.3s;

    @media(max-width: 767px){
        width: 138px;
        height: 46px;
    }

    ${({ github }) => github && css`
        width: 170px;

        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
            width: 154px;
        }
    `}

    &:focus{
        outline: none;
        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
    }

    &:hover{
        filter: brightness(120%);
    }

    &:active{
        outline: none;
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    }
`;