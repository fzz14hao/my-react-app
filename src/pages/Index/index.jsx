import React from 'react';
import {Link} from 'react-router-dom'
import './index.less'


export default class Index extends React.Component {
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
          我是首页
          <br/>
          <br/>

          <Link to="/login">登录</Link>
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
