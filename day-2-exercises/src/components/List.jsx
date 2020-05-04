import React from "react";

function List(props) {
  let { list, searchQuery } = props;
  let list_to_display = [];

  list.map((item, index) => {
    if (item.name === searchQuery) {
      list_to_display.push(<li key={index}>{item.name}</li>);
    }
  });
  return list_to_display;
}

export default List;
