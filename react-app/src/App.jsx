import { Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Characters from "./components/Characters";
import About from "./components/About";
import Character from "./components/Character";
import PageNotFound from "./components/PageNotFound";

const theme = createTheme();

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Container component="main" maxWidth="md" sx={{ my: 2 }}>
                <Switch>
                    <Route exact path="/">
                        <Characters />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/:characterId">
                        <Character />
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </Container>
            <Footer />
        </ThemeProvider>
    );
};

export default App;
