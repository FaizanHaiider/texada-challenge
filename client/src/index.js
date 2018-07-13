import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import ProductActions from './pages/ProductActions';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
            {/* <Route path='/update' exact component={ProductActions}/>
            <Route path='/udpate/:id' exact component={ProductActions}/> */}
            <Route path='/:id' exact component={Product}/>
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
);
