import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom'

import login from './pages/login'

export default () => {
   return (
   <BrowserRouter>
        <Switch>
            <Route path='/' component={login} />
        </Switch>
    </BrowserRouter>
    )
}