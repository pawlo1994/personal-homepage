import { StyledSection } from "../../common/Section/styled";
import { useResultData } from "./useResultData";
import { ProjectDescription, ProjectsDescription, ProjectsHeader, ProjectsLogo, ProjectsTop, ProjectTitle } from "./styled";
import { Wrapper } from "../../common/Wrapper";
import { Loading } from "./Loading";

export const Projects = () => {
    const { data, status } = useResultData();
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
            {status === "done" ? (
                <Wrapper projects>
                    {data.map(({ html_url, name, description }) =>
                        <StyledSection project key={name}>
                            <ProjectTitle>{name}</ProjectTitle>
                            <ProjectDescription>{description}</ProjectDescription>
                            Code:
                            <a href={html_url}
                                target="_blank"
                                rel="noreferrer noopener">
                                Link to Repo
                            </a>
                        </StyledSection>
                    )}
                </Wrapper>)
                : status === "loading" ? <Loading />
                    : "Oops, something went wrong..."
            }
        </>
    );
};
