import React, {Component} from "react";
import Product from "./Product";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  get styles() {
    return {
      container: {
        textAlign: 'center'
      }
    }
  }

  showProducts(data) {
    return data.map((product, i) => {
      return <Product key={i} product={{...product, type: 'cart'}}/>
    })
  }

  render() {
    const {data} = this.props.cart;
    return (
      <div style={this.styles.container}>
        {this.showProducts(data)}
      </div>
    )
  }
}

export default Cart
