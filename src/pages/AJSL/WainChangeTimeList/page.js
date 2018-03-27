import DragBox from '../../../components/UI/DragBox'

export default () => {
  return (
    <DragBox
      contentLeft={<div>box1</div>}
      contentRight={<div>box2</div>}
      contentLeftDefaultWidth = { 200}
    />
  )
}
