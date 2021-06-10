import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";
import AdoptarScreen from '../screens/AdoptarScreen/AdoptarScreen';
import Home from '../screens/HomeScreen/Home';
import Login from '../screens/LoginScreen';
const Routers = () => (
    <Switch>
        <Route exact path="/" >
            <Home />
        </Route>
        <Route exact path="/felicidades" >
            <AdoptarScreen />
        </Route>
        <Route exact path="/login" >
            <Login />
        </Route>
    </Switch>
)

export default Routers
