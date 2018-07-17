import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';

import ProductDb from '../api';
import MenuBar from '../components/MenuBar';
import ViewProduct from '../components/ViewProduct';

class Product extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            productId: -1,
            product: []
        }
    }

    componentWillMount() {
        const id = parseInt(this.props.match.params.id, 10)
        this.setState({
            productId: id,
            product: ProductDb.get(id)
        })
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