import React from 'react';
import {Header, Grid, Image} from 'semantic-ui-react';

import MenuBar from './MenuBar';

const ViewProduct = (props) => {
    return(
        <div>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Image 
                            src='http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg'
                            size='medium'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Header style={{marginTop: '3em'}} as='h3'>Product ID: {props.product.id}</Header>
                        <Header as='h3'>Product Name: {props.product.description}</Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default ViewProduct;