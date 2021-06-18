import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './Dashboard'
import OrderSummary from './OrderSummary'
import Finish from './Finish'
import Welcome from './Welcome'
import NotFound from './NotFound/NotFound'



const Routes = () => (
  <BrowserRouter>
    <Switch>
     < Route exact path="/" component={Welcome}/>
      <Route exact path="/producthome" component={Dashboard} />
      <Route exact path="/order" component={OrderSummary} />
      <Route path="/finish" component={Finish} />
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
)

export default Routes