function Modal({ children, title, body, id = 'modal' }) {
  return (
    <div
      className='modal fade'
      id={id}
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
          <div className='d-flex flex-end justify-content-end gap-3 mx-3 mb-3'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
