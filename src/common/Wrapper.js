import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    padding: 16px;
    max-width: 1216px;
    width: 100%;
    margin: 0 auto;

    ${({ projects }) => projects && css`
        padding: 0;
        color: ${({ theme }) => theme.color.projectsDescriptionColor};
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 32px 32px;
        margin-bottom: 120px;

        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax})
        {
            grid-template-columns: 1fr;
            margin-bottom: 48px;
        }
    `}

    ${({ error }) => error && css`
        margin-top: 60px;
        color: ${({ theme }) => theme.color.projectsDescriptionColor};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax})
        {
            margin-top: 20px;
        }
    `}
`;