import React from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
const AppHeader = React.memo(() => {
  const { userDetails, logout } = useAuth()
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mx: 2,
      }}
      component="header"
    >
      <Typography component="h1" variant="h3">
        Retrospective
      </Typography>
      <Box sx={{ position: 'absolute', right: 0 }}>
        <Typography component="span" variant="p" mr={2}>
          {userDetails.username}
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/user/my-cards"
          sx={{ mr: 1 }}
        >
          My Cards
        </Button>
        <Button variant="contained" color="error" onClick={() => logout()}>
          Log out
        </Button>
      </Box>
    </Box>
  )
})

export default AppHeader
