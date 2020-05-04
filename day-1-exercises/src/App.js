import React from "react";
import { getProducts, deleteProduct, createProduct } from "./lib/api.js";
import Form from "./components/Form";
import ListItem from "./components/ListItem";
import AlertComponent from "./components/AlertComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_products: false,
      products: [],
      nameLengthExceeded: false,
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
    if (state.name.length < 5) {
      this.setState({ nameLengthExceeded: false });
      await createProduct(state.name, state.avatar);
      this.loadProducts();
    } else {
      this.setState({ nameLengthExceeded: true });
    }
  };

  componentDidMount() {
    this.loadProducts();
  }

  render() {
    let { show_products, products, nameLengthExceeded } = this.state;
    return (
      <FORM></FORM>
      <LIST></LIST>

      <>
        <h1> Company Products</h1>
        <Form onFormSubmit={this.onSubmit}></Form>
        {nameLengthExceeded && (
          <AlertComponent message="The product name can't be longer than 5 characters."></AlertComponent>
        )}
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
      </FORM>
    );
  }
}

export default App;
