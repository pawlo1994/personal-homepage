import styled from "styled-components";
import { ReactComponent as Spinner } from "./loadingSpinner.svg";

export const LoadingSpinner = styled(Spinner)`
    margin-top: 48px;
    animation: spin 1s linear infinite;

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
`;