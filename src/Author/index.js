import authorImage from "./author.jpg";
import mail from "./mail.svg";
import darkThemeOn from "./darkThemeOn.svg";
import darkThemeOff from "./darkThemeOff.svg";
import { ContactButton, DarkModeSwitch, Description, Header, HeaderTitle, Image, Subheader, Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, selectDarkMode } from "../themeSlice";

export const Author = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(selectDarkMode);
    return (
        <Wrapper>
            <DarkModeSwitch onClick={() => dispatch(toggleDarkMode())}>
                <img src={darkMode ? darkThemeOn : darkThemeOff} alt="switch theme" />
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