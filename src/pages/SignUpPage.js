import { Button, TextField, Typography } from '@mui/material'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const SignupPage = () => {
  const usernameInputRef = useRef()
  const passwordInputRef = useRef()
  const { signUp } = useAuth()

  return (
    <>
      <Typography component="h1" variant="h3">
        Signup page
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const usernameInput = usernameInputRef.current.querySelector('input')
          const passwordInput = passwordInputRef.current.querySelector('input')
          signUp(usernameInput.value, passwordInput.value)
        }}
      >
        <TextField ref={usernameInputRef} required label="username" />
        <TextField
          ref={passwordInputRef}
          required
          label="password"
          type="password"
        />
        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </form>
      <Typography>
        Already have an account? <Link to="/accounts/login">Login</Link>
      </Typography>
    </>
  )
}

export default SignupPage
