import React from "react";

function List(props) {
  let { list } = props;
  let list_to_display = [];
  list.map((item, index) => {
    list_to_display.push(<li key={index}>{item.name}</li>);
  });
  return list_to_display;
}

export default List;
