import React, { useState, useRef, useEffect } from "react"
import TodoList from "./TodoList"
import { v4 as uuidv4 } from "uuid"
import axios from "../api/axios"

const LOCAL_STORAGE_KEY = "todoApp.todos"

const TODO_URL = "/todos"

const Todo = () => {
  const [todos, setTodos] = useState([])

  const fetchData = async () => {
    const response = await axios.get(TODO_URL)
    console.log(response.data)
    setTodos(response.data)
  }

  useEffect(() => {
    fetchData()
    console.log(todos)
  }, [])

  /*   const todayDate = new Date()
  const year = todayDate.getFullYear()
  const month = todayDate.getMonth() + 1
  const day = todayDate.getDate()
  const newTodayDate = year + "-" + month + "-" + day */

  const getDate = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const newDate = year + "-" + month + "-" + day
    return newDate
  }
  const currentDate = getDate(new Date())

  const [todoTitle, setTodoTitle] = useState()
  const [todoDate, setTodoDate] = useState(currentDate)
  const [todoImportance, setTodoImportance] = useState()

  const todoTitleRef = useRef()
  const todoDateRef = useRef()
  const todoImportanceRef = useRef()

  /*   useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])
 */
  /*   useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
 */
  /*   function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo._id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  } */

  const toggleTodo = async (id) => {
    const result = todos.find((todo) => todo._id === id)
    console.log(result)

    const updatedTodo = {
      title: result.title,
      date: result.date,
      importance: result.importance,
      completed: !result.completed,
    }

    try {
      const response = await axios.put(TODO_URL + "/" + id, updatedTodo)
      fetchData()
      console.log(response.data)
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }

  //https://stackabuse.com/making-asynchronous-http-requests-in-javascript-with-axios/
  const handleAddTodo = async () => {
    //if (todoTitle === "" || todoImportance === "") return

    const newPost = {
      title: todoTitle,
      date: getDate(todoDate),
      importance: todoImportance,
      complete: false,
    }
    try {
      const response = await axios.post(TODO_URL, newPost)
      console.log(response.data)
      fetchData()
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
    todoTitleRef.current.value = null
    todoDateRef.current.value = currentDate
    todoImportanceRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const handleSetTitle = (e) => {
    e.preventDefault()
    const value = e.target.value
    setTodoTitle(value)
  }

  const handleSetDate = (e) => {
    e.preventDefault()
    const value = e.target.value
    setTodoDate(value)
  }

  const handleSetImportance = (e) => {
    e.preventDefault()
    const value = e.target.value
    setTodoImportance(value)
  }

  return (
    <>
      <input ref={todoTitleRef} type="text" onChange={handleSetTitle} />
      <input
        ref={todoDateRef}
        type="date"
        value={todoDate}
        onChange={handleSetDate}
      />
      <input
        ref={todoImportanceRef}
        list="data"
        type="text"
        onChange={handleSetImportance}
      />
      <datalist id="data">
        <option value="1" />
        <option value="2" />
        <option value="3" />
        <option value="4" />
        <option value="5" />
      </datalist>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div>{todos.filter((todo) => !todo.completed).length} left to do</div>
      <TodoList todos={todos} toggleTodo={toggleTodo} getDate={getDate} />
    </>
  )
}

export default Todo
