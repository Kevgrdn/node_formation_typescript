import { config } from 'dotenv'
import { init } from './core/express/app.bootstrap'

/** Lecture du fichier .env */
config()

/** Initialisation du serveur */
init()