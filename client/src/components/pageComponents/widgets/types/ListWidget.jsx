import WidgetSettingsLink from '../WidgetSettingsLink'

function ListWidget({ title = 'List', items }) {
  return (
    <div className='container mt-3 px-3 py-2 bg-success rounded'>
      <div className='d-flex justify-content-between'>
        <h2>{title}</h2>
      </div>
      <ul className='list-group list-group-flush rounded'>
        <li className='list-group-item'>Item 1</li>
        <li className='list-group-item'>Item 2</li>
        <li className='list-group-item'>Item 3</li>
      </ul>
      <div className='d-flex justify-content-end'>
        <WidgetSettingsLink widgetTitle={title} items={items} />
      </div>
    </div>
  )
}

export default ListWidget
