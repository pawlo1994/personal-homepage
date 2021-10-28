import { ThemeProvider } from "styled-components";
import { Author } from "./features/author";
import GlobalStyle from "./globalStyle";
import { dark, light } from "./theme";
import { useSelector } from "react-redux";
import { selectDarkMode } from "./themeSlice";
import { Wrapper } from "./common/Wrapper";
import { Section } from "./common/Section";
import { skillset, toLearn } from "./features/author/skillsAndToLearn";
import { useResultData } from "./useResultData";
import { StyledSection } from "./common/Section/styled";

function App() {
  const data = useResultData();

  const darkMode = useSelector(selectDarkMode);
  return (
    <ThemeProvider theme={!darkMode ? light : dark}>
      <GlobalStyle />
      <Wrapper>
        <Author />
        <Section
          header="My skillset includes 🛠️"
          listContent={skillset}
        />
        <Section
          header="What I want to learn next 🚀"
          listContent={toLearn}
        />
        {data.map(({ html_url, name, description }) =>
          <StyledSection>
            <h2>{name}</h2>
            <a href={html_url}>{html_url}</a>
            <p>{description}</p>
          </StyledSection>
        )}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
