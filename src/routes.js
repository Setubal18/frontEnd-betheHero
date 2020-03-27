import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom'

//Rotas import
import Login from './pages/login'
import Register from './pages/register';
import Profile from './pages/profile';
import NewIncident from './pages/newinident';

export default () => {
   return (
   <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/profile' component={Profile} />
			<Route path='/newincident' component={NewIncident} />
        </Switch>
    </BrowserRouter>
    )
}