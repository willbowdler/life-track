import { useState } from 'react'
import { Link } from 'react-router-dom'

import AuthInput from '../../../components/pageComponents/auth/AuthInput'
import AuthButton from '../../../components/pageComponents/auth/AuthButton'
import FormError from '../../../components/pageComponents/auth/FormError'

import { useLogin } from '../../../hooks/auth'

import validateAuthForm from '../../../utils/auth/validateAuthForm'

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const { login } = useLogin()

  const checkFormValid = () => {
    const errors = validateAuthForm(loginData)
    setErrors(errors)
    console.log(errors)

    return Object.keys(errors).length === 0
  }

  return (
    <div className='container pt-3'>
      <form
        className='px-4'
        onSubmit={async (e) => {
          e.preventDefault()
          if (checkFormValid()) {
            await login(loginData)
          }
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
            Don't have an account? <Link to='/register'>Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
