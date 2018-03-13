import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullRoster from './FullRoster'
import Member from './Member'

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
    <Switch>
        <Route exact path='/members' component={FullRoster}/>
        <Route path='/members/:number' component={Member}/>
    </Switch>
)


export default Roster
