import { Icon } from '@iconify/react'

import ListItem from '../../widgets/items/ListItem'

function ListOptions({ widgetItems, setWidgetItems, title }) {
  const addListItem = () => {
    setWidgetItems((prevWidgetItems) => [
      ...prevWidgetItems,
      { id: prevWidgetItems.length, inputs: true, content: '' },
    ])
  }

  const deleteListItem = (index) => {
    const updatedListItems = widgetItems.filter(
      (listItem) => listItem.id !== index
    )
    setWidgetItems(updatedListItems)
  }

  const handleChange = (e, index) => {
    const updatedListItems = widgetItems.map((listItem, i) => {
      if (i === index) listItem.content = e.target.value
      return listItem
    })
    setWidgetItems(updatedListItems)
  }

  return (
    <div>
      <p className='m-0 fs-4'>{title} Items</p>
      {widgetItems.map((listItem) => (
        <ListItem
          key={listItem.id}
          index={listItem.id}
          inputs={listItem.inputs}
          deleteItem={deleteListItem}
          handleChange={handleChange}
        />
      ))}
      <div onClick={addListItem}>
        <Icon icon='material-symbols:add-circle-outline-rounded' width={15} />
      </div>
    </div>
  )
}

export default ListOptions
