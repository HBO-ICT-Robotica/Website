import { NextApiRequest, NextApiResponse } from "next";
import TelemetrySession from "../../entities/TelemetrySession.entity";
import awaitConnection from "../../lib/Connection";

export type apiStartTelemetrySessionRequest = {

};

export type apiStartTelemetrySessionResponse = {
	sessionId: string
}

export default async function apiGetLatestTelemetry(req: NextApiRequest & apiStartTelemetrySessionRequest, res: NextApiResponse<apiStartTelemetrySessionResponse>) {
	const connection = await awaitConnection();

	const telemetrySessionRepo = connection.getRepository(TelemetrySession);

	const telemetrySession = new TelemetrySession();

	await telemetrySessionRepo.save(telemetrySession);

	// TODO: Clear out any old sessions

	res
		.status(200)
		.json({
			sessionId: telemetrySession.id
		});
}