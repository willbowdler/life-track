function AuthButton({ name }) {
  return (
    <div className='d-grid'>
      <button type='submit' className='btn btn-primary my-4'>
        {name}
      </button>
    </div>
  )
}

export default AuthButton
