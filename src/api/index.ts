import { TodoController, routes} from './todo'
import {ModuleList} from '../common/interfaces'

export const module: ModuleList = {
    'todos': {
    controller: TodoController,
    routes: routes
}}