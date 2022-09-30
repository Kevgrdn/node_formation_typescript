import { describe, expect, test} from '@jest/globals'
import request from 'supertest'
import { AppDataSource} from '../../src/core/db/data-source'
import {init} from '../../src/core/express/app.bootstrap'
import AppServer from '../../src/core/express/server.class'

const createTodoData = {
     name : "Nouvelle Todo Liste"
}

interface Todolist {
    name: string
    todo?: []
    archived: boolean
    id: number
}

let appServer: AppServer
beforeAll(async () => {
    await AppDataSource.initialize()
    appServer = init()
})

describe('Module Todo', () => { 
    test("Création d'un todo", () => { 

        return request(appServer.app)
        .post("/todo")
        .send(createTodoData)
        .set("Accept", "application/json")
        .expect("Content-Type", "application/json; charset=utf-8")
        .expect(200)
        .then(response => {
            expect(response.body.name).toBe(createTodoData.name)
        })

        // const { data } = await axios.post<Todolist>("http://localhost:5050/todos", createTodoData)
        // expect(data.id).toBeGreaterThan(0)
        // expect(data.name).toBe(createTodoData.name)
    })
})
