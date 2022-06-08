import Typography from "@mui/material/Typography";

import useCharacter from "../hooks/useCharacter";
import CharacterShort from "./CharacterShort";
import useFavorites from "../hooks/useFavorites";
import NotFound from "./NotFound";

const Favorites = () => {
    const [favorites, handleFavorites] = useFavorites();
    const [characters, isLoading, isError] = useCharacter(favorites);

    if (isLoading) {
        return;
    }

    return (
        <>
            <Typography variant="h3" component="h1" gutterBottom>
                Favorite Characters
            </Typography>
            {characters.map((character) => (
                <CharacterShort
                    key={character.id}
                    character={character}
                    isFavorite={favorites.includes(character.id)}
                    onClick={handleFavorites}
                />
            )) || isError}
            {isError && <NotFound favorites={true} />}
        </>
    );
};

export default Favorites;
