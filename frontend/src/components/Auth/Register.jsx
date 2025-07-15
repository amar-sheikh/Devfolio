import { useState } from 'react'
import {
  Box,
  Input,
  Button,
  Heading,
  Field,
  Fieldset,
  VStack,
} from '@chakra-ui/react'
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const [message, setMessage] = useState('')

  const handleRegister = async () => {
    setMessage('')
    try {
      await axios.post('http://127.0.0.1:8000/auth/registration/', formData)
      setMessage('Registered successfully! Verification email is send to your email check you mail provider inbox')
      setFormErrors({})
    } catch (err) {
      if (err.response?.data) {
        setFormErrors(err.response.data)
      } else {
        setMessage('An unexpected error occurred.')
      }
    }
  }

  return (
    <Box maxW='400px' mx='auto' mt={8}>
      <Heading mb={6} size='lg'>Register</Heading>

      <Fieldset.Root size='md' mb={6}>
        <VStack spacing={4}>
          <Field.Root invalid={!!formErrors.username}>
            <Field.Label>Username</Field.Label>
            <Input
              placeholder='Username'
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            {formErrors.username && (
              <Field.ErrorText color='red.500'>{formErrors.username.join(' ')}</Field.ErrorText>
            )}
          </Field.Root>

          <Field.Root invalid={!!formErrors.email}>
            <Field.Label>Email</Field.Label>
            <Input
              type='email'
              placeholder='Email'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {formErrors.email && (
              <Field.ErrorText color='red.500'>{formErrors.email.join(' ')}</Field.ErrorText>
            )}
          </Field.Root>

          <Field.Root invalid={!!formErrors.password1}>
            <Field.Label>Password</Field.Label>
            <Input
              type='password'
              placeholder='Password'
              value={formData.password1}
              onChange={(e) => setFormData({ ...formData, password1: e.target.value })}
            />
            {formErrors.password1 && (
              <Field.ErrorText color='red.500'>{formErrors.password1.join(' ')}</Field.ErrorText>
            )}
          </Field.Root>

          <Field.Root invalid={!!formErrors.password2}>
            <Field.Label>Confirm Password</Field.Label>
            <Input
              type='password'
              placeholder='Confirm Password'
              value={formData.password2}
              onChange={(e) => setFormData({ ...formData, password2: e.target.value })}
            />
            {formErrors.password2 && (
              <Field.ErrorText color='red.500'>{formErrors.password2.join(' ')}</Field.ErrorText>
            )}
          </Field.Root>
        </VStack>
        <Fieldset.HelperText color={Object.keys(formErrors).length === 0 ? 'green.500' : 'red.500'}>
          {message}
        </Fieldset.HelperText>
      </Fieldset.Root>

      <Button
        colorScheme='green'
        width='full'
        onClick={handleRegister}
      >
        Register
      </Button>
    </Box>
  )
}

export default Register
