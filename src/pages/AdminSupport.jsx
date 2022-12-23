import React from "react";

import "../assets/css/admin.css";
import AdminNav from "../components/admin/AdminNav";
import Header from "../components/layout/Header";

const AdminSupport = () => {
  return (
    <div className="admin">
      <Header />
      <div className="flex">
        <AdminNav />
        <div className="admin-content">
          <div className="admin-content-header bg-color f-30">고객지원</div>
        </div>
      </div>
    </div>
  );
};

export default AdminSupport;
