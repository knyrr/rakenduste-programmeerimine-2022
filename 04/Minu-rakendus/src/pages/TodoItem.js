import React from "react"

export default function TodoItem({ todo, toggleTodo, getDate }) {
  function handleTodoClick() {
    toggleTodo(todo._id)
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
      </label>
    </div>
  )
}
