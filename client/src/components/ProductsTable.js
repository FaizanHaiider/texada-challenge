import React from 'react';
import {Link} from 'react-router-dom';
import {Table, Icon, Container} from 'semantic-ui-react';
import ProductDB from '../api';

const ProductsTable = (props) => (
    <Container>
        {
            props.length === 0 &&
                <p>No results founds</p>
        }
        <Table celled style={{marginTop: '1em'}}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Product ID</Table.HeaderCell>
                    <Table.HeaderCell>Product Name</Table.HeaderCell>
                    <Table.HeaderCell>Latest Update</Table.HeaderCell>
                    <Table.HeaderCell>Details</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    props.products.map((product) => {
                        return (
                            <Table.Row key={product.id}>
                                <Table.Cell>{product.id}</Table.Cell>
                                <Table.Cell>{product.description}</Table.Cell>
                                <Table.Cell>{ProductDB.getLatestUpdate(product.id)}</Table.Cell>
                                <Table.Cell>
                                    <Link to={`/${product.id}`}><Icon name='options'/></Link>
                                </Table.Cell>
                            </Table.Row>
                        );
                    })
                }
            </Table.Body>
        </Table>
    </Container>
)

export default ProductsTable;