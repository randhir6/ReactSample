import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as productActions from '../actions';


class Product extends Component {
  constructor(props) {
    super(props);
  }

  addToCart(product) {
    this.props.actions.addToCart(product)
  }

  removeFromCart(product) {
    this.props.actions.removeFromCart(product)
  }

  renderActionButton(product) {
    switch (product.type) {
      case 'catalog': {
        return <button onClick={() => this.addToCart(product)}>Add to cart</button>
      }
      case 'cart': {
        return <button onClick={() => this.removeFromCart(product)}>Remove from cart</button>
      }
    }
  }

  render() {
    const {product} = this.props;
    const className = product.type === 'catalog' ? 'product' : 'product-cart';
    return (
      <div className={className}>
        <div className="container">
          <img src={product.imageURL} />
          <p>{product.name}</p>
          <p>${product.price}</p>
          {this.renderActionButton(product)}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
