import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

import useCharacter from "./hooks/useCharacter";
import dateStringifier from "../utils/dateStringifier";

const Character = () => {
    const { characterId } = useParams();
    const { character, isLoading } = useCharacter(characterId);

    if (isLoading) {
        return;
    } else {
        const items = [
            { name: "Species", data: character.species },
            { name: "Gender", data: character.gender },
            { name: "Location", data: character.location.name },
            {
                name: `Episode${character.episode.length > 1 ? "s" : ""}`,
                data: JSON.stringify(character.episode, null, 1).match(
                    /\d|,|\s/g
                )
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
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    gutterBottom
                >
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
                            sx={{ fontWeight: "bolder" }}
                        >
                            {item.name}:&nbsp;
                        </Typography>
                        <Typography variant="h6" component="p" display="inline">
                            {item.data}
                        </Typography>
                    </Box>
                ))}
            </Paper>
        );
    }
};

export default Character;
