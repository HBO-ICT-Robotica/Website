import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

export type CarouselImageProps = {
	src: string,
	key: number,
};

const useStyles = makeStyles((theme) => ({
	wrapper: {
		height: "25vh",
		position: "relative",
	},

	container: {
		position: "absolute",
		width: "100%",
		height: "100%",
	},

	image: {
		height: "100%",
		width: "auto",
	},

	imageFillContainer: {
		height: "100%",
		width: "100%",
		overflow: "hidden",
	},

	imageFill: {
		height: "100%",
		width: "100%",
		filter: "blur(8px)",
		objectFit: "cover",
		transform: "scale(1.1)",
	}
}));

export default function CarouselImage(props: { src: string, key: number }) {
	const classes = useStyles();

	return (
		<div className={classes.wrapper} key={props.key}>
			<Grid container className={classes.container} justify="center" alignItems="stretch">
				<div className={classes.imageFillContainer}>
					<img
						src={props.src}
						className={classes.imageFill}
					/>
				</div>
			</Grid>

			<Grid container className={classes.container} justify="center" alignItems="center">

				<img
					src={props.src}
					className={classes.image}
				/>


			</Grid>



		</div>
	);
}
