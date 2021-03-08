import React from 'react'

import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import { Home } from './Components/Pages/Home/Home';
import { Favorites } from './Components/Pages/Favorites/Favorites';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/favorites">
                <Favorites/>
            </Route>

            <Route render={() => <Redirect to="/"/>}/>
        </Switch>
    )
}
