import React from "react";
import "../components/styles/Button.css";

const CustomBtn = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
      <span />
    </button>
  );
};

export default CustomBtn;
