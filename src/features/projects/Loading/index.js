import { LoadingSpinner, LoadingWrapper } from "./styled";

export const Loading = () => (
    <LoadingWrapper>
        Please wait, projects are being loaded...
        <LoadingSpinner />
    </LoadingWrapper>
);