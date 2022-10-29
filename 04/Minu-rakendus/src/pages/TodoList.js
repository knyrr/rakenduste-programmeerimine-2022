import React from "react"
import TodoItem from "./TodoItem"

export default function TodoList({ todos, toggleTodo, getDate, deleteTodo }) {
  return todos.map((todo) => {
    return (
      <TodoItem
        key={todo._id}
        toggleTodo={toggleTodo}
        todo={todo}
        getDate={getDate}
        deleteTodo={deleteTodo}
      />
    )
  })
}
