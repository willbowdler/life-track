import { useState } from 'react'
import { Link } from 'react-router-dom'

import AuthInput from '../../../components/pageComponents/auth/AuthInput'
import AuthButton from '../../../components/pageComponents/auth/AuthButton'
import FormError from '../../../components/pageComponents/auth/FormError'

import { useRegister } from '../../../hooks/auth'

import validateAuthForm from '../../../utils/auth/validateAuthForm'

function Register() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const { register } = useRegister()
  console.log(register)

  const checkFormValid = () => {
    const errors = validateAuthForm(userData)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  return (
    <div className='container pt-5'>
      <form
        className='px-4'
        onSubmit={(e) => {
          e.preventDefault()
          if (checkFormValid()) register(userData)
        }}
        noValidate
      >
        <div className='input-group'>
          <AuthInput
            type={'text'}
            name={'firstName'}
            placeholder={'First Name'}
            setState={setUserData}
          />
          <AuthInput
            type={'text'}
            name={'lastName'}
            placeholder={'Last Name'}
            setState={setUserData}
          />
        </div>
        {errors.name ? <FormError message={errors.name} /> : null}

        <AuthInput
          type={'email'}
          name={'email'}
          placeholder={'Email'}
          setState={setUserData}
        />
        {errors.email ? <FormError message={errors.email} /> : null}

        <AuthInput
          type={'password'}
          name={'password'}
          placeholder={'Password'}
          setState={setUserData}
        />
        {errors.password ? <FormError message={errors.password} /> : null}

        <AuthInput
          type={'password'}
          name={'confirmPassword'}
          placeholder={'Confirm Password'}
          setState={setUserData}
        />

        <div className='mb-4'>
          <div className='d-flex justify-content-center'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='remember'
                checked
              />
              <label className='form-check-label' htmlFor='remember'>
                Remember me
              </label>
            </div>
          </div>
        </div>

        <AuthButton name={'Register'} />

        <div className='text-center'>
          <p>
            Already have an account? <Link to='/login'>Sign in</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register
