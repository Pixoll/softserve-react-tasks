import { createTheme } from "@mui/material";
import { Colors } from "./colors";

export const overrides = {
    palette: {
        primary: { main: "#3f51b5" },
        secondary: { main: "#f50057" },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            },
            defaultProps: {
                variant: "contained",
            },
        },
    },
};

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary,
        },
        secondary: {
            main: Colors.secondary,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            },
        },
    },
});

export default theme;
