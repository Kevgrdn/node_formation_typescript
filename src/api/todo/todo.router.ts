import { ApiRoutes } from '../../common/interfaces/routes.interface'

const routes: ApiRoutes[] = [
{
    method:"get",
    action:"getAll",
    path: "/"
},
{
    method:"get",
    action:"getOne",
    path: "/:id"
},
{
    method: "post",
    action: "create",
    path:"/"
},
{
    method: "put",
    action: "update",
    path:"/:id"
},
{
    method: "delete",
    action: "remove",
    path:"/:id"
},
{
    method: "patch",
    action: "replace",
    path:"/:id"
},]

export default routes
