import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';

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

    // componentWillMount(props) {
    //     let productId = 0;
    //     try {
    //         productId = parseInt(props.match.params.id);
    //     } catch(NumberFormatException) {
    //         productId = -1;
    //     }
        
    //     if(productId > -1) {
    //         this.setState({
    //             productId,
    //             product: ProductDb.get(productId)
    //         })
    //     } else {
    //         this.setState({
    //             productId
    //         })
    //     }
    // }

    render() {
        return(
            <div>
                <MenuBar/>
                <Container text textAlign='center' style={{marginTop: '7em'}}>
                    {
                        this.state.productId === -1 ?
                            <Header as='h2'>Invalid Product ID</Header> :
                            <ViewProduct product={this.state.product}/>
                    }
                </Container>
            </div>
        );
    }
}

export default Product;