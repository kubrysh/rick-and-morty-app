import { Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CharactersPage from "./components/CharactersPage";
import About from "./components/About";
import Favorites from "./components/Favorites";
import CharacterFull from "./components/CharacterFull";
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
                        <CharactersPage />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/favorites">
                        <Favorites />
                    </Route>
                    <Route path="/:characterId">
                        <CharacterFull />
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
