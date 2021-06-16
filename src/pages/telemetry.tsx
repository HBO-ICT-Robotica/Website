import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import { Box, Card, CardHeader, CardContent, CardMedia, Container, Grid } from '@material-ui/core';
import { apiGetLatestTelemetryRequest, apiGetLatestTelemetryResponse } from './api/apiGetLatestTelemetry'
import unfetch from 'isomorphic-unfetch';

const useStyles = makeStyles((theme) => ({
    LivestreamPlaceholder: {
        width: "100%",
        height: "auto"
    }
}));

const loadServoStatus = async () => {

}

export default function telemetry() {
    const classes = useStyles();
    const [data, setData] = useState<apiGetLatestTelemetryResponse>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            const requestBody: apiGetLatestTelemetryRequest = {

            };

            const res = await unfetch("/api/apiGetLatestTelemetry", {
                method: "POST",
                body: JSON.stringify(requestBody),
            })

            const response: apiGetLatestTelemetryResponse = await res.json();

            if (!response.success) {
                alert("laden van de servostatus mislukts");
            } else {
                setData(response);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <div>
                <Header />

                <Box mt="3vh" />

                <Container maxWidth="xl">
                    <Grid container spacing={2} justify="center" alignItems="stretch">
                        <Grid item xs={12} sm={12} md={12}>
                            <Card>
                                <CardContent>
                                    <Typography component="h2">
                                        Livestream
                                    </Typography>
                                    <img
                                        className={classes.LivestreamPlaceholder}
                                        src="groepsFotoBanner.png"
                                        alt="LivestreamPlaceholder"
                                        title="LivestreamPlaceholder"
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt="Servo"
                                    image="telemetrie/servo.png"
                                    title="Servo"
                                />
                                <CardContent>
                                    <Typography>
                                        {data == undefined ?
                                            <div>Data is loading</div> 
                                        : 
                                            <div>{JSON.stringify(data)}</div>
                                        }
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt="Servo"
                                    image="telemetrie/motor.png"
                                    title="Servo"
                                />
                                <CardContent>
                                    <Typography>
                                        Motoren
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt="Batterij"
                                    image="telemetrie/Batterij.png"
                                    title="Batterij"
                                />
                                <CardContent>
                                    <Typography>
                                        Batterij
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt="LoadCell"
                                    image="telemetrie/loadcell.png"
                                    title="LoadCell"
                                />
                                <CardContent>
                                    <Typography>
                                        LoadCell
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt="Modus"
                                    image="telemetrie/modus.png"
                                    title="Modus"
                                />
                                <CardContent>
                                    <Typography>
                                        Modus
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt="Audio"
                                    image="telemetrie/Audio.png"
                                    title="Audio"
                                />
                                <CardContent>
                                    <Typography>
                                        Audio
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );

}