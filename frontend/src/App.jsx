import { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Button, HStack } from '@chakra-ui/react'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Logout from './components/Auth/Logout'
import ResetPassword from './components/Auth/ResetPassword'

const App = () => {
  const [message, setMessage] = useState('Connecting to backend...')

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/check-health')

        if (response.status === 200) {
          setMessage(response.data.message)
        }
      } catch (error) {
        setMessage('Backend is not working...')
      }
    }

    checkHealth()
  }, [])

  return (
    <div>
      <div>{message}</div>
      <Box p={6}>
        <HStack spacing={4} mb={6}>
          <Link to='/login'><Button>Login</Button></Link>
          <Link to='/register'><Button>Register</Button></Link>
          <Link to='/logout'><Button>Logout</Button></Link>
        </HStack>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Box>
    </div>
  )
}

export default App