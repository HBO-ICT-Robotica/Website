import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import Typography from "@material-ui/core/Typography";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
} from "@material-ui/core";
import {
  apiGetLatestTelemetryRequest,
  apiGetLatestTelemetryResponse,
} from "./api/apiGetLatestTelemetry";
import unfetch from "isomorphic-unfetch";

const useStyles = makeStyles((theme) => ({
  LivestreamPlaceholder: {
    width: "50%",
    height: "auto",
  },
}));

const loadServoStatus = async () => {};

export default function telemetry() {
  const classes = useStyles();
  const [data, setData] = useState<apiGetLatestTelemetryResponse>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const requestBody: apiGetLatestTelemetryRequest = {};

      const res = await unfetch("/api/apiGetLatestTelemetry", {
        method: "POST",
        body: JSON.stringify(requestBody),
      });

      const response: apiGetLatestTelemetryResponse = await res.json();

      if (!response.success) {
        alert("laden van de servostatus mislukts");
      } else {
        setData(response);
      }

      setTimeout(fetchData, 1000 / 12);
    };

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
                  <Typography component="h2">Livestream</Typography>
                  {data == undefined ? (
                    <img
                      className={classes.LivestreamPlaceholder}
                      src="groepsFotoBanner.png"
                      alt="LivestreamPlaceholder"
                      title="LivestreamPlaceholder"
                    />
                  ) : (
                    <img
                      className={classes.LivestreamPlaceholder}
                      src={data.imageUrl}
                      alt="LivestreamPlaceholder"
                      title="LivestreamPlaceholder"
                    />
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Servo"
                  image="telemetrie/servo.png"
                  title="Servo"
                />
                <CardContent>
                  <Typography>
                    {data == undefined ? (
                      <div>Data is loading</div>
                    ) : (
                      <TableContainer>
                        <Table
                          className="servotable"
                          size="small"
                          aria-label="a dense table"
                        >
                          <TableHead>
                            <TableRow>
                              <TableCell>Servo</TableCell>
                              <TableCell>Servo stand</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow key="names">
                              <TableCell component="th" scope="row">
                                Servo 1
                              </TableCell>
                              <TableCell align="right">
                                {data.servos[0]}
                              </TableCell>
                            </TableRow>
                            <TableRow key="names">
                              <TableCell component="th" scope="row">
                                Servo 2
                              </TableCell>
                              <TableCell align="right">
                                {data.servos[1]}
                              </TableCell>
                            </TableRow>
                            <TableRow key="names">
                              <TableCell component="th" scope="row">
                                Servo 3
                              </TableCell>
                              <TableCell align="right">
                                {data.servos[2]}
                              </TableCell>
                            </TableRow>
                            <TableRow key="names">
                              <TableCell component="th" scope="row">
                                Servo 4
                              </TableCell>
                              <TableCell align="right">
                                {data.servos[3]}
                              </TableCell>
                            </TableRow>
                            <TableRow key="names">
                              <TableCell component="th" scope="row">
                                Servo 5
                              </TableCell>
                              <TableCell align="right">
                                {data.servos[4]}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Motor"
                  image="telemetrie/motor.png"
                  title="Motor"
                />
                <CardContent>
                  <Typography>
                    {data == undefined ? (
                      <div>Data is loading</div>
                    ) : (
                      <TableContainer>
                        <Table
                          className="motortable"
                          size="small"
                          aria-label="a dense table"
                        >
                          <TableHead>
                            <TableRow>
                              <TableCell>motor</TableCell>
                              <TableCell>motor snelheid</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow key="names">
                              <TableCell component="th" scope="row">
                                motor 1
                              </TableCell>
                              <TableCell align="right">
                                {data.motors[0]}
                              </TableCell>
                            </TableRow>
                            <TableRow key="names">
                              <TableCell component="th" scope="row">
                                motor 2
                              </TableCell>
                              <TableCell align="right">
                                {data.motors[1]}
                              </TableCell>
                            </TableRow>
                            <TableRow key="names">
                              <TableCell component="th" scope="row">
                                motor 3
                              </TableCell>
                              <TableCell align="right">
                                {data.motors[2]}
                              </TableCell>
                            </TableRow>
                            <TableRow key="names">
                              <TableCell component="th" scope="row">
                                motor 4
                              </TableCell>
                              <TableCell align="right">
                                {data.motors[3]}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={2} md={2}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Batterij"
                  image="telemetrie/Batterij.png"
                  title="Batterij"
                />
                <CardContent>
                  <Typography>
                    {data == undefined ? (
                      <div>Data is loading</div>
                    ) : (
                      <div>Batterij: {data.battery.toString()}%</div>
                    )}
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
                    {data == undefined ? (
                      <div>Data is loading</div>
                    ) : (
                      <div>Gewicht: {data.weight.toString()}</div>
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={2} md={2}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Modus"
                  image="telemetrie/modus.png"
                  title="Modus"
                />
                <CardContent>
                  <Typography>
                    {data == undefined ? (
                      <div>Data is loading</div>
                    ) : (
                      <div>Modus: {data.mode}</div>
                    )}
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
