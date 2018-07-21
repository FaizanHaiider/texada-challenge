import React, {Component}from 'react';
import {BrowserRouter as Router,
        Route, 
        Switch
} from 'react-router-dom';

import Home from './Home';
import Product from './Product';
import MenuBar from '../components/MenuBar';

class App extends Component {
    render() {
        return(
            <Router>
                <div>
                    <MenuBar />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/:id' component={Product}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;