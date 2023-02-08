import Cookies from 'js-cookie'
import Signup from './Signup'
import Profile from './Profile'
import Login from './Login'

function App() {

  const logout = () => {
    Cookies.remove('token')
    setUser(null)
  }
  return (
    <div className='App'>
      <Login />
      <button onClick={logout}>LOGOUT</button>
      <Signup/>
    </div>
  )
}

export default App
