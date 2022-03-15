import { FC } from "react";
import '../styles/styles.css'

interface todoItemProps {
    id: string
    name: string;
}

export const TodoItemComponent: FC<todoItemProps> = ({id, name}) => {
    return (
        <div className="todoRow">
            <input type="checkbox" id={id} name={name} />
            <label htmlFor={name}>{name}</label>
        </div>
    );
}