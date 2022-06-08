import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import useCharacter from "../hooks/useCharacter";
import useFavorites from "../hooks/useFavorites";
import dateStringifier from "../utils/dateStringifier";
import NotFound from "./NotFound";

const CharacterFull = () => {
    const { characterId } = useParams();
    const [character, isLoading, isError] = useCharacter(characterId);
    const [favorites, handleFavorites] = useFavorites();

    if (isError) {
        return <NotFound />;
    } else if (isLoading) {
        return;
    }
    const items = [
        { name: "Species", data: character.species },
        { name: "Gender", data: character.gender },
        { name: "Location", data: character.location.name },
        {
            name: `Episode${character.episode.length > 1 ? "s" : ""}`,
            data: JSON.stringify(character.episode, null, 1).match(/\d|,|\s/g)
        },
        { name: "Status", data: character.status },
        { name: "Created", data: dateStringifier(character.created) }
    ];

    return (
        <Paper
            component={"article"}
            elevation={3}
            key={character.id}
            sx={{
                mb: 2,
                p: 1
            }}
        >
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                {character.name}
            </Typography>
            <Avatar
                alt={character.name}
                src={character.image}
                sx={{ width: 300, height: 300, mx: "auto" }}
            />
            {items.map((item) => (
                <Box key={item.name}>
                    <Typography
                        variant="h6"
                        component="p"
                        display="inline"
                        sx={{ fontWeight: 500 }}
                    >
                        {item.name}:&nbsp;
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        display="inline"
                        sx={{ fontWeight: 300 }}
                    >
                        {item.data}
                    </Typography>
                </Box>
            ))}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                    variant="outlined"
                    color="secondary"
                    endIcon={
                        favorites.includes(character.id) ? (
                            <BookmarkIcon />
                        ) : (
                            <BookmarkBorderIcon />
                        )
                    }
                    onClick={() => {
                        handleFavorites(character.id);
                    }}
                    sx={{ m: 2 }}
                >
                    {favorites.includes(character.id)
                        ? "Remove from Favorites"
                        : "Add to Favorites"}
                </Button>
            </Box>
        </Paper>
    );
};

export default CharacterFull;
