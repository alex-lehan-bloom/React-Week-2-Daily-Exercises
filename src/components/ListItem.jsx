import React from "react";
import { deleteProduct } from "../lib/api";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
    };
  }

  onDelete = () => {
    let { onProductDelete } = this.props;
    onProductDelete(this.state);
  };

  render() {
    let { name, avatar, id } = this.props;
    return (
      <>
        <li className="list-group-item" key={id}>
          <h3>{name}</h3>
          <img src={avatar}></img>
          <button onClick={this.onDelete} className="btn btn-danger">
            Delete
          </button>
        </li>
      </>
    );
  }
}

export default ListItem;
