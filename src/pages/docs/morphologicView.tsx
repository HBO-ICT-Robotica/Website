import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';
import Header from '../../components/Header';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

type Solution = {
	description: string,
	image: string,
};

type Functionality = {
	name: string,
	subFunctions: Array<string>

	solutions: Array<Solution>;
};

type Concept = {
	name: string,
	solutions: Array<number>,
}

const functionalities: Array<Functionality> = [
	{
		name: "Mobiliteit",
		subFunctions: [],
		solutions: [
			{ description: "Wielen", image: "/mobiliteit/wielen.png" },
			{ description: "Poten", image: "/mobiliteit/poten.png" },
			{ description: "Rupsbanden", image: "/mobiliteit/rupsbanden.png" },
			{ description: "Omniwheel", image: "/mobiliteit/omniwheel.png" },
			{ description: "RHex", image: "/mobiliteit/rhex.png" },
			{ description: "Draaiende as", image: "/mobiliteit/draaiende_as.png" },
			{ description: "Draaiende rupsbanden", image: "/mobiliteit/draaiende_rupsbanden.png" },
			{ description: "Wielen op poten", image: "/mobiliteit/wielen_op_poten.png" },
			{ description: "Transformerende wielen", image: "/mobiliteit/transformerende_wielen.png" },
			{ description: "Vine robot", image: "/mobiliteit/vinerobot.png" },
		],
	},

	{
		name: "Traplopen",
		subFunctions: [],
		solutions: [
			{ description: "Herbruik mobiliteit", image: "/hergebruik.png" },
			{ description: "Propeller", image: "/trap_lopen/propeller.png" },
			{ description: "Springveer", image: "/trap_lopen/springveer.png" },
			{ description: "Piston", image: "/trap_lopen/piston.png" },
			{ description: "Dubbelzijdigtape", image: "/trap_lopen/dubbelzijdigtape.png" },
		]
	},

	{
		name: "In grind",
		subFunctions: [],
		solutions: [
			{ description: "Herbruik mobiliteit", image: "/hergebruik.png" },
			{ description: "Wielen met veel grip", image: "/in_grind/wielen_met_veel_grip.png" },
			{ description: "Grote wielen", image: "/in_grind/grote_wielen.png" },
			{ description: "Suspensie veren", image: "/in_grind/suspensie_veren.png" },
			{ description: "Kettingband", image: "/in_grind/kettingband.png" },
		]
	},

	{
		name: "Kloof overbruggen",
		subFunctions: [],
		solutions: [
			{ description: "Herbruik mobiliteit", image: "/hergebruik.png" },
			{ description: "Snelheid", image: "/kloof_overbruggen/snelheid.png" },
			{ description: "Lengte", image: "/kloof_overbruggen/lengte.png" },
			{ description: "Propeller", image: "/kloof_overbruggen/propeller.png" },
			{ description: "Springveer", image: "/kloof_overbruggen/springveer.png" },
			{ description: "Driewieler", image: "/kloof_overbruggen/driewieler.png" },
			{ description: "Vliegend wiel in midden", image: "/kloof_overbruggen/vliegend_wiel_in_midden.png" },
			{ description: "Brug bouwen", image: "/kloof_overbruggen/brug_bouwen.png" },
			{ description: "Veel wielen", image: "/kloof_overbruggen/veel_wielen.png" },
		]
	},

	{
		name: "Heling beklimmen",
		subFunctions: [],
		solutions: [
			{ description: "Herbruik mobiliteit", image: "/hergebruik.png" },
			{ description: "Grijpgeweer", image: "/helling_beklimmen/grijpgeweer.png" },
			{ description: "Zuigkracht", image: "/helling_beklimmen/zuigkracht.png" },
			{ description: "Propeller", image: "/helling_beklimmen/propeller.png" },
			{ description: "Dubbekzijdigtape", image: "/helling_beklimmen/dubbelzijdigtape.png" },
		]
	},

	{
		name: "Gecontroleerd helling af",
		subFunctions: [],
		solutions: [
			{ description: "Herbruik mobiliteit", image: "/hergebruik.png" },
			{ description: "Anker", image: "/gecontrolleerd_helling_af/anker.png" },
			{ description: "Grijpgeweer", image: "/gecontrolleerd_helling_af/grijpgeweer.png" },
			{ description: "Dubbelzijdigtape", image: "/gecontrolleerd_helling_af/dubbelzijdigtape.png" },
			{ description: "Verticale propeller", image: "/gecontrolleerd_helling_af/propeller.png" },
			{ description: "Remblokjes", image: "/gecontrolleerd_helling_af/remblokjes.png" },
			{ description: "Zuigkracht", image: "/gecontrolleerd_helling_af/zuigkracht.png" },
			{ description: "Electronisch", image: "/gecontrolleerd_helling_af/electronisch.png" },
		],
	},

	{
		name: "Voorwerp oppakken",
		subFunctions: [],
		solutions: [
			{ description: "Arm met klauw", image: "/voorwerp_oppakken/arm_met_klauw.png" },
			{ description: "Klauw", image: "/voorwerp_oppakken/klauw.png" },
			{ description: "Zuigkracht", image: "/voorwerp_oppakken/zuigkracht.png" },
			{ description: "Plakkerig goedje", image: "/voorwerp_oppakken/plakkerig_goedje.png" },
			{ description: "Zuignap", image: "/voorwerp_oppakken/zuignap.png" },
			{ description: "Opvegen", image: "/voorwerp_oppakken/opvegen.png" },
			{ description: "Magnetisch", image: "/voorwerp_oppakken/magnetisch.png" },
		],
	},

	{
		name: "Voorwerp vervoeren",
		subFunctions: [],
		solutions: [
			{ description: "Herbruik voorwerp oppakken", image: "/hergebruik.png" },
			{ description: "Bakje", image: "/voorwerp_vervoeren/bakje.png" },
		],
	},

	{
		name: "Voorwerp wegen",
		subFunctions: [],
		solutions: [
			{ description: "Inbouwen in voorwerp oppakken", image: "/hergebruik.png" },
			{ description: "Inbouwen in voorwerp vervoeren", image: "/hergebruik.png" },
		],
	},

	{
		name: "Electronica huisvestigen",
		subFunctions: [],
		solutions: [
			{ description: "Intern", image: "/electronica_huisvestigen/intern.png" },
			{ description: "Extern", image: "/electronica_huisvestigen/extern.png" },
		],
	},
];

