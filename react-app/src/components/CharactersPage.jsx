import { Link as RouterLink, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

import useCharacters from "./hooks/useCharacters";
import CharacterShort from "./CharacterShort";
import useFavorites from "./hooks/useFavorites";

const CharactersPage = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get("page") || "1", 10);
    const [characters, info, isLoading] = useCharacters(page);

    const [favorites, handleFavorites] = useFavorites();

    return (
        <>
            <Typography variant="h3" component="h1" gutterBottom>
                Rick and Morty Characters
            </Typography>
            {characters.map((character) => (
                <CharacterShort
                    key={character.id}
                    character={character}
                    isFavorite={favorites.includes(character.id)}
                    onClick={handleFavorites}
                />
            )) || isLoading}
            <Pagination
                page={page}
                count={info.pages}
                renderItem={(item) => (
                    <PaginationItem
                        component={RouterLink}
                        to={`/${item.page === 1 ? "" : `?page=${item.page}`}`}
                        {...item}
                    />
                )}
                sx={{ display: "flex", justifyContent: "center" }}
            />
        </>
    );
};

export default CharactersPage;
