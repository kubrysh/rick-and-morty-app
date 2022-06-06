import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
    return (
        <>
            <Typography variant="h3" component="h1" gutterBottom>
                About
            </Typography>
            <Typography variant="h5" component="p">
                {"A simple React App made using "}
                <Link
                    component={RouterLink}
                    to={{ pathname: "https://mui.com/" }}
                    target="_blank"
                    rel="noreferrer"
                >
                    MUI
                </Link>
                {" and "}
                <Link
                    component={RouterLink}
                    to={{ pathname: "https://rickandmortyapi.com" }}
                    target="_blank"
                    rel="noreferrer"
                >
                    Rick and Morty API
                </Link>
            </Typography>
        </>
    );
};

export default About;
