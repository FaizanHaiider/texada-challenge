import React, {Component}from 'react';
import {BrowserRouter as Router,
        Route, 
        Switch 
} from 'react-router-dom';

import Home from './Home';
import MenuBar from '../components/MenuBar';
import Product from './Product';


class App extends Component {
    render() {
        return(
            <Router>
                <div>
                    <MenuBar /> 
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/:id' component={Product}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;