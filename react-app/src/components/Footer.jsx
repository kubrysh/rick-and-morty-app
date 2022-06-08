import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "background.paper",
                mt: "auto"
            }}
        >
            <Typography variant="h6" align="center" sx={{ p: 2 }}>
                Ihor Kubrysh — {new Date().getFullYear()}
            </Typography>
        </Box>
    );
};

export default Footer;
