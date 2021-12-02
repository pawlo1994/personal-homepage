import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    padding: 16px;
    max-width: 1216px;
    width: 100%;
    margin: 0 auto;

    ${({ projects }) => projects && css`
        color: ${({ theme }) => theme.color.projectsDescriptionColor};
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 32px 32px;

        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax})
        {
            grid-template-columns: 1fr;
        }
    `}
`;