import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const CharacterShort = ({ character, isFavorite, onClick }) => {
    return (
        <Paper
            component={"article"}
            elevation={1}
            key={character.id}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 2,
                p: 1
            }}
        >
            <Avatar
                alt={character.name}
                src={character.image}
                sx={{ width: 100, height: 100 }}
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    ml: 1,
                    width: "100%"
                }}
            >
                <Typography variant="h5" component="h3">
                    <Link
                        component={RouterLink}
                        to={`/${character.id}`}
                        underline="none"
                    >
                        {character.name}
                    </Link>
                </Typography>
                <Typography variant="h6" component="h4">
                    {character.status}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <IconButton
                    color="secondary"
                    aria-label={`${
                        isFavorite ? "remove from" : "add to"
                    } favorites`}
                    size="large"
                    onClick={() => onClick(character.id)}
                >
                    {isFavorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                </IconButton>
            </Box>
        </Paper>
    );
};

export default CharacterShort;
