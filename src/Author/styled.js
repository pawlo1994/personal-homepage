import styled from "styled-components";


export const DarkModeSwitch = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: unset;
    border: none;
    width: 47,06px;
    height: 25,07px;
    right: 0;
    top: 0;

    &:hover{
        cursor: pointer;
    }
    `;

export const Wrapper = styled.div`
    position: relative;
    padding: 16px;
    max-width: 1216px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
    margin: 63px auto;

    @media(max-width: 767px){
        margin: 32,67px auto;
        grid-template-columns: 1fr;
    }
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
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

export const Subheader = styled.p`
    text-transform: uppercase;
    font-size: 12px;
    color: ${({ theme }) => theme.color.slateGray};
    line-height: 15.6px;
`
export const HeaderTitle = styled.h1`
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.05em;
    margin: 0 0 35px;
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.color.slateGray};
    line-height: 28px;
    letter-spacing: 0.05em;
    margin: 0 0 32px;
`;

export const ContactButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 600;
    letter-spacing: 0.05em;
    padding: 12px 16px;
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    text-decoration: none;
    background-color: ${({ theme }) => theme.color.scienceBlue};
    color: ${({ theme }) => theme.color.white};
    width: 154px;
    height: 49px;

    @media(max-width: 767px){
        width: 138px;
        height: 46px;
    }

    &:focus{
        outline: none;
        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
    }

    &:active{
        outline: none;
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    }
`;

