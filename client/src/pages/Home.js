import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

import ProductDB  from '../api'; 
import MenuBar from '../components/MenuBar';
import SearchBar from '../components/SearchBar';
import ProductsTable from '../components/ProductsTable';

class Home extends Component {
  state = {
    inTransit: 0,
    products: []
  };

  componentWillMount() {
    this.setState({
      inTransit: ProductDB.getLength(),
      products: ProductDB.all()
    });
  }

  onSearchChange(filterStr) {
    this.setState({products: ProductDB.getFilterBy(filterStr)});
  }

  
  render() {
    return (
      <div>
        <MenuBar products={this.state.products}/>
        <Container text textAlign='center' style={{marginTop: '7em'}}>
          <Header as='h1'>In Transit</Header>
          <p>There are {this.state.inTransit} products in transit </p>

          <SearchBar onSearchChange={i => this.onSearchChange(i)}/>
          <ProductsTable products={this.state.products} length={this.state.products.length}/>

        </Container>
      </div>
    );
  }
}

export default Home;
