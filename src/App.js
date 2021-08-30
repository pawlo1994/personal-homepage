import { ThemeProvider } from "styled-components";
import { Author } from "./features/author";
import GlobalStyle from "./globalStyle";
import { theme } from "./theme";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Author />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
