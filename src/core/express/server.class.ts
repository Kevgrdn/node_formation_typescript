import express, { Express } from "express"

class AppServer {
    app: Express;

    constructor() {
        this.app = express()
        this.registerDefaultMiddleware()
    }

    registerDefaultMiddleware(){
        this.app.use(express.json())
    }
}

