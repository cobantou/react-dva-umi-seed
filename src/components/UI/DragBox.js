import React from 'react';
import styles from './DragBox.less';

/**
 * 左右布局可拖动组件，一边宽度增加另一边会对应减少
 * 参数 box1内容（content1:jsx），box2内容（content2:jsx），box1初始宽度，
 */
class DragBox extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      closed: false,
      dragParams: {
        firstDrag: false,
        isDrag: false,
        formX: 0,
        leftWidth: this.props.contentLeftDefaultWidth
      }
    };
  }

  handleMouseDown = (e) => {
    document.body.className += " noUserSelect";
    if (!this.state.dragParams.firstDrag) {
      document.addEventListener('mousemove', (e) => {
        this.handleMouseMove(e)
      }, false);
      document.addEventListener('mouseup', (e) => {
        this.handleMouseUp(e)
      }, false);
    }
    this.setState({
      dragParams: {
        firstDrag: true,
        formX: e.clientX,
        isDrag: true,
        leftWidth: this.refs.leftBox.offsetWidth
      }
    })
  }

  handleMouseMove = (e) => {
    if (this.state.dragParams.isDrag) {
      let toX = e.clientX;
      let leftPart = this.refs.leftBox;
      let distance = toX - this.state.dragParams.formX;
      let leftW;

      if (leftPart.offsetWidth >= 5) {
        leftW = this.state.dragParams.leftWidth + distance;
        if (leftW < 5) {
          leftW = 5;
        }
        leftPart.style.width = leftW + "px"
      }
    }
  }

  handleMouseUp = (e) => {
    let body = document.body;
    let reg = new RegExp('(\\s|^)noUserSelect(\\s|$)');
    if (body.className.match(reg)) {
      document.body.className = document.body.className.replace(reg, ' ');
    }
    //to use setState
    //this.state.dragParams.isDrag = false
    this.setState({
        dragParams:{
          ...this.state.dragParams,
          isDrag:false
        }
    })
  }

  render(){
    return(
      <div className={styles.container}>
        <div ref="leftBox" className={styles.box1} style={{width:this.props.contentLeftDefaultWidth}}>
          {this.props.contentLeft}
        </div>
        <div className={styles.dragbar} onMouseDown = {this.handleMouseDown}>
          <span>点击隐藏按钮</span>
        </div>
        <div className={styles.box2}>
          {this.props.contentRight}
        </div>
      </div>
    )
  }
}

export default DragBox;
