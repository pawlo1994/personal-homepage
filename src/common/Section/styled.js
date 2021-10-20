import styled from "styled-components";

export const StyledSection = styled.section`
    width: 100%;
    padding: 32px;
    background-color: ${({ theme }) => theme.color.white};
    margin-top: 72px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
`;

export const SectionHeader = styled.h2`
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 0.05em;
    padding-bottom: 13px;
    color: ${({ theme }) => theme.color.buttonTextColor};
`;

export const SectionList = styled.ul`
    padding-left: 0;
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 18px;
`;