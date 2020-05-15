import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './index.css'
import Index from './Pages/Index'
import Video from './Pages/Video'
import WorkPlace from './Pages/WorkPlace'

class AppRouter extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  render() { 
    const routerConfig = [
      { path: '/', title: '博客首页', exact: true, component: Index },
      { path: '/video/', title: '视频教程', exact: false, component: Video },
      { path: '/workPlace/', title: '职场技能', exact: false, component: WorkPlace }
    ]
    return (
      <Router>
        <div className="mainDiv">
          <div className="leftNav">
            <h1>一级导航</h1>
            <ul>
              {
                routerConfig.map((v, i) => {
                  return (
                    <li key={i}><Link to={v.path}>{v.title}</Link></li>
                  )
                })
              }
            </ul>
          </div>

          <div className="rightMain">
            {
              routerConfig.map((v, i) => {
                return (
                  <Route key={i} path={v.path} exact={v.exact} component={v.component} />
                )
              })
            }
          </div>
        </div>
      </Router>
    )
  }
}

export default AppRouter