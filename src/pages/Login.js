import React, { useState, useEffect, useContext } from "react"
import { Link, useHistory } from "react-router-dom"

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
        <div className="flex flex-col items-center bg-white mb-4 p-4 order border-grey-primary">
          <h1 className="flex justify-center w-full">
            <img className="mt-2 mb-4 w-6/12" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="" />
          </h1>

          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleLogin} method="POST">
            <input aria-label="Enter your email address" type="email" placeholder="Email Address" className="text-sm text-grey-base w-full mb-2 mr-3 px-4 py-5 h-2 border border-grey-primary rounded " onChange={({ target }) => setEmailAddress(target.value)} />

            <input aria-label="Enter your password" type="password" placeholder="Password" className="text-sm text-grey-base w-full mb-2 mr-3 px-4 py-5 h-2 border border-grey-primary rounded " onChange={({ target }) => setPassword(target.value)} />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-500 text-white w-full rounded h-8 font-bold
            ${isInvalid && "opacity-50"}`}
            >
              Login
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-flull bg0white p-4 border border-grey-primary">
          <p className="text-sm">
            Don't have an account?{` `}
            <Link className="font-bold text-blue-medium" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login

// text-red-primary
// text-blue-medium
// text-grey-base
// border-grey-primary
// bg-blue-medium
