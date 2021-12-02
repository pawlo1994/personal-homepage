import styled from "styled-components";
import { ReactComponent as Spinner } from "./loadingSpinner.svg";

export const LoadingSpinner = styled(Spinner)`
    margin-top: 48px;
    width: 160px;
    height: 160px;
    animation: spin 1s linear infinite;

    @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}){
        margin-top: 24px;
        width: 80px;
        height: 80px;
    }
    @keyframes spin{
        100%{
            transform: rotate(360deg);
        }
    }
`;

export const LoadingWrapper = styled.span`
    color: ${({ theme }) => theme.color.loadingTextColor};
    display: flex;
    margin-top: 88px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        margin-top: 10px;
    }
`;