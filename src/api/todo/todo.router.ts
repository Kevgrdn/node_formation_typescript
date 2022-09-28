import {Router} from 'express'
import { ApiRoutes } from '../../common/interfaces/routes.class'

const routes: ApiRoutes[] = [{
    method:"get",
    action:"getAll",
    path: "/"
}]

export default routes
