import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NotFound = ({ favorites = false }) => {
    return (
        <>
            <Box>
                <Typography
                    variant="h5"
                    component="p"
                    textAlign="center"
                    sx={{ my: 15 }}
                >
                    {favorites
                        ? "You don't have any favorite characters yet! 😅"
                        : "Nothing Found 😔"}
                </Typography>
            </Box>
        </>
    );
};

export default NotFound;
