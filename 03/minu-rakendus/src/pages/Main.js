import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Stack,
  TextField,
  Typography
} from "@mui/material"
import React, { useEffect, useState } from "react"

const Main = () => {
  const [posts, setPosts] = useState(null)
  const [inputTitle, setInputTitle] = useState(null)
  const [inputBody, setInputBody] = useState(null)

  async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 8000 } = options

    const controller = new AbortController()
    const id = setTimeout(() => controller.abort(), timeout)
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal
    })
    clearTimeout(id)
    return response
  }

  async function fetchPosts() {
    try {
      const response = await fetchWithTimeout(
        "https://jsonplaceholder.typicode.com/posts",
        {
          timeout: 6000
        }
      )
      const responseJSON = await response.json()
      setPosts(responseJSON)
      console.log(responseJSON)
    } catch (error) {
      // Timeouts if the request takes longer than 6 seconds
      console.log(error.name)
    }
  }

  useEffect(() => {
    fetchPosts().then(console.log("Kõik postitused:", posts))
  }, [])

  async function modifyPost() {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
          id: 1,
          title: inputTitle,
          body: inputBody,
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => console.log(json))
    } catch (error) {
      console.log(error.name)
    }
  }

  return (
    <>
      <Typography variant="h2">Main</Typography>

      {posts && (
        <>
          <Typography variant="h4">Esimene postitus</Typography>
          <Typography variant="h6">Pealkiri: {posts[0].title}</Typography>
          <Typography>Sisu: {posts[0].body}</Typography>
        </>
      )}

      <Typography variant="h4">Muuda esimest postitust</Typography>
      <Stack>
        <TextField
          id="my-input-title"
          label="Pealkiri"
          onChange={e => setInputTitle(e.target.value)}
          //defaultValue={posts ? posts[0].title : undefined}
          variant="outlined"
        />

        <TextField
          id="my-input-body"
          label="Sisu"
          multiline
          maxRows={4}
          onChange={e => setInputBody(e.target.value)}
          variant="outlined"
        />
        <Button
          color="error"
          variant="contained"
          onClick={() => {
            modifyPost()
          }}
        >
          Saada
        </Button>
      </Stack>
    </>
  )
}

export default Main
