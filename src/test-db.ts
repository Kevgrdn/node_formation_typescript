import { TodoList, Todo } from './core/entities'
import { AppDataSource } from './core/db/data-source'

const todolistRepository = AppDataSource.getRepository(TodoList)
const todoRepository = AppDataSource.getRepository(Todo)

/** Création des tables dans la BDD. */
export async function createTestTodoList(): Promise<TodoList> {
    const todolist = new TodoList()
    todolist.name = "Ma premiere liste"
    todolist.archived = false

    return todolistRepository.save(todolist)
}

/** Récupération d'une TodoList par son Id. */
export function getTodoListById(id:number) {
    return todolistRepository.findOne({ where:  {id}, relations: {
        todos:true
    } })
}

/** Ajout d'un Todo à une TodoList */
export async function addTodo(todolist: TodoList, text: string) {
    const todo =  todoRepository.create({text, todolist: todolist})
    await todoRepository.save(todo)

    const freshTodoList = await getTodoListById(todolist.id)
    console.log(freshTodoList);
    
}

/** Récupère tous les Todo. */
export async function getAllTodo() {
    const list = await todoRepository.find()
}