import { TodoController, routes} from './todo'
import {ModuleList} from '../common/interfaces'

export const module: ModuleList = {
    'todos': {
        name: "todo",
        routePrefix:"/todo",
        controller: TodoController,
        routes: routes
    }
}