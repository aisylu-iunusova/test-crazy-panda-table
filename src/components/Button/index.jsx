import React from "react";
import "./index.scss";

const Button = ({ children, onClick, disabled = false }) => {
  return (
    <div className="button">
      <button
        className="btn"
        type="button"
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
