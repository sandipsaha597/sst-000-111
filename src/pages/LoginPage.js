import { Button, TextField, Typography } from '@mui/material'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const LoginPage = () => {
  const usernameInputRef = useRef()
  const passwordInputRef = useRef()
  const { login } = useAuth()

  return (
    <>
      <Typography component="h1" variant="h3">
        Login page
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const usernameInput = usernameInputRef.current.querySelector('input')
          const passwordInput = passwordInputRef.current.querySelector('input')
          login(usernameInput.value, passwordInput.value)
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
          Login
        </Button>
      </form>
      <Typography>
        Don't have an account? <Link to="/accounts/sign-up">Sign up</Link>
      </Typography>
    </>
  )
}

export default LoginPage
