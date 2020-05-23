import React from 'react'

export const Todo = ({ todo, checkboxAction, buttonAction }) => {
    return (
        <input id={todo.id}
            type="checkbox"
            checked={todo.completed}
            onChange={checkboxAction}
            value={todo.text} />
    )
}


