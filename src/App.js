import { ThemeProvider } from "styled-components";
import { Author } from "./Author";
import GlobalStyle from "./common/globalStyle";
import { theme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Author />
      </ThemeProvider>
    </>
  );
}

export default App;
