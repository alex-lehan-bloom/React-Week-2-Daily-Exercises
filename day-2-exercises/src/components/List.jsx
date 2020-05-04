import React from "react";

function List(props) {
  let { list } = props;
  let list_to_display = [];
  list.map((item) => {
    list_to_display.push(<li>{item}</li>);
  });
  return list_to_display;
}

export default List;
