import AppServer from './server.class'

/** Port provenant du .env sinon port 8080*/
export function init() {
    const port = parseInt(process.env.NODE_PORT) || 8080

    const appServer = new AppServer()
    appServer.start(port)
}
