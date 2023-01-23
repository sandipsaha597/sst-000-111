import { Outlet, Route, Routes } from 'react-router-dom'
import useAuth from './hooks/useAuth'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import MyCardsPage from './pages/MyCardsPage'
import SignupPage from './pages/SignUpPage'
import NoAuth from './utils/components/NoAuth'
import RequireAuth from './utils/components/RequireAuth'

function App() {
  const { isLoggedIn } = useAuth()
  return (
    <div className="App">
      <Routes>
        <Route index element={isLoggedIn ? <HomePage /> : <LoginPage />} />
        <Route
          element={
            <RequireAuth {...{ isLoggedIn }}>
              <Outlet />
            </RequireAuth>
          }
        >
          {/* Protected routes */}
          <Route path="/user/my-cards" element={<MyCardsPage />} />
        </Route>
        <Route
          element={
            <NoAuth {...{ isLoggedIn }}>
              <Outlet />
            </NoAuth>
          }
        >
          {/* can't visit these routes if logged in */}
          <Route path="/accounts/login" element={<LoginPage />} />
          <Route path="/accounts/sign-up" element={<SignupPage />} />
        </Route>
        <Route path="*" element={<h1>Page does not exist</h1>} />
      </Routes>
    </div>
  )
}

export default App
