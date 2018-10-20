import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../containers/HomePage'
import SubscribePage from '../containers/SubscribePage'
import OrganizationPage from '../containers/OrganizationPage'
import CheckinPage from '../containers/CheckinPage'
import ErrorPage from '../containers/ErrorPage'

class AppRoutes extends Component {
  render() {
    return (
        <Switch>
          <Route exact path={'/'} component={HomePage}/>
          <Route path={'/subscribe'} component={SubscribePage}/>
          <Route path={'/organization'} component={OrganizationPage}/>
          <Route path={'/checkin'} component={CheckinPage}/>
          <Route path={'*'} conponent={ErrorPage}/>
        </Switch>
    );
  }
}

export default AppRoutes;