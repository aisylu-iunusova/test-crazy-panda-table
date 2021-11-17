import React from "react";
import "./index.scss";

const TableHeader = ({ onClick }) => {
  return (
    <div className="row">
      <div className="column id" onClick={onClick}>
        ID
      </div>
      <div className="column">USER ID</div>
      <div className="column">TITLE</div>
      <div className="column">CONTENT</div>
    </div>
  );
};

export default TableHeader;
