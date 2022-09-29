import "reflect-metadata"
import { DataSource } from "typeorm"

/** Entités */

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'db.sqlite',
    synchronize: true,
    logging: true,
    entities: [],
    migrations:[],
})