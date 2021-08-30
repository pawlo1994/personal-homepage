import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
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

    @media(max-width:767px){
        font-size: 22px;
        margin: 0 0 16px;
    }
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.color.slateGray};
    line-height: 28px;
    letter-spacing: 0.05em;
    margin: 0 0 32px;

    @media(max-width: 767px){
        font-size: 17px;
    }
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