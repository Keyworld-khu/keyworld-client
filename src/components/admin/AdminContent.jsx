import React from "react";

const AdminContent = (props) => {
  const { title } = props;

  return (
    <div className="admin-content">
      <div className="admin-content-header bg-color f-30">{title}</div>
      <button>등록</button>
      <div className="admin-notice">
        <div className="admin-notice-list flex">
          <div className="admin-notice-number">1</div>
          <div className="admin-notice-title">fdfd</div>
          <div className="admin-notice-date">2022-02-22</div>
        </div>
        <div className="admin-notice-list flex">
          <div className="admin-notice-number">1</div>
          <div className="admin-notice-title">fdfd</div>
          <div className="admin-notice-date">2022-02-22</div>
        </div>
        <div className="admin-notice-list flex">
          <div className="admin-notice-number">1</div>
          <div className="admin-notice-title">fdfd</div>
          <div className="admin-notice-date">2022-02-22</div>
        </div>
        <div className="admin-notice-list flex">
          <div className="admin-notice-number">1</div>
          <div className="admin-notice-title">fdfd</div>
          <div className="admin-notice-date">2022-02-22</div>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
