import React from 'react';
import {Table, Icon, Container} from 'semantic-ui-react';

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
                                <Table.Cell>api todo</Table.Cell>
                                <Table.Cell><Icon name='options'/></Table.Cell>
                            </Table.Row>
                        );
                    })
                }
            </Table.Body>
        </Table>
    </Container>
)

export default ProductsTable;