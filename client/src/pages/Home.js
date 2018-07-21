import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

import ProductDB  from '../api'; 
import SearchBar from '../components/SearchBar';
import ProductsTable from '../components/ProductsTable';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      inTransit: null,
      products: null
    };
  }
  
  componentWillMount() {
    this.setState({
      inTransit: ProductDB.getLength(),
      products: ProductDB.all()
    });
  }

  onSearchChange(filterStr) {
    if(filterStr.target.value.includes(',')) {
      this.setState({
        products: ProductDB.getMultiFilter(this.state.products, filterStr.target.value)
      })
    } else {
      this.setState({
        products: ProductDB.getFilterBy(filterStr.target.value)
      });
    } 
  }

  render() {
    return (
      <div>
        <Container text textAlign='center' style={{marginTop: '7em'}}>

          <Header as='h1'>In Transit Overview</Header>
          <p>There are {this.state.inTransit} products currently in transit</p>

          <SearchBar onSearchChange={i => this.onSearchChange(i)}/>
          <ProductsTable products={this.state.products} length={this.state.products.length}/>

        </Container>
      </div>
    );
  }
}

export default Home;
