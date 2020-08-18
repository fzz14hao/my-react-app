import React from 'react';
import './index.less'
import {Link} from "react-router-dom";


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }


  componentDidMount() {
  }

  add = () => {
    this.props.actions.add(this.props.stores.number)
  }
  remove = () => {
    this.props.actions.remove(this.props.stores.number)
  }


  render() {

    return (
        <div>
          我是登录
          <br/>
          <br/>
          <Link to="/index">首页</Link>

          <br/>
          <div>{this.props.stores.number}</div>

          <div className='list'>
            <div onClick={this.add}>添加</div>
            <div onClick={this.remove}>减少</div>
          </div>
        </div>
    );
  }
}
