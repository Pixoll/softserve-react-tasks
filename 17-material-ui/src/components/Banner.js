import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Banner() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: isSmallScreen ? "column" : "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 3,
                backgroundColor: theme.palette.background.default,
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner-cat1.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Box>
                <Typography variant="h3" gutterBottom>
                    Help animals
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        borderRadius: 0,
                        "&:hover": {
                            backgroundColor: theme.palette.primary.dark,
                        },
                    }}
                >
                    Donate
                </Button>
            </Box>
        </Box>
    );
};
