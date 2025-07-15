import { useState } from 'react'
import {
  Box,
  Input,
  Button,
  Heading,
  VStack,
  Fieldset,
  Field,
} from '@chakra-ui/react'
import axios from 'axios'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleLogin = async () => {
    setError(false)
    setIsSubmitting(true)

    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/login/', formData)
      localStorage.setItem('access_token', response.data.access)
      localStorage.setItem('refresh_token', response.data.refresh)
      setMessage('Loggin successfully')
    } catch (err) {
      setError(true)
      setMessage('Invalid credentials. Either email or password is invalid')
      setFormData({email: '', password: ''})
    }
    finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box maxW='400px' mx='auto'>
      <Heading mb={4}>Login</Heading>
      <Fieldset.Root size='md' mb={6}>
        <Fieldset.HelperText color={error ? 'red.500' : 'green.500'}>
          {message}
        </Fieldset.HelperText>

        <VStack spacing={4}>
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input
              type='email'
              placeholder='Email'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Password</Field.Label>
            <Input
              type='password'
              placeholder='Password'
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </Field.Root>
        </VStack>
      </Fieldset.Root>
      <Button
        mb={2}
        colorScheme='blue'
        loading={isSubmitting}
        onClick={handleLogin}>Login</Button>
    </Box>
  )
}

export default Login
