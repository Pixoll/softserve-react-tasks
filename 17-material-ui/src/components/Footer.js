// noinspection JSDeprecatedSymbols,XmlDeprecatedElement

import { Box, Grid, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box sx={{ padding: 3, backgroundColor: "#22414d", color: "white" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                    <Typography variant="h6">About us</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Information</Typography>
                    <Typography>Privacy & Policy</Typography>
                    <Typography>Terms & Conditions</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6">My account</Typography>
                    <Typography>Favorite animals</Typography>
                    <Typography>My Account</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};
