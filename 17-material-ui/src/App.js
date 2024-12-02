import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import theme from "./styles";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <Banner/>
            <Content/>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;
