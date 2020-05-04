import React from "react";
import axios from "axios";
import { createPortal } from "react-dom";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      imageValid: true,
    };
  }

  async imageValid(image) {
    let response = await axios.get(image);
    console.log("ERS", response.status);
    console.log("Text", response.statusText);
    if (response.status === 404) {
      this.setState({ imageValid: false });
    }
  }

  onDelete = () => {
    let { onProductDelete } = this.props;
    onProductDelete(this.state);
  };

  render() {
    let { name, avatar, id } = this.props;
    let { imageValid } = this.state;
    this.imageValid(avatar);
    return (
      <>
        <li className="list-group-item" key={id}>
          <h3>{name}</h3>
          {imageValid && <img src={avatar}></img>}
          <button onClick={this.onDelete} className="btn btn-danger">
            Delete
          </button>
        </li>
      </>
    );
  }
}

export default ListItem;
