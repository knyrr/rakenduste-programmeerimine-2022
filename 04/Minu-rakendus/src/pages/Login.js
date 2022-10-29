//https://www.youtube.com/watch?v=X3qyxo_UTR4

import { useRef, useState, useEffect, useContext } from "react"
//import AuthContext from "../context/AuthProvider"
import { UserContext } from "../App"
import axios from "../api/axios"
import { NavLink } from "react-router-dom"

const LOGIN_URL = "/user/login"

const Login = () => {
  const [currentUser, setCurrentUser] = useContext(UserContext)
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState("")
  const [pwd, setPwd] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg("")
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("1")
    try {
      console.log("2")
      const response = await axios.post(LOGIN_URL, {
        email: user,
        password: pwd,
      })
      console.log(response.data.name)
      if (response.data.name) {
        const token = response?.data?.token
        const name = response?.data?.name
        const localUser = { name: name, token: token }
        sessionStorage.setItem("user", JSON.stringify(localUser))
        setCurrentUser({ name, token })
        setUser("")
        setPwd("")
        setSuccess(true)
      } else {
        throw 500
        console.log("myException")
      }
      //console.log(response?.data)
      //console.log(JSON.stringify(response));
    } catch (err) {
      console.log(err)
      if (!err?.response) {
        setErrMsg("No Server Response")
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password")
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized")
      } else {
        setErrMsg("Login Failed")
      }
      errRef.current.focus()
    }
  }

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              <NavLink to="../signup">Registreeri</NavLink>
            </span>
          </p>
        </section>
      )}
    </>
  )
}

export default Login
