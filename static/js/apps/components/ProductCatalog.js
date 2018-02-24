import React, {Component} from "react";
import Product from "./Product";

class ProductCatalog extends Component {
  constructor(props) {
    super(props);
  }

  showProducts(data) {
    return data.map((product, i) => {
      return <Product key={i} product={{...product, type: 'catalog'}}/>
    })
  }

  render() {
    const {data} = this.props.catalog;
    return (
      <div>
        <h3>Product List</h3>
        <div className="product-container">
          {this.showProducts(data)}
        </div>
      </div>
    )
  }
}

export default ProductCatalog
