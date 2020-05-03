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
      show_products: false,
      products: [],
    };
  }

  async loadProducts() {
    const data = await getProducts();
    this.setState({ show_products: true, products: data });
  }

  onDelete = async (state) => {
    await deleteProduct(state.id);
    this.loadProducts();
  };

  onSubmit = async (state) => {
    await createProduct(state.name, state.avatar);
    this.loadProducts();
  };

  componentDidMount() {
    this.loadProducts();
  }

  render() {
    let { show_products, products } = this.state;
    return (
      <>
        <h1> Company Products</h1>
        <Form onFormSubmit={this.onSubmit}></Form>
        <ul className="list-group list-group-flush product-list">
          {show_products &&
            products.map((product) => (
              <ListItem
                onProductDelete={this.onDelete}
                key={product.id}
                id={product.id}
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
