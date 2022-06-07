import Typography from "@mui/material/Typography";

import useCharacter from "./hooks/useCharacter";
import CharacterShort from "./CharacterShort";
import useFavorites from "./hooks/useFavorites";

const Favorites = () => {

    const [favorites, handleFavorites] = useFavorites();
    const [characters, isLoading] = useCharacter(favorites);

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
            )) || isLoading}
            {characters.length === 0 && <Typography variant="h5" component="p">
                You don't have any favorite characters yet!😅
            </Typography>}
        </>
    );
};

export default Favorites;
