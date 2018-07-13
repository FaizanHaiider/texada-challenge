import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/:id' exact component={Product}/>
            <Route path='/' exact component={Home}/>
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
);
