import React from "react";

import "../assets/css/admin.css";
import AdminContent from "../components/admin/AdminContent";
import AdminNav from "../components/admin/AdminNav";
import Header from "../components/layout/Header";

const AdminSupport = () => {
  return (
    <div className="admin">
      <Header />
      <div className="flex">
        <AdminNav />
        <AdminContent title="고객지원" display="none" />
      </div>
    </div>
  );
};

export default AdminSupport;
