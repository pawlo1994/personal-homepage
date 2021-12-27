import styled from "styled-components";
import { ReactComponent as github } from "../Contact/github.svg";

export const ContactTitle = styled.h2`
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.descriptionTextColor};
    margin-bottom: 24px;
`;

export const ContactLink = styled.a`
    text-decoration: none;
    font-size: 32px;
    color: ${({ theme }) => theme.color.contactColor};
    font-weight: 900;
    margin-bottom: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax})
    {
        font-size: 18px;
    }

    &:hover{
        color: ${({ theme }) => theme.color.linkColor};
    }
`;

export const ContactDescription = styled.p`
    width: 60%;
    color: ${({ theme }) => theme.color.contactColor};
    line-height: 1.4;
    font-size: 18px;
    margin-bottom: 56px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax})
    {
        width: 100%;
    }
`;

export const GithubLink = styled(github)`
    stroke: ${({ theme }) => theme.color.contactColor};
    fill: ${({ theme }) => theme.color.contactColor};

    &:hover{
        stroke: ${({ theme }) => theme.color.linkColor};
        fill: ${({ theme }) => theme.color.linkColor};
    }
`;