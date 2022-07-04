import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/default";
import "../styles/index.css";
import CssBaseline from "@mui/material/CssBaseline";
import Alert from "../components/Alert";
import Context from "../context/Context";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Context>
      <NavBar />
        <Component {...pageProps} />
        <Alert />
      </Context>
    </ThemeProvider>
  );
}

export default MyApp;
