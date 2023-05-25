import WidgetSettingsLink from '../WidgetSettingsLink'

function ChecklistWidget({ title = 'Checklist', items }) {
  return (
    <div className='container my-2 bg-danger rounded'>
      <div className='mx-3 mt-3 mb-4'>
        <div className='d-flex justify-content-between'>
          <h2>{title}</h2>
          <WidgetSettingsLink widgetTitle={title} items={items} />
        </div>
        <ul className='list-group list-group-flush rounded'>
          <li className='list-group-item'>Item 1</li>
          <li className='list-group-item'>Item 2</li>
          <li className='list-group-item'>Item 3</li>
        </ul>
      </div>
    </div>
  )
}

export default ChecklistWidget
