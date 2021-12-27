import { StyledSection } from "../../common/Section/styled";
import { useResultData } from "./useResultData";
import {
    ProjectDescription,
    ProjectLink,
    ProjectsDescription,
    ProjectsHeader,
    ProjectsLogo,
    ProjectsTop,
    ProjectTitle
} from "./styled";
import { Wrapper } from "../../common/Wrapper";
import { Loading } from "./Loading";
import { Error } from "./Error";

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
                            <ProjectLink href={html_url}
                                target="_blank"
                                rel="noreferrer noopener">
                                Link to Repo
                            </ProjectLink>
                        </StyledSection>
                    )}
                </Wrapper>)
                : status === "loading" ? <Loading />
                    : <Error />
            }
        </>
    );
};
