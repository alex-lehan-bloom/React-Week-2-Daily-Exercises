import React from "react";

function HomePage(props) {
  let { name, logo_src } = props;
  return (
    <>
      <h1>{name}</h1>
      <img src={logo_src} alt="logo"></img>
    </>
  );
}

export default HomePage;