const concepts: Array<Concept> = [
	{
		name: "Shoebox",
		solutions: [2, 0, 2, 6, 4, 5, 0, 0, 0, 1],
	},

	{
		name: "Innovator",
		solutions: [5, 0, 4, 8, 0, 5, 1, 1, 1, 1],
	},

	{
		name: "Flying Rupsman",
		solutions: [9, 1, 0, 3, 3, 1, 2, 0, 0, 0],
	},

	{
		name: "Yeet",
		solutions: [3, 2, 3, 4, 0, 7, 2, 0, 0, 0],
	},

	{
		name: "Djancer",
		solutions: [7, 0, 1, 2, 0, 7, 1, 0, 0, 0],
	},


	{
		name: "Rando",
		solutions: [1, 0, 4, 0, 3, 6, 3, 0, 1, 1],
	},
];

export default function MorphologicView() {
	const classes = useStyles();

	return (
		<>
			<Header/>

			<Grid container direction="row" justify="center" alignItems="center">
				<Grid item xs={12}>
					<Box margin={2}/>
					<Typography variant="h4">
						Morfologisch overzicht
					</Typography>

					<TableContainer component={Paper}>
						<Table className={classes.table} aria-label="simple table">
							<TableBody>
								{functionalities.map((functionality) => (
									<TableRow>
										<TableCell>
											<Typography align="center">
												<Box fontWeight="fontWeightBold">
													{functionality.name}
												</Box>
												{functionality.subFunctions.map((subFunction) => (
													<div>
														({subFunction})
													</div>
												))}
											</Typography>
										</TableCell>

										{functionality.solutions.map((solution) => (
											<TableCell>
												<Grid container direction="column" justify="center" alignItems="center">
													<Grid item xs={12}>
														<img className="center" src={solution.image} width={160} height={90} />
													</Grid>

													<Grid item xs={12}>
														<Typography align="center">
															{solution.description}
														</Typography>
													</Grid>
												</Grid>
											</TableCell>
										))}
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>

				{concepts.map((concept, index) => (
					<>
						<Box margin={2}/>

						<Grid item xs={3}>
							<Typography variant="h4">
								Concept {index + 1}: '{concept.name}'
							</Typography>

							<TableContainer component={Paper}>
								<Table className={classes.table} aria-label="simple table">
									<TableBody>
										{functionalities.map((functionality, fIndex) => (
											<TableRow>
												<TableCell>
													<Typography align="center">
														<Box fontWeight="fontWeightBold">
															{functionality.name}
														</Box>
													</Typography>
												</TableCell>

												<TableCell>
													<Grid container direction="column" justify="center" alignItems="center">
														<Grid item xs={12}>
															<img className="center" src={functionality.solutions[concept.solutions[fIndex]].image} width={160} height={90} />
														</Grid>

														<Grid item xs={12}>
															<Typography align="center">
																{functionality.solutions[concept.solutions[fIndex]].description}
															</Typography>
														</Grid>
													</Grid>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Grid>
					</>
				))}
			</Grid>
		</>
	);
}