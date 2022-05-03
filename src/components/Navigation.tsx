import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import RemoveRedEyeTwoToneIcon from "@mui/icons-material/RemoveRedEyeTwoTone";
import WaterfallChartTwoToneIcon from "@mui/icons-material/WaterfallChartTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import SsidChartTwoToneIcon from "@mui/icons-material/SsidChartTwoTone";
import PaidTwoToneIcon from "@mui/icons-material/PaidTwoTone";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function Navigation() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            <Drawer
                variant="permanent"
                open={open}
                onMouseEnter={handleDrawerOpen}
                onMouseLeave={handleDrawerClose}
            >
                <List>
                    <Link to="/">
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                <RemoveRedEyeTwoToneIcon
                                    sx={{
                                        color: "deepskyblue",
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary="Overview"
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link to="/revenue">
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                <SsidChartTwoToneIcon
                                    sx={{
                                        color: "aqua",
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary="Revenue"
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </Link>
                    <Link to="/clients">
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                <PersonOutlineTwoToneIcon
                                    sx={{
                                        color: "goldenrod",
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary="Clients"
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </Link>
                    <Link to="/profits">
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                <PaidTwoToneIcon
                                    sx={{
                                        color: "green",
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary="Profits"
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </Link>
                    <Link to="/expenses">
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                <WaterfallChartTwoToneIcon
                                    sx={{
                                        color: "red",
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary="Expenses"
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </Link>
                </List>
                <List
                    sx={{
                        marginTop: "auto",
                    }}
                >
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : "auto",
                                justifyContent: "center",
                            }}
                        >
                            <SettingsTwoToneIcon
                                sx={{
                                    color: "gray",
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary="Settings"
                            sx={{ opacity: open ? 1 : 0 }}
                        />
                    </ListItemButton>
                </List>
            </Drawer>
        </Box>
    );
}
