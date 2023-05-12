import { useRouteError } from 'react-router'

function ErrorPage() {
  const error = useRouteError()

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-6'>
          <div className='alert alert-danger text-center' role='alert'>
            <h1>Oops!</h1>
            <p className='mb-0'>Sorry, an unexpected error has occurred.</p>
            <p className='mb-0'>
              <i>{error.statusText || error.message}</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
