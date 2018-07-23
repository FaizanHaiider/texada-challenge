import React from 'react';
import {Header, Grid, Image, Container, Table} from 'semantic-ui-react';

import ProductDB from '../api';
import SearchBar from './SearchBar';

function style() {
    return {
        product: {marginTop: '7em'},
        detail: {marginTop: '2em'}
    }    
}

const ViewProduct = (props) => {
    const styles = style();
    const product = props.product;

    return(
        <Container text textAlign='center' style={styles.product}>
            <Grid columns={2} divided style={{marginBottom: '2em'}}>
                <Grid.Row>
                    <Grid.Column>
                        <Image 
                            src='http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg'
                            size='medium'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Header style={{marginTop: '3em'}} as='h3'>Product ID: {product.id}</Header>
                        <Header as='h3'>Product Name: {product.description}</Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
            {/* <SearchBar onSearchChange={i => props.onSearchChange(i)}/> */}

            <Container style={styles.detail}>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Date (Time)</Table.HeaderCell>
                            <Table.HeaderCell>Location</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                        product.travelPath.reverse().map((location, index) => {
                            return (
                                <Table.Row key={index}>
                                    <Table.Cell>
                                        {ProductDB.getFormattedDateTime(location.datetime)}
                                    </Table.Cell>
                                    {/* <Table.Cell>{props.locations[index]}</Table.Cell> */}
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table>
            </Container>
        </Container>
    );
}

export default ViewProduct;