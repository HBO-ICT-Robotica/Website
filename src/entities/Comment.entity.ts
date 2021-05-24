import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Comment {
	@PrimaryGeneratedColumn("uuid")
	id: number;

	@Column("longtext")
	content: string;

	@CreateDateColumn()
	createdDate: Date;
}