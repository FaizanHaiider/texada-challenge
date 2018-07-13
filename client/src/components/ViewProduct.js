import React, {Component} from 'react';
import {Header, Grid, Image, Container, Table} from 'semantic-ui-react';

class ViewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: props.product,
            locations: [],
        }
    }

    getFormattedDateTime(datetime) {
        const newDateTime = new Date(datetime).toLocaleString().split(',');
        const formattedTime = newDateTime[1].split(':')
        return newDateTime[0] + ' ('+ formattedTime[0] + ':' + formattedTime[2]+')';
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

    render() {
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
                            <Header style={{marginTop: '3em'}} as='h3'>Product ID: {this.state.product.id}</Header>
                            <Header as='h3'>Product Name: {this.state.product.description}</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
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
                            this.props.product.travelPath.map((location, index) => {
                                return (
                                    <Table.Row key={index}>
                                        <Table.Cell>
                                            {this.getFormattedDateTime(location.datetime)}
                                        </Table.Cell>
                                        <Table.Cell>{this.state.locations[index]}</Table.Cell>
                                    </Table.Row>
                                );
                            })
                            }
                        </Table.Body>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default ViewProduct;