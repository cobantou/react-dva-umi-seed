import ToDoList from '../pages/AJSL/ToDoList/page'//案件受理
import ToHastenCaseList from '../pages/AJSL/ToHastenCaseList/page'//移交件
import WainChangeTimeList from '../pages/AJSL/WainChangeTimeList/page'//延期审核

/**
 * todo ： 能否减少重复代码？
 */

/**
 * key 菜单点击时的key
 * value 对应的页面组件
 * @type {{Child1: Function}}
 */
const pagesMap = {
  "ToDoList":ToDoList,
  "ToHastenCaseList":ToHastenCaseList,
  "WainChangeTimeList":WainChangeTimeList,
}

export default  pagesMap;
