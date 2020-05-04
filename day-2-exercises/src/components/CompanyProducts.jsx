import React from "react";

function CompanyProducts(props) {
  return (
    <>
      <h1>Company Products</h1>
      {props.children}
    </>
  );
}

export default CompanyProducts;
