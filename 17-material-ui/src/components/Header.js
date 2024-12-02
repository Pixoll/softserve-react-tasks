import {
    ExpandMore as ExpandMoreIcon,
    Favorite as FavoriteIcon,
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
    Person as PersonIcon,
} from "@mui/icons-material";
import {
    Accordion, AccordionDetails, AccordionSummary,
    AppBar, Box,
    Button,
    Drawer,
    IconButton, List,
    ListItem,
    ListItemText, Menu, MenuItem,
    Toolbar,
    Typography,
    useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [storiesAccordionOpen, setStoriesAccordionOpen] = useState(false);
    const [storiesMenuAnchor, setStoriesMenuAnchor] = useState(null);

    const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
    const toggleStoriesAccordion = () => setStoriesAccordionOpen((prev) => !prev);
    const openStoriesMenu = (event) => setStoriesMenuAnchor(event.currentTarget);
    const closeStoriesMenu = () => setStoriesMenuAnchor(null);

    return (
        <AppBar position="static" color="default">
            <Toolbar>
                {isMobile ? (
                    <>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMobileMenu}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" style={{ flexGrow: 1, textAlign: "center" }}>
                            Cats & Friends
                        </Typography>
                        <Drawer anchor="left" open={mobileMenuOpen} onClose={toggleMobileMenu}>
                            <Box sx={{ width: 250 }} role="presentation">
                                <List>
                                    <ListItem button>
                                        <ListItemText primary="Home"/>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText primary="Volunteer"/>
                                    </ListItem>
                                    <Accordion expanded={storiesAccordionOpen} onChange={toggleStoriesAccordion}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                            <Typography>Stories</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <List disablePadding>
                                                <ListItem button>
                                                    <ListItemText primary="Blog"/>
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary="Podcast"/>
                                                </ListItem>
                                            </List>
                                        </AccordionDetails>
                                    </Accordion>
                                    <ListItem button>
                                        <ListItemText primary="Login"/>
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>
                    </>
                ) : (
                    <>
                        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                            Cats & Friends
                        </Typography>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Volunteer</Button>
                        <Button color="inherit" onClick={openStoriesMenu} endIcon={<ExpandMoreIcon />}>
                            Stories
                        </Button>
                        <Menu
                            anchorEl={storiesMenuAnchor}
                            open={Boolean(storiesMenuAnchor)}
                            onClose={closeStoriesMenu}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={closeStoriesMenu}>Blog</MenuItem>
                            <MenuItem onClick={closeStoriesMenu}>Podcast</MenuItem>
                        </Menu>
                        <Button color="inherit">Login</Button>
                        <IconButton color="inherit">
                            <FavoriteIcon/>
                        </IconButton>
                        <IconButton color="inherit">
                            <PersonIcon/>
                        </IconButton>
                        <IconButton color="inherit">
                            <NotificationsIcon/>
                        </IconButton>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};
