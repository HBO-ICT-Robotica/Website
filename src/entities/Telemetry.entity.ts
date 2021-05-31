import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm"
import TelemetrySession from "./TelemetrySession.entity";

@Entity()
export default class Telemetry {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne("TelemetrySession", "telemetries")
	session: TelemetrySession;

	@Column()
	imageUrl: string;

	@CreateDateColumn()
	createdDate: Date;
}