import React from "react";
import { withRouter } from "react-router-dom";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: { name: "The product does not exist.", logo: null },
    };
  }

  getProduct() {
    const { match, products } = this.props;
    console.log(match.params.productid);
    products.map((product) => {
      {
        console.log(product.id);
      }
      if (product.id.toString() === match.params.productid) {
        this.setState({ product: product });
      }
    });
  }

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { product } = this.state;
    return (
      <>
        {product && (
          <div>
            <h1>{product.name}</h1>
            <img src={product.logo} alt={product.name} />
          </div>
        )}
      </>
    );
  }
}

export default withRouter(ProductPage);
