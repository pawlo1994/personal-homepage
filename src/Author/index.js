import authorImage from "./author.jpg";
import mail from "./mail.svg";
import darkThemeOn from "./darkThemeOn.svg";
import darkThemeOff from "./darkThemeOff.svg";
import { ContactButton, DarkModeSwitch, Description, Header, HeaderTitle, Image, Subheader, Wrapper } from "./styled";

export const Author = () => {
    let darkModeActive = false;
    return (
        <Wrapper>
            <DarkModeSwitch onClick={
                () => {
                    darkModeActive = !darkModeActive;
                }
            }>
                {darkModeActive === false ?
                    <img src={darkThemeOff} alt="switch theme" /> :
                    <img src={darkThemeOn} alt="switch theme" />
                }

            </DarkModeSwitch>
            <Image src={authorImage} alt="author" />
            <Header>
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
                <ContactButton
                    href="mailto:pawelsuchy166@gmail.com"
                    rel="norefferer noopener">
                    <img src={mail} alt="mail" />
                    Hire me
                </ContactButton>
            </Header>
        </Wrapper>
    )
};