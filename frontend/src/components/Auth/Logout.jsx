import { useEffect } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import axios from 'axios'

const Logout = () => {
  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post('http://127.0.0.1:8000/auth/logout/', null, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
      } catch {}
    }
    logout()
  }, [])

  return (
    <Box>
      <Heading  color='green.500'>You have been logged out.</Heading>
    </Box>
  )
}

export default Logout
