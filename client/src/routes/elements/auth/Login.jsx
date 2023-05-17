import { useState } from 'react'

import AuthInput from '../../../components/pageComponents/auth/AuthInput'
import AuthButton from '../../../components/pageComponents/auth/AuthButton'

import { useLogin } from '../../../hooks/auth'
import FormError from '../../../components/pageComponents/auth/FormError'

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const { login } = useLogin()
  console.log(login)

  const checkFormValid = () => {
    const errors = {}
    const { email, password, confirmPassword } = loginData
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email) {
      errors.email = 'Email is required!'
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email format.'
    }

    if (!password) {
      errors.password = 'Password is required!'
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long.'
    } else if (password !== confirmPassword) {
      errors.password = 'Passwords do not match.'
    }

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  return (
    <div className='container pt-3'>
      <form
        className='px-4'
        onSubmit={(e) => {
          e.preventDefault()
          if (checkFormValid()) login(loginData)
        }}
        noValidate
      >
        <AuthInput
          type={'email'}
          name={'email'}
          placeholder={'Email'}
          setState={setLoginData}
        />
        {errors.email ? <FormError message={errors.email} /> : null}

        <AuthInput
          type={'password'}
          name={'password'}
          placeholder={'Password'}
          setState={setLoginData}
        />
        {errors.password ? <FormError message={errors.password} /> : null}

        <AuthInput
          type={'password'}
          name={'confirmPassword'}
          placeholder={'Confirm Password'}
          setState={setLoginData}
        />

        <div className='row mt-4'>
          <div className='col d-flex justify-content-center'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                onChange={(e) => (e.target.checked = !e.target.checked)}
                id='remember'
              />
              <label className='form-check-label' htmlFor='remember'>
                Remember me
              </label>
            </div>
          </div>

          <div className='col'>
            <a href='#!'>Forgot password?</a>
          </div>
        </div>

        <AuthButton name={'Login'} />

        <div className='text-center'>
          <p>
            Don't have an account? <a href='#!'>Sign up</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
