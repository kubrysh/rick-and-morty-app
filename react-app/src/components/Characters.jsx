import { Link as RouterLink, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Avatar from "@mui/material/Avatar";

import useCharacters from "./hooks/useCharacters";

const Characters = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get("page") || "1", 10);
    const { characters, info, isLoading } = useCharacters(page);

    return (
        <>
            <Typography variant="h3" component="h1" gutterBottom>
                Rick and Morty Characters
            </Typography>
            {characters.map((character) => (
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
                </Paper>
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

export default Characters;
