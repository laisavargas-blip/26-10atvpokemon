import KnexConfig from "knex"
import "dotenv/KnexConfig"

export const knex = KnexConfig({
    client: "pg",
    connection: {},
    debug: true 
})