import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as productActions from '../actions'
import ProductCatalog from "./ProductCatalog";
import Cart from "./Cart";

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.actions.getProducts()
  }

  render() {
    return (
      <div>
        <span className="price">TOTAL: $ {this.props.cart.total}</span>
        <Cart {...this.props}/>
        <ProductCatalog {...this.props}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    catalog: state.catalog
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
