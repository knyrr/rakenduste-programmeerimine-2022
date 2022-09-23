import { Box, Button, Typography } from "@mui/material"
import React, { useState } from "react"
import Counter from "./components/Counter"
import Toggle from "./components/Toggle"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import Error from "./pages/Error"
import ProfileSettings from "./pages/ProfileSettings"
import User from "./pages/User"
import List from "./pages/List"
import ContactForm from "./pages/ContactForm"
import Header from "./components/Header"
import SharedLayout from "./pages/SharedLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<SharedLayout />}
        >
          <Route
            index
            element={<Main />}
          />
          <Route
            path="contact-form"
            element={<ContactForm />}
          />
          <Route
            path="profile-settings"
            element={<ProfileSettings />}
          />
          <Route
            path="user"
            element={<User />}
          />
          <Route
            path="list"
            element={<List />}
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
