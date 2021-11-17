import React from "react";
import "./index.scss";

const TableRow = ({ userId, title, body, id }) => {
  return (
    <div className="row">
      <div className="column">{id}</div>
      <div className="column">{userId}</div>
      <div className="column">{title}</div>
      <div className="column">{body}</div>
    </div>
  );
};

export default TableRow;
