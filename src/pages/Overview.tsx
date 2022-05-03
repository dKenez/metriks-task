import ChartCard from "../components/ChartCard";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

import api from "../api/posts";

interface DataFromServer {
    type: string;
    category: string;
    data: {
        month: string;
        value: number;
    }[];
}

const getData = (endPoint: string) => {
    return api
        .get(`/${endPoint}`)
        .then(({ data }) => {
            // handle success
            return data;
        })
        .catch((err) => {
            // handle error
            console.log(err);
        });
};

const Home = () => {
    const [revenue, setRevenue] = useState({
        type: "",
        category: "",
        data: [],
    } as DataFromServer);
    const [clients, setClients] = useState({
        type: "",
        category: "",
        data: [],
    } as DataFromServer);
    const [profits, setProfits] = useState({
        type: "",
        category: "",
        data: [],
    } as DataFromServer);
    const [expenses, setExpenses] = useState({
        type: "",
        category: "",
        data: [],
    } as DataFromServer);

    useEffect(() => {
        getData("revenue").then((revenueData) => {
            setRevenue(revenueData);
        });
        getData("clients").then((clientData) => {
            setClients(clientData);
        });
        getData("profits").then((profitsData) => {
            setProfits(profitsData);
        });
        getData("expenses").then((expensesData) => {
            setExpenses(expensesData);
        });
    }, []);

    return (
        <Container sx={{ marginY: 5 }}>
            <Typography
                variant="h2"
                component="h2"
                marginTop={5}
                marginBottom={3}
            >
                Overview
            </Typography>

            <Grid container spacing={3}>
                {[revenue, clients, profits, expenses].map(
                    ({ type, category, data }, index) => (
                        <ChartCard
                            type={type}
                            category={category}
                            data={data}
                            key={index}
                        />
                    )
                )}
            </Grid>
        </Container>
    );
};
export default Home;
