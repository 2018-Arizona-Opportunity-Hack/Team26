import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

class AppRoutes extends Component {
  render() {
    return (
        <Switch>
          <Route exact path={'/'} component={homePage}/>
          <Route path={'/subscribe'} component={subscribePage}/>
          <Route path={'/organization'} component={organizationPage}/>
          <Route path={'/checkin'} component={checkinPage}/>
          <Route path={'*'} conponent={errorPage}/>
        </Switch>
    );
  }
}

export default AppRoutes;