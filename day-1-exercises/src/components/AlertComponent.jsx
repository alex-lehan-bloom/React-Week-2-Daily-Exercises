import React from "react";
import { Alert } from "react-bootstrap";

function AlertComponent(props) {
  return (
    <Alert variant="danger">
      <Alert>{props.message}</Alert>
    </Alert>
  );
}

export default AlertComponent;
