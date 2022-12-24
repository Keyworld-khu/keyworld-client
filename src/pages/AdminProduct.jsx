import React from "react";

import "../assets/css/admin.css";
import AdminNav from "../components/admin/AdminNav";
import AdminProductContent from "../components/admin/AdminProductContent";
import Header from "../components/layout/Header";

const AdminProduct = () => {
  return (
    <div className="admin">
      <Header />
      <div className="flex">
        <AdminNav />
        <AdminProductContent title="제품 소개" />
      </div>
    </div>
  );
};

export default AdminProduct;
