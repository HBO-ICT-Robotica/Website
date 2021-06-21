import { NextApiRequest, NextApiResponse } from "next";
import { FindOneOptions } from "typeorm";
import Telemetry from "../../entities/Telemetry.entity";
import awaitConnection from "../../lib/Connection";

export type apiGetLatestTelemetryRequest = {

};

export type apiGetLatestTelemetryResponse = {
	imageUrl: string,
	servos: Array<number>,
	motors: Array<number>,
	weight: number,
	battery: number,
	mode: string,
	success: boolean
}

export default async function apiGetLatestTelemetry(req: NextApiRequest & apiGetLatestTelemetryRequest, res: NextApiResponse<apiGetLatestTelemetryResponse>) {
	const connection = await awaitConnection();

	const telemetryRepo = connection.getRepository(Telemetry);

	const findOneOptions: FindOneOptions<Telemetry> = {
		order: {
			createdDate: "DESC"
		}
	}

	const latestTelemetry = await telemetryRepo.findOne(findOneOptions);

	res
		.status(200)
		.json({
			imageUrl: latestTelemetry.imageUrl,
			servos: [0, 0, 0, 0, 0],
			motors: [0, 0, 0, 0],
			weight: 0.0,
			battery: 64,
			mode: "xcontroller",
			success: true
		});
}