import React from "react";
import {
  getProducts,
  getProduct,
  deleteProduct,
  createProduct,
} from "./lib/api.js";
import Form from "./components/Form";
import ListItem from "./components/ListItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newProductName: "",
      newProductAvatar: "",
      show_products: false,
      products: [],
    };
  }

  async loadProducts() {
    const data = await getProducts();
    this.setState({ show_products: true, products: data });
  }

  componentDidMount() {
    this.loadProducts();
  }

  render() {
    let { show_products, products } = this.state;
    return (
      <>
        <h1> Company Products</h1>
        <Form></Form>
        <ul className="list-group list-group-flush product-list">
          {show_products &&
            products.map((product) => (
              <ListItem
                key={product.id}
                name={product.name}
                avatar={product.avatar}
              ></ListItem>
            ))}
        </ul>
      </>
    );
  }
}

export default App;
