import { FC } from "react";
import '../styles/styles.css'
import {TodoItem} from '../types/todoItem'
interface TodoItemProps {
    todo: TodoItem;
    onChangeCb: (id: string)=> void;
}
export const TodoItemComponent: FC<TodoItemProps> = ({todo, onChangeCb}) => {
    return (
        <div className="todoRow">
            <input type="checkbox" id={todo.id} name={todo.name} checked={todo.checked} onChange={() => onChangeCb(todo.id)} />
            <label htmlFor={todo.name}>{todo.name}</label>
        </div>
    );
}