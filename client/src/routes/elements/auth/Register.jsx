import { Link } from 'react-router-dom'

import AuthInput from '../../../components/pageComponents/auth/AuthInput'
import AuthButton from '../../../components/pageComponents/auth/AuthButton'

function Register() {
  return (
    <div className='container pt-5'>
      <form className='px-4'>
        <div className='input-group'>
          <AuthInput type={'text'} name={'First Name'} />
          <AuthInput type={'text'} name={'Last Name'} />
        </div>
        <AuthInput type={'email'} name={'Email'} />

        <AuthInput type={'password'} name={'Password'} />

        <AuthInput type={'password'} name={'Confirm Password'} />

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
              <label className='form-check-label' for='remember'>
                Remember me
              </label>
            </div>
          </div>
        </div>

        <AuthButton name={'Register'} />

        <div className='text-center'>
          <p>
            Already have an account? <a href='#!'>Sign in</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register
