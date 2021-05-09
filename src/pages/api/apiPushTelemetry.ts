import dateFormat from "dateformat";
import { NextApiRequest, NextApiResponse } from "next";
import Telemetry from "../../entities/Telemetry.entity";
import awaitConnection from "../../lib/Connection";
const base64Img = require('base64-img');

export type apiPushTelemetryRequest = {
	image: string,
};

export type apiPushTelemetryResponse = {

}

export default async function apiPushTelemetry(req: NextApiRequest & apiPushTelemetryRequest, res: NextApiResponse<apiPushTelemetryResponse>) {
	const connection = await awaitConnection();

	const now = new Date();
	const filename = dateFormat(now, "'stream'_dd-mm-yyyy_HH-MM-ss");

	const imageData = "data:image/png;base64," + req.body.image;

	base64Img.img(imageData, "public/uploads", filename, (err: boolean, filepath: string) => {
		if (err)
			return;

		const imageUrl = `uploads/${filename}.png`;

		const telemetryRepo = connection.getRepository(Telemetry);

		const telemetry = new Telemetry();
		telemetry.imageUrl = imageUrl;

		telemetryRepo.save(telemetry);
	});

	res
		.status(200)
		.end();
}