import React, {Component} from 'react';
import {Header, Grid, Image, Container, Table} from 'semantic-ui-react';
import ProductDB from '../api';
import SearchBar from './SearchBar';
import MenuBar from './MenuBar';

class ViewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: props.product,
            locations: [],
            travelPath: props.product.travelPath
        }
    }

    componentWillMount() {
        this.state.product.travelPath.map((path) => {
            const url = 'https://maps.googleapis.com/maps/api/geocode/json?&latlng='+path.longitude+','+path.latitude;
            fetch(url)
                .then((response) => {return response.json()})
                .then((responseJson) => this.setState({
                    location: this.state.locations.push((responseJson.results[1].formatted_address))}
                )
            );
        })
    }

    onSearchChange(e) {
        if(e.target.value.match('([0-9]{2}\/){2}[0-9]{4}\-([0-9]{2}\/){2}[0-9]{4}')) {
            this.setState({
                travelPath: ProductDB.getByDate(e.target.value, this.state.product.id)
            })
        } else {
            this.setState({
                travelPath: this.state.product.travelPath
            })
        }
    }


    render() {
        return(
            <div>
                <MenuBar/>
                <Grid columns={2} divided style={{marginBottom: '2em'}}>
                    <Grid.Row>
                        <Grid.Column>
                            <Image 
                                src='http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg'
                                size='medium'/>
                        </Grid.Column>
                        <Grid.Column>
                            <Header style={{marginTop: '3em'}} as='h3'>Product ID: {this.state.product.id}</Header>
                            <Header as='h3'>Product Name: {this.state.product.description}</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                
                <SearchBar onSearchChange={i => this.onSearchChange(i)}/>

                <Container style={{marginTop: '2em'}}>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Date (Time)</Table.HeaderCell>
                                <Table.HeaderCell>Location</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {
                            this.state.travelPath.reverse().map((location, index) => {
                                return (
                                    <Table.Row key={index}>
                                        <Table.Cell>
                                            {ProductDB.getFormattedDateTime(location.datetime)}
                                        </Table.Cell>
                                        <Table.Cell>{this.state.locations[index]}</Table.Cell>
                                    </Table.Row>
                                );
                            })}
                        </Table.Body>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default ViewProduct;