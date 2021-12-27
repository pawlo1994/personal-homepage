import styled from "styled-components";
import { ReactComponent as warning } from "../Error/warning.svg";

export const ErrorIcon = styled(warning)`
    stroke: ${({ theme }) => theme.color.projectsDescriptionColor};
    margin-bottom: 16px;
`;

export const ErrorTitle = styled.h2`
    color: ${({ theme }) => theme.color.projectsDescriptionColor};
    font-size: 24px;
    font-weight: 700;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        font-size: 16px;
    }
`;

export const ErrorText = styled.p`
    text-align: center;
    font-size: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        font-size: 14px;
    }
`;
