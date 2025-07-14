import { useEffect, useState } from 'react'
import axios from 'axios'

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
    <div>{message}</div>
  )
}

export default App