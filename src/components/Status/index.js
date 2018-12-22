import React from "react";
import "./style.css";

function Status(props) {
    return <h2 className="status">{props.children}</h2>;
  }

export default Status;