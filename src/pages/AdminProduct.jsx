import React from "react";

import "../assets/css/admin.css";
import AdminContent from "../components/admin/AdminContent";
import AdminNav from "../components/admin/AdminNav";
import Header from "../components/layout/Header";

const AdminProduct = () => {
  return (
    <div className="admin">
      <Header />
      <div className="flex">
        <AdminNav />
        <AdminContent title="제품 소개" />
      </div>
    </div>
  );
};

export default AdminProduct;
