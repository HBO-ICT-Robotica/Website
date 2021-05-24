import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import TextWithIcon from "./TextWithIcon";
import BuildIcon from '@material-ui/icons/Build';
import ComputerIcon from '@material-ui/icons/Computer';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';

export type AboutCardProps = {
	discipline: "WTB" | "ICT" | "ELT",
	name: string,

	children: React.ReactNode
}

const useStyles = makeStyles((theme) => ({
	card: {
		height: "100%"
	}
}));

export default function AboutCard({ discipline, name, children }: AboutCardProps) {
	const classes = useStyles();

	var disiplineIcon = (<></>);
	switch (discipline) {
		case "WTB":
			disiplineIcon = (<BuildIcon />);
			break;
		case "ICT":
			disiplineIcon = (<ComputerIcon />);
			break;
		case "ELT":
			disiplineIcon = (<BatteryChargingFullIcon />);
			break;
	}

	return (
		<>
			<Card className={classes.card}>
				<CardContent>
					<TextWithIcon
						icon={disiplineIcon}
						text={name}
					/>
					{children}
				</CardContent>
			</Card>
		</>
	);
}