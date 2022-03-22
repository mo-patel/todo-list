import { FC } from "react";
import '../styles/styles.css'
import {TodoItem} from '../types/todoItem'
interface TodoItemProps {
    todo: TodoItem;
    showDelete: boolean;
    onChangeCb: (id: string)=> void;
    onDeleteCb?: (id: string) => void;
}
export const TodoItemComponent: FC<TodoItemProps> = ({todo, showDelete, onChangeCb, onDeleteCb}) => {
    return (
        <div className="todoRow">
            <div className="todoLabel">
                <input type="checkbox" id={todo.id} checked={todo.checked} onChange={() => onChangeCb(todo.id)} />
                <label htmlFor={todo.id}>{todo.name}</label>
            </div>
            {showDelete ?
                <img className="deleteImg" src="/bin.png" alt="delete" onClick={onDeleteCb? ()=> onDeleteCb(todo.id): undefined}/> :
                null
            }
        </div>
    );
}