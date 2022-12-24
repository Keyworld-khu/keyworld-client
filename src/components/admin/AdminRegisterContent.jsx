import React from "react";
import Button from "../layout/Button";

const AdminRegisterContent = (props) => {
  const { title, subTitle, subContent } = props;
  return (
    <div className="admin-content">
      <div className="admin-content-header bg-color f-30">{title}</div>
      <div className="admin-register-btn">
        <Button />
      </div>
      <div className="admin-register-container">
        <div className="f-30">{subTitle}</div>
        <div className="admin-register-title-input">
          <input />
        </div>
        <div className="f-30">{subContent}</div>
        <textarea className="admin-register-content" />
      </div>
    </div>
  );
};

export default AdminRegisterContent;
