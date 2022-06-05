import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: "background.paper", py: 3 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Ihor Kubrysh — {new Date().getFullYear()}
            </Typography>
        </Box>
    );
};

export default Footer;
