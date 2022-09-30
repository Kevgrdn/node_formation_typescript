import { loadModule } from "./modules/modules-loader";
import { module } from '../../api'
import AppServer from "./server.class";

export function init() {
    const port = parseInt(process.env.PORT) || 8080

    const appServer = new AppServer()
    
    loadModule(module['todos'], appServer.app)

    appServer.initErrorHandler()
    appServer.start(port)

    return appServer
}