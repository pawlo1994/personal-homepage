import authorImage from "./author.jpg";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { Header } from "./Header";
import { Image, Wrapper } from "./styled";

export const Author = () => (
    <Wrapper>
        <DarkModeSwitch />
        <Image src={authorImage} alt="author" />
        <Header />
    </Wrapper>
);