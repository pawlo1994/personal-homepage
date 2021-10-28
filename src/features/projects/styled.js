import styled from "styled-components";
import { ReactComponent as GithubLogo } from "./githubLogo.svg";

export const ProjectsTop = styled.section`
    margin-top: 72px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    `;

export const ProjectsHeader = styled.h2`
    color: ${({ theme }) => theme.color.headerTextColor};
    font-size: 30px;
    letter-spacing: 0.05em;
    font-weight: 900;
    text-align: center;
    margin: 12px 0 0;
`;

export const ProjectsLogo = styled(GithubLogo)`
    fill: ${({ theme }) => theme.color.logoColor};
    width: 40px;
    height: 40px;
`;

export const ProjectsDescription = styled.p`
    color: ${({ theme }) => theme.color.projectsDescriptionColor};
    margin: 8px 0 24px;
    font-size: 20px;
    letter-spacing: 0.05em;
    font-weight: 400;
`;

export const ProjectTitle = styled.h2`
    color: ${({ theme }) => theme.color.projectTitleColor};
    font-weight: bold;
    font-size: 24px;
    letter-spacing: 0.05em;
`;

export const ProjectDescription = styled.p`
    color: ${({ theme }) => theme.color.descriptionTextColor};
    font-size: 18px;
    letter-spacing: 0.05em;
`;