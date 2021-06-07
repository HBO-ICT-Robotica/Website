import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Box, Container, Grid } from '@material-ui/core';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import ComputerIcon from '@material-ui/icons/Computer';
import BuildIcon from '@material-ui/icons/Build';
import Header from '../components/Header';
import TextWithIcon from '../components/TextWithIcon';
import AboutCard from '../components/AboutCard';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},

	groupPictureBanner: {
		width: "100%",
		height: "auto"
	}
}));

export default function About() {
	const classes = useStyles();

	return (
		<>
			<div className={classes.root}>
				<Header />

				<Box mt="3vh" />

				<Container maxWidth="xl">
					<Box display={{ xs: 'block', md: 'none' }}>
						<img
							className={classes.groupPictureBanner}
							src="groep.png"
							alt="Groepsfoto"
							title="Groepsfoto"
						/>
					</Box>

					<Box display={{ xs: 'none', md: 'block' }}>
						<img
							className={classes.groupPictureBanner}
							src="groepsFotoBanner.png"
							alt="Groepsfoto"
							title="Groepsfoto"
						/>
					</Box>

					<Box mt="1vh" />

					<Grid container spacing={2} justify="center" alignItems="stretch">
						<Grid item xs={12} sm={6} md={4}>
							<AboutCard discipline="WTB" name="Annika Visser">
								<Typography variant="body2" color="textSecondary" component="p">
								Hallo, ik ben Annika. Ik ben 19 jaar oud en ik studeer werktuigbouwkunde aan de NHL Stenden.
								<br/><br/>
								in mijn vrije tijd Korfbal ik graag (dat heb ik jammer genoeg sinds het begin van Corona niet meer kunnen), ook houdt ik van lezen en gamen.
								<br/><br/>
								Ik heb nu al heel veel geleerd tijdens dit project en ik ben ontzettend benieuwd hoe onze robot het bij de race gaat doen.
								</Typography>
							</AboutCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<AboutCard discipline="WTB" name="Elin Bosma">
								<Typography variant="body2" color="textSecondary" component="p">
									Hoi ik ben Elin en ik ben 20 jaar. Ik kom van af de HAVO en doe nu werktuigbouwkunde.
									<br /><br />
									In mijn vrije tijd doe ik aan gamen en muziek luisteren.
									<br /><br />
									Ik ben heel erg blij met het ontwerp van de robot en ben groot fan van de poten.
								</Typography>
							</AboutCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<AboutCard discipline="WTB" name="Rick Tulen">
								<Typography variant="body2" color="textSecondary" component="p">
									Mijn naam is Rick, 24 lentes jong en ik volg de opleiding werktuigbouwkunde.
									<br /><br />
									Ik houd erg van techniek, in mijn vrije tijd doe ik aan boogschieten en ben ik regelmatig in de sportschool te vinden.
									Als het mooi weer is pak ik graag de motor en verken ik de bochtige weggetjes hier in Friesland.
								</Typography>
							</AboutCard>
						</Grid>
					</Grid>

					<Box mt="1vh" />

					<Grid container spacing={2} justify="center" alignItems="stretch">
						<Grid item xs={12} sm={6} md={4}>
							<AboutCard discipline="ICT" name="Justin van der Leij">
								<Typography variant="body2" color="textSecondary" component="p">
									Hey! Ik ben Justin en ik hou van katten en de kleur paars!
									<br /><br />
									Ik ben 22 jaar oud en volg de opleiding HBO-ICT. Hiervoor heb ik MBO applicatie ontwikkeling gedaan.
									Mijn passie ligt bij programmeren, met een voorkeur voor Game Development.
									<br /><br />
									Ik ben heel benieuwd wat voor coole robot wij uiteindelijk gaan bouwen.
								</Typography>
							</AboutCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<AboutCard discipline="ICT" name="Berber Bouma">
								<Typography variant="body2" color="textSecondary" component="p">
									Hey, mijn naam is Berber, ik ben 20 jaar en doe de opleiding HBO-ICT.
									<br /><br />
									In mijn vrije tijd ben ik te vinden in de sportschool of het voetbalveld.
									Ook vind ik het leuk om te gamen of tekenen.
									<br /><br />
									Ik ben erg benieuwd hoe de robot in de wedstrijd gaat presteren.
								</Typography>
							</AboutCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<AboutCard discipline="ICT" name="Nyk Stobbe">
								<Typography variant="body2" color="textSecondary" component="p">
									Mijn naam is Nyk, ik ben 18 jaar en een tweedejaars HBO-ICT student.
									<br/><br/>
									In mijn vrije tijd ben ik graag technisch bezig, aan het programmeren of bezig met mijn 3D printer. Het allerliefst ben ik met de boot op het water.
								</Typography>
							</AboutCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<AboutCard discipline="ICT" name="Ryan Boersma">
								<Typography variant="body2" color="textSecondary" component="p">
									Hallo, mijn naam is Ryan. Ik ben 29 jaar en volg de HBO-ICT opleiding.
									<br /><br />
									In mijn vrije tijd houd ik van gamen en ga ik regelmatig naar sportschool hoewel dit
									nu vanwege corona helaas een stuk minder is.
									Daarnaast vind ik het erg leuk om films en series te kijken en heb ik ondertussen
									half Netflix al uitgekeken.
									<br /><br />
									Ik vind robotica een enorm interessant onderwerp en hoop dan ook veel te leren van dit project!
								</Typography>
							</AboutCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<AboutCard discipline="ICT" name="Maren de Vries">
								<Typography variant="body2" color="textSecondary" component="p">
									Hoi!
									<br/>
									<br/>
									Mijn naam is Maren. Ik ben 26 jaar oud en volg de HBO-ICT opleiding.
									<br/>
									<br/>
									In mijn vrije tijd ben ik meestal te vinden op de paardenfokkerij van mijn moeder om de jonge paarden te trainen. Ook ben ik regelmatig te vinden in de garage, waar ik aan mijn auto aan het sleutelen ben of in de keuken waar ik werk als kok.
									<br/>
									<br/>
									Ik ben ontzettend benieuwd hoe de wedstrijd zal verlopen met onze robot!
								</Typography>
							</AboutCard>
						</Grid>
					</Grid>

					<Box mt="1vh" />

					<Grid container spacing={2} justify="center" alignItems="stretch">
						<Grid item xs={12} sm={6} md={4}>
							<AboutCard discipline="ELT" name="Laurens Veldjesgraaf">
								<Typography variant="body2" color="textSecondary" component="p">
									Hoi, ik ben Laurens en ik studeer HBO Elektrotechniek.
								</Typography>
							</AboutCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<AboutCard discipline="ELT" name="Boas Prins">
								<Typography variant="body2" color="textSecondary" component="p">
									Hey, ik ben Boas. Ik ben 19 jaar en studeer HBO Elektrotechniek. 
									<br/><br/>
									In mijn vrije tijd maak ik muziek en doe ik aan programmeren. Daarnaast hou ik van sporten en gamen.
								</Typography>
							</AboutCard>
						</Grid>
					</Grid>
				</Container >
			</div>
		</>
	);
}