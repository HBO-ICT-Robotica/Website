import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Box, Button, CardActions, Container, Grid } from '@material-ui/core';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import ComputerIcon from '@material-ui/icons/Computer';
import BuildIcon from '@material-ui/icons/Build';
import Header from '../components/Header';
import TextWithIcon from '../components/TextWithIcon';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	card: {
		height: '100%',
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	cardBody: {
	}
}));

export default function Index() {
	const classes = useStyles();

	const router = useRouter();

	return (
		<>
			<div className={classes.root}>
				<Header />

				<Box mt="3vh" />

				<Container maxWidth="xl">
					<Grid container spacing={4} justify="center" alignItems="stretch">
						<Grid item xs={12} md={4}>
							<Card className={classes.card}>
								<div className={classes.cardBody}>
									<CardMedia
										component="img"
										alt="NHLStenden Logo"
										image="home/nhlstenden_logo.png"
										title="NHLStenden Logo"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Project
										</Typography>

										<Typography variant="body2" color="textSecondary" component="p">
											In de vierde periode van het tweede jaar staat voor onze opleidingen Elektrotechniek, ICT en Werktuigbouwkunde,
											het thema robotica centraal. Tijdens deze periode werken wij aan een robot die aan verschillende eisen moet voldoen.
											Zo moet hij in de basis bijvoorbeeld een trap op kunnen komen en een gat kunnen overbruggen.
											<br></br>
											<br></br>
											Uiteindelijk is het de bedoeling dat wij met onze robot gaan deelnemen aan een wedstrijddag waarop wij tegen robots
											van andere teams gaan strijden. Onderdelen van de wedstrijd zijn een race, een danswedstrijd en een obstacle course.
										</Typography>
									</CardContent>
								</div>
							</Card>
						</Grid>
						<Grid item xs={12} md={4}>
							<Card className={classes.card}>
								<div className={classes.cardBody}>
									<CardMedia
										component="img"
										alt="Robot"
										image="home/robot.png"
										title="Robot"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Concept
										</Typography>

										<Typography variant="body2" color="textSecondary" component="p">
											Het is de bedoeling dat onze robot 4 poten met daaraan wielen gaat krijgen.
											Met de wielen hopen wij de robot meer snelheid te kunnen geven en met de poten
											heeft hij de mogelijkheid om zich flexibel te bewegen.
											Wij hebben dit gedaan zodat de robot meer bewegingsmogelijkheden heeft tijdens de
											danswedstrijd maar ook zodat het zwaartepunt aangepast kan worden.
											Het aanpassen van het zwaartepunt kan voordelen hebben bij bijvoorbeeld de hellingproef
											en het overbruggen van een gat.
										</Typography>
										<br></br>
										<Typography gutterBottom variant="h6">
											Maatschappelijk Doel
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p">
											Onze robot heeft als maatschappelijk doel het oprapen van tennisballen om deze vervolgens
											te vervoeren naar een verzamelbak. Hiermee willen wij tennissers helpen om het veld op te
											vrij te houden zodat zij niet naar elk potje tennis eerst weer alle ballen zelf bij elkaar moeten
											zoeken.
										</Typography>
									</CardContent>
								</div>

								<CardActions>
									<Button
										size="small"
										onClick={() => { router.push("/progress"); }}
									>
										Lees meer over de robot
									</Button>
								</CardActions>
							</Card>
						</Grid>
						<Grid item xs={12} md={4}>
							<Card className={classes.card}>
								<div className={classes.cardBody}>
									<CardMedia
										component="img"
										alt="Groep"
										image="home/groep.png"
										title="Groep"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Groep
										</Typography>

										<Typography variant="body2" color="textSecondary" component="p">
											Wij zijn een super gemotiveerd en divers team, wij hopen met onze robot heel
											ver te komen in de wedstrijd en misschien zelfs de eerste prijs te winnen.
										</Typography>

										<br></br>

										<Typography variant="body2" color="textSecondary" component="p">
											Onze groep bestaat uit 10 leden waaronder 3 studenten van werktuigbouwkunde,
											2 studenten Elektrotechniek en 5 studenten ICT.
										</Typography>

										<br></br>

										<TextWithIcon icon={<BuildIcon />} text="Werktuigbouwkunde" />
										<Typography variant="body2" color="textSecondary" component="p">
											Annika, Elin en Rick
										</Typography>

										<br></br>

										<TextWithIcon icon={<BatteryChargingFullIcon />} text="Elektrotechniek" />
										<Typography variant="body2" color="textSecondary" component="p">
											Boas en Laurens
										</Typography>

										<br></br>

										<TextWithIcon icon={<ComputerIcon />} text="ICT" />
										<Typography variant="body2" color="textSecondary" component="p">
											Berber, Justin, Nyk, Maren en Ryan
										</Typography>
									</CardContent>
								</div>

								<CardActions>
									<Button
										size="small"
										onClick={() => { router.push("/about"); }}
									>
										Lees meer over ons
									</Button>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</div>
		</>
	);
}