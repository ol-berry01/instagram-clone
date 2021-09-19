import React, { useState, useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"

// Import firebase context
import FirebaseContext from "../context/firebase"

const Login = () => {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState("")
  const isInvalid = password === "" || emailAddress === ""

  const handleLogin = () => {}

  useEffect(() => {
    document.title = "Login - My-Instagram"
  }, [])

  return <>I am the login page</>
}

export default Login
