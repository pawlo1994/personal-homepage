import { Button } from "../../../common/Button";
import { Wrapper } from "../../../common/Wrapper";
import { ErrorIcon, ErrorText, ErrorTitle } from "./styled";

export const Error = () => (
    <Wrapper error>
        <ErrorIcon />
        <ErrorTitle>
            Ooops! Something went wrong...
        </ErrorTitle>
        <ErrorText>
            Sorry, failed to load Github projects.<br />
            You can check them directly on Github.
        </ErrorText>
        <Button github href="https://github.com/pawlo1994">
            Go to Github
        </Button>
    </Wrapper>
);