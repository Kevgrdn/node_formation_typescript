import { Controller } from "./controller.interface";
import { ApiRoutes } from "./routes.interface";

export interface Module {
    controller: Controller,
    routes: ApiRoutes[]
    routePrefix: string
    name: string
}

export interface ModuleList{
    [key: string | symbol]: Module
}