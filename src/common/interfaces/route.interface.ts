import { CrudControllerAction } from "./controller.class";

export type RouteMethod = 'get' | 'post' | 'patch' | 'put' | 'delete'

/** Interface représentant les données necessaires pour une route */
export interface ApiRoute {
    path: string,
    method: RouteMethod,
    action: CrudControllerAction
}