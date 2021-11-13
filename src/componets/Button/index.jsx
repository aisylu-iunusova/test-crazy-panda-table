import React from "react";
import "./index.scss";

const Button = ({ children }) => {
  return (
    <div className="button">
      <button className="btn">{children}</button>
    </div>
  );
};

export default Button;
