import mail from "./mail.svg";
import { Description, StyledHeader, HeaderTitle, Subheader } from "./styled";
import { Button } from "../../../common/Button";

export const Header = () => (
    <StyledHeader>
        <Subheader>
            this is
        </Subheader>
        <HeaderTitle>
            Paweł Suchy
        </HeaderTitle>
        <Description>
            💻 I'm beginner frontend developer with small experience but with big heart to coding.<br />
            👨‍💼 Now I'm looking for new job opportunities.
        </Description>
        <Button
            href="mailto:pawelsuchy166@gmail.com"
            rel="norefferer noopener">
            <img src={mail} alt="mail" />
            Hire me
        </Button>
    </StyledHeader>
);