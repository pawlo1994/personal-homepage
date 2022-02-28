import { StyledSection } from "../../common/Section/styled";
import { useResultData } from "./useResultData";
import {
    ProjectDescription,
    ProjectLink,
    ProjectLinkList,
    ProjectLinkListItem,
    ProjectsDescription,
    ProjectsHeader,
    ProjectsLogo,
    ProjectsTop,
    ProjectTitle
} from "./styled";
import { Wrapper } from "../../common/Wrapper";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { makeGithubPagesURL } from "./urlFunctions";

export const Projects = () => {
    const { data, status, userName } = useResultData();
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
                    {data.map(({ html_url, name, description, has_pages }) =>
                        <StyledSection project key={name}>
                            <ProjectTitle>{name}</ProjectTitle>
                            <ProjectDescription>{description}</ProjectDescription>
                            <ProjectLinkList>
                                <ProjectLinkListItem>Code:
                                    <ProjectLink href={html_url}
                                        target="_blank"
                                        rel="noreferrer noopener">
                                        Link to Repo
                                    </ProjectLink>
                                </ProjectLinkListItem>
                                {has_pages &&
                                    <ProjectLinkListItem>
                                        Demo:
                                        <ProjectLink href={makeGithubPagesURL(userName, name)}
                                            target="_blank"
                                            rel="noreferrer noopener">
                                            Link to Demo
                                        </ProjectLink>
                                    </ProjectLinkListItem>
                                }
                            </ProjectLinkList>
                        </StyledSection>
                    )}
                </Wrapper>)
                : status === "loading" ? <Loading />
                    : <Error />
            }
        </>
    );
};
