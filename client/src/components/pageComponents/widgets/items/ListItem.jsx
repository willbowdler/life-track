import { Icon } from '@iconify/react'

function ListItem({ inputs, index, deleteItem, handleChange }) {
  if (inputs) {
    return (
      <li className='d-flex justify-content-between align-items-center list-group-item'>
        <input
          type='text'
          className='form-control border-0 bg-transparent no-outline'
          style={{ outline: 'none' }}
          placeholder='Enter value'
          onChange={(e) => handleChange(e, index)}
        />
        <Icon onClick={() => deleteItem(index)} icon='uil:x' />
      </li>
    )
  } else {
    return (
      <li className='list-group-item'>
        An item <Icon icon='uil:x' />
      </li>
    )
  }
}

export default ListItem
