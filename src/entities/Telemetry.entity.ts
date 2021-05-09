import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export default class Telemetry {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	imageUrl: string;

	@CreateDateColumn()
  createdDate: Date;
}