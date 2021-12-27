import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    width: 100%;
    padding: 32px;
    background-color: ${({ theme }) => theme.color.sectionColor};
    margin-top: 72px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;

    ${({ project }) => project && css`
        margin-top: 0;
        border: 6px solid rgba(209, 213, 218, 0.3);

        &:hover{
            border: 6px solid rgba(3, 102, 214, 0.2);
            box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
        }
    `}
`;

export const SectionHeader = styled.h2`
    font-size: 30px;
    font-weight: 900;
    padding-bottom: 13px;
    color: ${({ theme }) => theme.color.headerTextColor};
    border-bottom: 1px solid ${({ theme }) => theme.color.headerUnderlineColor};
`;

export const SectionList = styled.ul`
    padding-left: 0;
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 18px;
    columns: 3;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        columns: 1;
    }
`;

export const SectionListItem = styled.li`
    list-style-position: inside;
    color: ${({ theme }) => theme.color.listItemColor};
    margin-bottom: 8px;

    &::marker{
        width: 9px;
        color: ${({ theme }) => theme.color.markerColor};
    };
`;