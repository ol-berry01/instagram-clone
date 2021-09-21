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

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img className="max-w-full" src="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png" alt="iPhone with Instagram on screen" />
      </div>

      <div className="flex flex-col w-2/5">
        <p>I will be the form</p>
      </div>
    </div>
  )
}

export default Login
