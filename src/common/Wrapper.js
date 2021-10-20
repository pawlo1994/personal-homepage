import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    padding: 16px;
    max-width: 1216px;
    width: 100%;
    margin: 63px auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax})
    {
        margin: 32,67px auto;
    }
`;