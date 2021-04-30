
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './src/container/home';
import Button from './src/container/button';



const Root = () => {
    return <> 
    <Switch>
        <Route path="/home" component={Home}></Route>
        <Redirect path="/" to='home'></Redirect>
        <Route path="/button" component={Button}></Route>
    </Switch>   
    </>
}

export default Root;

