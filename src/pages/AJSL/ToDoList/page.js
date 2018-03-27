import Users from './components/Users';
import DragBox from '../../../components/UI/DragBox'


export default () => {
  return (
    <DragBox
      contentLeft={<Users/>}
      contentRight={<div>案件信息</div>}
      contentLeftDefaultWidth={1200}
    />
  )
}
