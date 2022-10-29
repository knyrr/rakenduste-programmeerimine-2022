import React from "react"
import { Button } from "@mui/material"

export default function TodoItem({ todo, toggleTodo, getDate, deleteTodo }) {
  function handleTodoClick() {
    toggleTodo(todo._id)
  }

  function handleTodoDelete() {
    deleteTodo(todo._id)
  }

  const date = getDate(new Date(todo.date))

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleTodoClick}
        />
        {todo.title}
        {date}
        {todo.importance}
        <Button onClick={handleTodoDelete}>Kustuta</Button>
      </label>
    </div>
  )
}
