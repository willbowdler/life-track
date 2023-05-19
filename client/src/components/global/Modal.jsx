function Modal({ children, title, body }) {
  return (
    <div
      className='modal fade'
      id='modal'
      tabIndex='-1'
      aria-labelledby='modal'
      aria-hidden='true'
    >
      <div className='mt-5 pt-5 modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='modal'>
              {title}
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>{body}</div>
          {children}
          {/* <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <button type='button' className='btn btn-primary'>
              Save changes
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Modal
