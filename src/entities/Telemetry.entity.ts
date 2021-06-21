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

	// @Column("float", { array: true })
	// servos: number[];

	// @Column("int", { array: true })
	// targetDegrees: number[];

	// @Column("float", { array: true })
	// motors: number[];

	@CreateDateColumn()
	createdDate: Date;
}