import React from "react";
import { Link } from "react-router-dom";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };
  }

  render() {
    let { list, searchQuery } = this.props;
    let list_to_display = [];
    let regex = new RegExp(searchQuery.input);
    list.map((item, index) => {
      if (regex.test(item.name)) {
        list_to_display.push(
          <li key={index}>
            <Link to={`/product/${item.id}`}>{item.name}</Link>
          </li>
        );
      }
    });
    return list_to_display;
  }
}

export default List;
