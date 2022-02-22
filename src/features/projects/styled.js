import styled from "styled-components";
import { ReactComponent as github } from "../../common/github.svg";

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
    font-weight: 900;
    text-align: center;
    margin: 12px 0 0;
`;

export const ProjectsLogo = styled(github)`
    border-radius: 50%;
    fill: ${({ theme }) => theme.color.logoColor};
    stroke: ${({ theme }) => theme.color.logoColor};
    width: 40px;
    height: 40px;
`;

export const ProjectsDescription = styled.p`
    color: ${({ theme }) => theme.color.projectsDescriptionColor};
    margin: 8px 0 24px;
    font-size: 20px;
    font-weight: 400;
`;

export const ProjectTitle = styled.h2`
    color: ${({ theme }) => theme.color.projectTitleColor};
    font-weight: bold;
    font-size: 24px;
`;

export const ProjectDescription = styled.p`
    color: ${({ theme }) => theme.color.descriptionTextColor};
    font-size: 18px;
`;

export const ProjectLink = styled.a`
    margin-left: 8px;
    color: ${({ theme }) => theme.color.linkColor};
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.linkColor};

    &:hover{
        filter: brightness(120%);
    }
`;

export const ProjectLinkList = styled.ul`
    list-style-type: none;
    padding: 5px 0;
`;

export const ProjectLinkListItem = styled.li`
    margin: 5px 0;
`;