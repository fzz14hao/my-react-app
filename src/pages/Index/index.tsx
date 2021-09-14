import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'
import { Button } from 'antd-mobile'

export default class Index extends React.Component {
  constructor (props: any) {
    super(props)
    this.state = {}
  }

  componentDidMount () {}

  render () {
    return (
      <div>
        我是首页111
        <Button>我是啊 </Button>
        <br />
        <br />
        <Link to="/login">登录</Link>
      </div>
    )
  }
}
