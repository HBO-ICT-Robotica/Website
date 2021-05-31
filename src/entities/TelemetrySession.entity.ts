import { Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";
import Telemetry from "./Telemetry.entity";

@Entity()
export default class TelemetrySession {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@CreateDateColumn()
	startDate: Date;

	@OneToMany("Telemetry", "telemetry.session", {
		cascade: false,
		eager: true,
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	})
	telemetries: Telemetry[];
}