function AuthFormInput({ type, name, placeholder, setState }) {
  return (
    <div className='form-outline mt-4 form-floating'>
      <input
        type={type}
        id={name}
        className='form-control'
        placeholder={placeholder}
        onChange={(e) =>
          setState((prevState) => {
            return {
              ...prevState,
              [name]: e.target.value,
            }
          })
        }
      />
      <label className='form-label' htmlFor={name}>
        {placeholder}
      </label>
    </div>
  )
}

export default AuthFormInput
