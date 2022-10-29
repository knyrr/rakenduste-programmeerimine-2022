import React, { useState, createContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import Main from "./pages/Main"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import Todo from "./pages/Todo"
import Signup from "./pages/Signup"

export const UserContext = createContext()

const App = () => {
  const [currentUser, setCurrentUser] = useState(
    window.sessionStorage.getItem("user")
  )

  return (
    <BrowserRouter>
      <UserContext.Provider value={[currentUser, setCurrentUser]}>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Main />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </UserContext.Provider>
    </BrowserRouter>
  )
}
export default App
