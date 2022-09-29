import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Todo } from './todo'

@Entity()
export class TodoList {
   
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string

    @Column()
    archived: boolean

    @OneToMany(() => Todo, (todo) => todo.todolist)
    todos: Todo[]
}