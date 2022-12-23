import React from "react";

import "../assets/css/admin.css";
import AdminNav from "../components/admin/AdminNav";
import Header from "../components/layout/Header";

const AdminProduct = () => {
  return (
    <div className="admin">
      <Header />
      <div className="flex">
        <AdminNav />
        <div className="admin-content">
          <div className="admin-content-header bg-color f-30">제품 소개</div>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
