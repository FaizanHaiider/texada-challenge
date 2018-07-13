import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';

import ProductDb from '../api';
import MenuBar from '../components/MenuBar';
import ViewProduct from '../components/ViewProduct';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: parseInt(props.match.params.id, 10),
            product: ProductDb.get(parseInt(props.match.params.id, 10))
        }
    }

    render() {
        return(
            <div>
                <MenuBar/>
                <Container text textAlign='center' style={{marginTop: '7em'}}>
                    <ViewProduct product={this.state.product}/>
                </Container>
            </div>
        );
    }
}

export default Product;