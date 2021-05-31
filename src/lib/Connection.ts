import { Connection, ConnectionOptions, createConnection, getConnection } from "typeorm";
import Comment from "../entities/Comment.entity";
import Telemetry from "../entities/Telemetry.entity";
import TelemetrySession from "../entities/TelemetrySession.entity";

const connectionOptions: ConnectionOptions = {
	type: "mysql",
	host: process.env.DB_HOST,
	port: /*process.env.DB_PORT*/3306,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,

	synchronize: false,
	logging: true,

	entities: [
		Comment,

		Telemetry,
		TelemetrySession,
	]
};

let connectionReadyPromise: Promise<Connection> | undefined = undefined;

function connectionPromise() {
	if (!connectionReadyPromise) {
		connectionReadyPromise = new Promise<Connection>(async (resolve, reject) => {
			try {
				const staleConnection = getConnection();
				await staleConnection.close();
			} catch (error) {
				
			}

			try {
				const connection = await createConnection(connectionOptions);
				resolve(connection);
			} catch(e) {
				reject(e);
			}
		});
	}

	return connectionReadyPromise;
}

export default connectionPromise;