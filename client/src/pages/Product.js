import React, {Component} from 'react';

import ProductDb from '../api';
import ViewProduct from '../components/ViewProduct';

class Product extends Component {
    constructor(props) {
        super(props);

        const prodId = parseInt(this.props.match.params.id, 10);
        this.state = ProductDb.get(prodId);

    }

    // _googleAPI() {

    // }

    _updateState() {
        const prodId = parseInt(this.props.match.params.id, 10);
        this.setState(ProductDb.get(prodId));
    }

    componentWillMount() {
        // Promise.all(promises).then((newTravelPaths) => {
        //     this.setState({
        //         travelPath: newTravelPaths
        //     })
        // })
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.id !== prevProps.match.params.id) {
            this._updateState();
        }
    }


    render() {
        const product = this.state;    
        return(
            <ViewProduct 
                product={product}
            />
        );
    }
}

export default Product;