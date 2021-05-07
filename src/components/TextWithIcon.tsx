import { Grid, Typography } from "@material-ui/core"
import React from "react"

export type TextWithIconProps = {
	icon: JSX.Element,
	text: string,
}

export default function TextWithIcon({ icon, text }: TextWithIconProps) {
	return (
		<Typography gutterBottom variant="h6" component="h2">
			<Grid container direction="row" alignItems="center">
				{icon} {text}
			</Grid>
		</Typography>
	);

}