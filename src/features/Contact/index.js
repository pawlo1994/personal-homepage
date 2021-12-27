import { ContactDescription, ContactLink, ContactTitle, GithubLink } from "./styled";

export const Contact = () => (
    <>
        <ContactTitle>Let's talk!</ContactTitle>
        <ContactLink href="mailto:pawelsuchy166@gmail.com" rel="norefferer noopener">
            pawelsuchy166@gmail.com
        </ContactLink>
        <ContactDescription>
            I'm open to new projects. If you have any idea in your mind and need help, feel free to contact me 😊
        </ContactDescription>
        <a href="https://github.com/pawlo1994" target="_blank" rel="noreferrer noopener">
            <GithubLink />
        </a>
    </>
);