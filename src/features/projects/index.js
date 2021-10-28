import { StyledSection } from "../../common/Section/styled";
import { useResultData } from "./useResultData";
import { ProjectDescription, ProjectsDescription, ProjectsHeader, ProjectsLogo, ProjectsTop, ProjectTitle } from "./styled";
import { Wrapper } from "../../common/Wrapper";

export const Projects = () => {
    const data = useResultData();
    return (
        <>
            <ProjectsTop>
                <ProjectsLogo />
                <ProjectsHeader>
                    Portfolio
                </ProjectsHeader>
                <ProjectsDescription>
                    My recent projects
                </ProjectsDescription>
            </ProjectsTop>
            <Wrapper projects>
                {data.map(({ html_url, name, description }) =>
                    <StyledSection project>
                        <ProjectTitle>{name}</ProjectTitle>
                        <ProjectDescription>{description}</ProjectDescription>
                        Code: <a href={html_url}>Repo link</a>
                    </StyledSection>)
                }
            </Wrapper>
        </>
    );
};
