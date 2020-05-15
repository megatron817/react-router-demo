import React from 'react'
import { Route, Link } from 'react-router-dom'
import ReactPage from './video/ReactPage'
import Flutter from './video/Flutter'
import Vue from './video/Vue'

const Video = () => {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/video/reactPage">react教程</Link></li>
          <li><Link to="/video/flutter">flutter教程</Link></li>
          <li><Link to="/video/vue">vue教程</Link></li>
        </ul>
      </div>

      <div className="videoContent">
        <div>视频教程如下</div>
        <Route path="/video/reactPage/" component={ReactPage} />
        <Route path="/video/flutter/" component={Flutter} />
        <Route path="/video/vue/" component={Vue} />
      </div>
    </div>
  )
}

export default Video