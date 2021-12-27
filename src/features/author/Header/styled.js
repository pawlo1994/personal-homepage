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
    margin: 0 0 35px;

    @media(max-width:767px){
        font-size: 22px;
        margin: 0 0 16px;
    }
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.color.slateGray};
    line-height: 28px;
    margin: 0 0 32px;

    @media(max-width: 767px){
        font-size: 17px;
    }
`;