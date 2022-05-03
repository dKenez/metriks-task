import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import LineChart from "./LineChart";

export interface ChartCardProps {
    type: string;
    category: string;
    data: {
        month: string;
        value: number;
    }[];
}

const formatCurrentValueString = (type: string, category: string, currVal: number) => {
    if (category === 'people') {
        return `${currVal} ${type}`
    } else if (category === 'money') {
        return `$${currVal}k`
    } else {
        return 'No category found'
    }
}

const ChartCard = ({ type, category, data }: ChartCardProps) => {
    const months: string[] = [];
    const values: number[] = [];

    data.forEach(({ month, value }) => {
        months.push(month);
        values.push(value);
    });

    const currVal = values[values.length - 1];
    const percentChange =
        (values[values.length - 1] / values[values.length - 2]) * 100 - 100;

    return (
        <Grid item xs={6}>
            <Card sx={{ background: "#FDFDFD" }}>
                <Box padding={1}>
                    <Box>
                        <Typography variant="h5" component="h2">
                            {type}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="h4" component="p" marginLeft={0.5}>
                            {formatCurrentValueString(type, category, currVal)}
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            marginLeft="auto"
                            color={percentChange < 0 ? "red" : "limegreen"}
                        >
                            {percentChange > 0 && "+"}
                            {percentChange.toFixed(2)}%
                        </Typography>
                    </Box>
                </Box>
                <Divider />
                <LineChart months={months} values={values} />
            </Card>
        </Grid>
    );
};

export default ChartCard;
