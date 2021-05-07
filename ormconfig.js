require('dotenv').config({
	path: `.env.${process.env.NODE_ENV === "production" ? "production" : "development"}`
})

console.log(`.env.${process.env.NODE_ENV === "production" ? "production" : "development"}`);

export const type = "mysql"

export const host = process.env.DB_HOST
export const port = process.env.DB_PORT
export const username = process.env.DB_USERNAME
export const password = process.env.DB_PASSWORD
export const database = process.env.DB_DATABASE

export const synchronize = false
export const logging = true

export const entities = ["src/entities/**/*.entity.ts",]
export const migrations = ["migrations/**/*.ts"]
export const subscribers = []

export const cli = {
	migrationsDir: "migrations",
}