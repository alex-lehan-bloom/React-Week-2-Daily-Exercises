import React from "react";
import { createProduct } from "../lib/api.js";
import { Button } from "react-bootstrap";
import "../css/Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", avatar: "" };
  }

  nameChange(event) {
    this.setState({ name: event.target.value });
  }
  avatarChange(event) {
    this.setState({ avatar: event.target.value });
  }
  async onSubmit(event) {
    event.preventDefault();
    let { name, avatar } = this.state;
    createProduct(name, avatar);
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={(event) => {
          this.onSubmit(event);
        }}
      >
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={(event) => {
            this.nameChange(event);
          }}
        ></input>
        <label htmlFor="name">Product Avatar</label>
        <input
          type="text"
          className="form-control"
          id="avatar"
          onChange={(event) => {
            this.avatarChange(event);
          }}
        ></input>
        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </form>
    );
  }
}

export default Form;
