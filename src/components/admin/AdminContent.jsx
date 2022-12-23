import React from "react";

const AdminContent = (props) => {
  const { nav } = props;

  return (
    <div className="admin-content">
      <div className="admin-content-header bg-color f-30">{nav}</div>
    </div>
  );
};

export default AdminContent;
