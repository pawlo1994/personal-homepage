import { ThemeProvider } from "styled-components";
import { Author } from "./features/author";
import GlobalStyle from "./globalStyle";
import { dark, light } from "./theme";
import { useSelector } from "react-redux";
import { selectDarkMode } from "./themeSlice";
import { Wrapper } from "./common/Wrapper";
import { Section } from "./common/Section";

function App() {
  const darkMode = useSelector(selectDarkMode);
  return (
    <ThemeProvider theme={!darkMode ? light : dark}>
      <GlobalStyle />
      <Wrapper>
        <Author />
        <Section
          header="My skillset includes 🛠️"
          listContent={<li>1</li>}
        />
        <Section
          header="What I want to learn next 🚀"
          listContent={<li>2</li>}
        />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
