import ChecklistWidget from './types/ChecklistWidget'
import ListWidget from './types/ListWidget'

function Widget({ type }) {
  let widgetContent

  switch (type) {
    case 'list':
      widgetContent = <ListWidget title='' items={''} />
      break
    case 'checklist':
      widgetContent = <ChecklistWidget title='' items={''} />
      break
    case 'counter':
      widgetContent = <div>Counter Widget</div>
      break
    case 'reminder':
      widgetContent = <div>Reminder Widget</div>
      break
    default:
      widgetContent = <div>Invalid Widget Type</div>
  }

  return (
    <div>
      <h2>Widget</h2>
      {widgetContent}
    </div>
  )
}

export default Widget
