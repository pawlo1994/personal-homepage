import { ThemeProvider } from "styled-components";
import { Author } from "./features/author";
import GlobalStyle from "./globalStyle";
import { dark, theme } from "./theme";
import { useSelector } from "react-redux";
import { selectDarkMode } from "./themeSlice";

function App() {
  const darkMode = useSelector(selectDarkMode);
  return (
    <ThemeProvider theme={!darkMode ? theme : dark}>
      <GlobalStyle />
      <Author />
    </ThemeProvider>
  );
}

export default App;
