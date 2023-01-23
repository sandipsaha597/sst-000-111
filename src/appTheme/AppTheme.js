import { createTheme } from '@mui/material'

const appTheme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#ededed',
  //   },
  // },
  shape: {
    borderBottomRightRadius: 4,
  },
  shadows: [
    'none',
    'rgba(0, 0, 0, 15%) 1px 1px 2px;',
    'rgb(0 0 0 / 15%) 3px 2px 3px',
    'rgb(0 0 0 / 23%) 3.7px 2px 3px',
  ],
})

export default appTheme
