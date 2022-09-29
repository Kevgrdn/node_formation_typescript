import "reflect-metadata"
import { DataSource } from "typeorm"
import { TodoList, Todo  } from "../entities";

/** Entités */

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'db.sqlite',
    synchronize: true,
    logging: true,
    entities: [TodoList, Todo],
    migrations:[],
})