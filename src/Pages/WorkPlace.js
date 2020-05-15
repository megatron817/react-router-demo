import React from 'react'
import { Route, Link } from 'react-router-dom'
import Getup from './workPlace/Getup'
import Money from './workPlace/Money'

const WorkPlace = () => {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/workPlace/Getup">早起攻略</Link></li>
          <li><Link to="/workPlace/Money">加薪秘籍</Link></li>
        </ul>
      </div>

      <div className="workPlaceContent">
        <div>职场技能如下</div>
        <Route path="/workPlace/Getup" component={Getup} />
        <Route path="/workPlace/Money" component={Money} />
      </div>
    </div>
  )
}

export default WorkPlace