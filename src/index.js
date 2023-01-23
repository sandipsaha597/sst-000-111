import { ThemeProvider } from '@mui/material'
import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import appTheme from './appTheme/AppTheme'
import './index.css'
import retrospectiveCardsReducer from './reducers/retrospectiveCardsReducer'
import authReducer from './reducers/authReducer'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))

const store = configureStore({
  reducer: { authReducer, retrospectiveCardsReducer },
})
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
