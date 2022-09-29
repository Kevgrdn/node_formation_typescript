import { config } from 'dotenv'
import { init } from './core/express/app.bootstrap'
import { AppDataSource } from './core/db/data-source'
import { createTestTodoList } from './test-db'

/** Lecture du fichier .env */
config()

/** Initialisation BDD. */
AppDataSource.initialize().then(() => {
    
    /** Initialisation du serveur */
    init()

    /** Initialisation du test-db */
    createTestTodoList().then(console.log);
})


