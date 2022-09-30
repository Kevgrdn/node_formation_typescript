import { loadModule } from './modules/modules-loader'
import { module} from '../../api'
import AppServer from './server.class'

export function init() {
    /** Port provenant du .env sinon port 8080*/
    const port = parseInt(process.env.NODE_PORT) || 8080

    const appServer = new AppServer()
    appServer.start(port)

    loadModule(module['todos'], appServer.app)

    appServer.initErrorHandler()
    appServer.start(port)
}
