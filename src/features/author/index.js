import authorImage from "./author.jpg";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { Header } from "./Header";
import { AuthorWrapper, Image } from "./styled";

export const Author = () => (
    <AuthorWrapper>
        <DarkModeSwitch />
        <Image src={authorImage} alt="author" />
        <Header />
    </AuthorWrapper>
);