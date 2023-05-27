import { useState } from 'react'

function ChecklistOptions() {
  const [items, setItems] = useState([])

  const addItem = () => {
    setItems([...items, ''])
  }

  const removeItem = (index) => {
    const updatedItems = [...items]
    updatedItems.splice(index, 1)
    setItems(updatedItems)
  }

  const updateItem = (index, value) => {
    const updatedItems = [...items]
    updatedItems[index] = value
    setItems(updatedItems)
  }

  return (
    <div>
      <div>
        <button onClick={addItem}>Add Item</button>
      </div>
      {items.map((item, index) => (
        <div key={index}>
          <input
            type='text'
            value={item}
            onChange={(e) => updateItem(index, e.target.value)}
          />
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default ChecklistOptions
