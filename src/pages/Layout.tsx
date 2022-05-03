import { Outlet } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Navigation from "../components/Navigation"


const Layout = () => (
    <Container sx={{ marginY: 5 }}>
        <Grid container spacing={0}>
            <Grid item xs={1}>
                <Navigation/>
            </Grid>
            <Grid item xs={11}>
                <Outlet />
            </Grid>
        </Grid>
    </Container>
);

export default Layout;
