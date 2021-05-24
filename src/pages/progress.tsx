import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Box, Button, CardActionArea, CircularProgress, Container, Divider, Grid, Paper, TextField, Typography } from '@material-ui/core';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import unfetch from 'isomorphic-unfetch';
import { ApiUploadCommentRequest, ApiUploadCommentResponse } from './api/apiUploadComment';
import Comment from "../entities/Comment.entity";
import { ApiGetCommentsRequest, ApiGetCommentsResponse } from './api/apiGetComments';
import Carousel from 'react-material-ui-carousel';
import CarouselImage from '../components/CarouselImage';

function TabPanel(props: any) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index: number) {
	return {
		id: `scrollable-auto-tab-${index}`,
		'aria-controls': `scrollable-auto-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '100%',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},

	uploadButtonWrapper: {
		width: "100%",
		margin: theme.spacing(1),
		position: 'relative',
	},

	buttonProgress: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	}
}));


export default function ScrollableTabsButtonAuto() {
	const classes = useStyles();

	const [tabIndex, setTabIndex] = React.useState(0);

	const [comments, setComments] = useState<Comment[]>([]);

	const [uploadingComment, setUploadingComment] = useState(false);

	const loadComments = async () => {
		const requestBody: ApiGetCommentsRequest = {

		};

		const res = await unfetch("/api/apiGetComments", {
			method: "POST",
			body: JSON.stringify(requestBody),
		})

		const response: ApiGetCommentsResponse = await res.json();

		if (!response.success) {
			alert("Er ging iets mis met het ophalen van comments. Probeer het later opnieuw");
		} else {
			setComments(response.comments);
		}
	}

	useEffect(() => {
		loadComments();
	}, []);

	const [inputComment, setInputComment] = useState("");
	const router = useRouter();

	const postComment = async () => {
		setUploadingComment(true);

		const requestBody: ApiUploadCommentRequest = {
			content: inputComment,
		};

		const res = await unfetch("/api/apiUploadComment", {
			method: "POST",
			body: JSON.stringify(requestBody),
		})

		const response: ApiUploadCommentResponse = await res.json();

		if (!response.success) {
			alert("Er ging iets mis. Probeer het later opnieuw");
		} else {
			setInputComment("");
			loadComments();
		}

		setUploadingComment(false);
	}

	return (
		<div className={classes.root}>
			<Header></Header>
			<AppBar position="static" color="default">
				<Tabs
					value={tabIndex}
					onChange={(_, newTabIndex) => { setTabIndex(newTabIndex); }}
					indicatorColor="primary"
					variant="scrollable"
					textColor="primary"
					scrollButtons="auto"
				>
					<Tab label="Week 1" {...a11yProps(0)} />
					<Tab label="Week 2" {...a11yProps(1)} />
					<Tab label="Week 3/4" {...a11yProps(2)} />
					<Tab label="Week 5" disabled {...a11yProps(3)} />
					<Tab label="Week 6" disabled {...a11yProps(4)} />
					<Tab label="Week 7" disabled {...a11yProps(5)} />
					<Tab label="Week 8" disabled {...a11yProps(6)} />
				</Tabs>
			</AppBar>

			<Box mt="1vh" />

			<Container maxWidth="xl">
				<Grid container spacing={4} justify="center" alignItems="stretch">
					<Grid item xs={12} md={9}>
						<TabPanel value={tabIndex} index={0}>
							<Card>
								<Carousel animation="slide" interval={3000} navButtonsAlwaysVisible timeout={500} autoPlay>
									<CarouselImage key={1} src="progress/week1/rupsbanden.png" />
									<CarouselImage key={2} src="progress/week1/poten.png" />
									<CarouselImage key={3} src="progress/week1/rupsbanden_op_poten.png" />
								</Carousel>

								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Concepting
									</Typography>

									<Typography variant="body2" color="textSecondary" component="p">
										In de eerste week zijn wij bezig geweest met het bedenken van concepten. Wij hebben nagedacht over
										op welke manier de robot zich gaat verplaatsen, hoe hij objecten gaat oppakken en on hoe hij er ongeveer
										uit moet komen te zien.
										We hebben hier nagedacht over bijvoorbeeld gewoon wielen eronder zetten, poten of rupsbanden. Ook zijn
										er verschillende manieren bedacht waarop de robot voorwerpen kon oppakken zoals met een grijper met een
										arm eraan of simpelweg een grijper voorop monteren.
										<br />
										<br />
										Na het brainstormen hebben wij deze ideeën verder uitgewerkt tot meerdere echte concepten van een gehele robot.
										Deze concepten zijn verder uitgewerkt in ons morfologisch overzicht die ook via deze website inzichtelijk is.
										Uiteindelijk hebben wij hier één ontwerp van gekozen om daadwerkelijk uit te werken als robot.
										Dit betreft een robot met 4 poten waaraan wielen zitten bevestigd. Wij hebben dit gekozen omdat we een robot
										willen die niet beperkt wordt in bijvoorbeeld dansmogelijkheden doordat hij op rupsbanden of alleen wielen rijdt.
										Ook hopen wij voordeel te halen uit het feit dat we het gewicht van de body kunnen verplaatsen naar eigen voordeel
										om bijvoorbeeld een gat te overbruggen of een helling op te rijden.
									</Typography>
								</CardContent>
							</Card>

							<Box mt="3vh" />

							<Card>
								<Carousel animation="slide" interval={3000} navButtonsAlwaysVisible timeout={500} autoPlay>
									<CarouselImage key={1} src="progress/week1/tennibot.png" />
									<CarouselImage key={2} src="progress/week1/ballboy.png" />
									<CarouselImage key={3} src="progress/week1/grijper.png" />
								</Carousel>

								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Maatschappelijk Doel
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										Wij hebben ook over het maatschappelijke doel van onze robot nagedacht. We hadden ideeën als het
										onderhouden van gemeentetuinen door dode planten/bloemen te herkennen en deze weg te knippen.
										Ook hadden we het idee van een bewakingsrobot die moeilijk te verwijderen verf op een verdachte kan
										spuiten en een alarm kan af laten gaan.
										Wij hebben er uiteindelijk voor gekozen om een robot te maken die op een tennisbaan, tennisballen aan
										het einde van een wedstrijd weer bij elkaar verzamelt en naar een verzamelpunt brengt.

										Daarnaast hebben wij mogelijkheden tot extra functionaliteit zoals het herkennen van de lijnen op het veld
										om zijn locatie te bepalen en misschien zelfs een positie in te schatten waar ballen het vaakst terechtkomen.
										Ook is er de mogelijkheid om de ballen daadwerkelijk terug te geven aan een speler in plaats van deze naar een
										verzamelpunt te brengen om bijvoorbeeld spelers die moeite hebben met ballen oppakken te helpen.
										<br />
										<br />
										Al met al dus opties genoeg, we hebben er alleen voor gekozen om het eerst wat meer basic te houden omdat wij
										nu eenmaal met een deadline over 8 weken zitten waardoor de tijd relatief beperkt is.
									</Typography>
								</CardContent>
							</Card>
						</TabPanel>

						<TabPanel value={tabIndex} index={1}>
							<Card>
								<Carousel animation="slide" interval={3000} navButtonsAlwaysVisible timeout={500} autoPlay>
									<CarouselImage key={1} src="progress/week2/elt_functies.png" />
									<CarouselImage key={2} src="progress/week2/presentatie.png" />
									<CarouselImage key={3} src="progress/week2/robot.png" />
								</Carousel>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Designbrief
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										Aan het begin van deze week hadden wij de presentatie van onze designbrief.
										Hier hebben wij ons maatschappelijk doel gepresenteerd en hebben wij tips gekregen
										met betrekking tot dit maatschappelijk doel.
										De docenten vonden ons idee leuk bedacht en raadden ons aan om goed na te denken over bijvoorbeeld
										de robuustheid van de robot omdat er dus ballen met hoge snelheid tegenaan kunnen vliegen maar ook
										tips om bijvoorbeeld contact op te nemen met een tennisclub voor tips en feedback.
									</Typography>
								</CardContent>
							</Card>

							<Box mt="3vh" />

							<Card>
								<Carousel animation="slide" interval={3000} navButtonsAlwaysVisible timeout={500} autoPlay>
									<CarouselImage key={1} src="progress/week2/3d_prints.png" />
									<CarouselImage key={2} src="progress/week2/motoren.png" />
									<CarouselImage key={3} src="progress/week2/display.png" />
								</Carousel>

								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Hardware
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										Wij hebben ons robot idee verder uitgewerkt in een 3D ontwerp en WTB is begonnen met de
										berekeningen om onder andere een motor die krachtig en snel genoeg is uit te kunnen zoeken.
										Verder hebben wij verschillende soorten tandwielen ontworpen en met de 3D printer uitgeprint om
										te kunnen testen.
										Ook hebben wij deze week bijpassende motoren besteld zodat wij die zo snel mogelijk kunnen
										gaan testen en aan de poten kunnen beginnen.
										<br />
										<br />
										Elektrotechniek heeft deze week hard gewerkt aan het maken van de afstandsbediening waarmee de robot bestuurd
										gaat worden. Hier moest bijvoorbeeld een scherm op worden gemonteerd waarop data weergeven kan worden
										zoals sensordata of batterijduur. Ook zijn ze druk geweest met het maken van de controler vanuit waar alle componenten
										van de robot aangestuurd moeten worden.
									</Typography>
								</CardContent>
							</Card>
						</TabPanel>
						<TabPanel value={tabIndex} index={2}>
							<Card>
								<Carousel animation="slide" interval={3000} navButtonsAlwaysVisible timeout={500} autoPlay>
									<CarouselImage key={1} src="progress/week3/buigen.png" />
									<CarouselImage key={2} src="progress/week3/poot.png" />
									<CarouselImage key={3} src="progress/week3/controller.png" />
								</Carousel>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Watersnijder, buigen en monteren
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										Er zijn in week 3 ontwerpen gemaakt van de poten en de body van onze robot.
										Deze zijn in week drie met de watersnijder uit aluminium gesneden om vervolgens
										gebogen te worden in de juiste vorm.
										De losse onderdelen van de grijper zijn ook uitgesneden en in elkaar gemonteerd om
										tot de grijper te komen.
										ICT heeft een livestream opgezet die op het scherm bij de wedstrijd en op deze website live
										kan streamen. Deze hopen zij binnenkort al kunnen in te schakelen.
										Daarnaast is de aansturing van de servo's en motoren succesvol getest.
									</Typography>
								</CardContent>
							</Card>

							<Box mt="3vh" />

							<Card>
								<Carousel animation="slide" interval={3000} navButtonsAlwaysVisible timeout={500} autoPlay>
									<CarouselImage key={1} src="progress/week3/servos.png" />
									<CarouselImage key={2} src="progress/week3/body.png" />
									<CarouselImage key={3} src="progress/week3/grijper.png" />
								</Carousel>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Monteren servo's en body robot
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										Elektrotechniek is nog altijd druk bezig geweest met het in elkaar zetten van de
										afstandsbediening. Zo hebben zij de display werkend gekregen en zijn zij druk bezig
										met de controller die de servo's en motoren moet gaan aansturen.
										De body van de robot is ook uitgesneden en de servo's zijn daarop gemonteerd.
										Alles was goed uitgemeten dus het paste allemaal precies op elkaar waardoor we
										een basis voor de body van de robot hebben waarmee we verder kunnen werken
									</Typography>
								</CardContent>
							</Card>
						</TabPanel>
						<TabPanel value={tabIndex} index={3}>
							<Card>
								<CardContent>
									<Typography variant="body2" component="p">
										<a href="https://youtu.be/MiNlz9BbVCo" target="_blank">Video Robot dans</a>
										<br />
										<a href="https://youtu.be/WYERC3SgBn4" target="_blank">Video Robot afstandsbesturing</a>
									</Typography>
								</CardContent>
							</Card>
						</TabPanel>

						<TabPanel value={tabIndex} index={4}>
							<Card>
								<CardContent>
									<Typography variant="body2" component="p">

									</Typography>
								</CardContent>
							</Card>
						</TabPanel>

						<TabPanel value={tabIndex} index={5}>
							<Card>
								<CardContent>
									<Typography variant="body2" component="p">

									</Typography>
								</CardContent>
							</Card>
						</TabPanel>

						<TabPanel value={tabIndex} index={6}>
							<Card>
								<CardContent>
									<Typography variant="body2" component="p">

									</Typography>
								</CardContent>
							</Card>
						</TabPanel>
					</Grid>

					<Grid item xs={12} md={3}>
						<Grid container justify="center" alignItems="stretch" spacing={4}>
							<Grid item xs={12}>
								<TextField style={{ width: "100%" }} label="Laat ons weten wat je vindt!" multiline value={inputComment} onChange={(event) => { setInputComment(event.target.value) }} />
							</Grid>

							<Grid item xs={12}>
								<div className={classes.uploadButtonWrapper}>
									<Button style={{ width: "100%" }} variant="contained" color="primary" onClick={() => postComment()} disabled={inputComment.length === 0 || uploadingComment}>
										Post
									</Button>
									{uploadingComment && <CircularProgress size={24} className={classes.buttonProgress} />}
								</div>
							</Grid>
						</Grid>

						<Box mt="1vh" />

						<Divider />
						<Box mt="1vh" />

						<Grid container justify="center" alignItems="stretch" spacing={1}>
							{comments.map((comment) => {
								return (
									<Grid item xs={12}>
										<Card>
											<div style={{padding: "8px"}}>
												{comment.content}

												<Typography variant="body2" color="textSecondary" component="p">
													Gepost op: {new Date(comment.createdDate).toLocaleString()}
												</Typography>
												</div>
										</Card>
									</Grid>
								)
							})}
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
