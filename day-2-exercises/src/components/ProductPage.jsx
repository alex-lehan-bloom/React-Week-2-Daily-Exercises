import React from "react";
import { withRouter, Switch, Route, Link } from "react-router-dom";
import "../css/Product.css";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: "The product does not exist.",
        logo: null,
        id: null,
        description: null,
        price: null,
      },
    };
  }

  getProduct() {
    const { match, products } = this.props;
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
    const { match } = this.props;
    const urlPrice = "/product/" + match.params.productid + "/price";
    return (
      <>
        {product && (
          <div>
            <h1 className="product-name">{product.name}</h1>
            <img src={product.logo} alt={product.name} />
            <p className="product-description">{product.description}</p>
            <Link to={urlPrice} className="price-link">
              <button className="btn btn-success">Price</button>
            </Link>
            <Switch>
              <Route exact path={`/product/:productid/price`}>
                <p>{product.price}</p>
              </Route>
            </Switch>
          </div>
        )}
      </>
    );
  }
}

export default withRouter(ProductPage);
