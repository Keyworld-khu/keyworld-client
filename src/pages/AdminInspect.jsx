import React from "react";

import "../assets/css/admin.css";
import AdminContent from "../components/admin/AdminContent";
import AdminNav from "../components/admin/AdminNav";
import Header from "../components/layout/Header";

const AdminInspect = () => {
  return (
    <div className="admin">
      <Header />
      <div className="flex">
        <AdminNav />
        <AdminContent title="기술 정보 > 검사 설비" />
      </div>
    </div>
  );
};

export default AdminInspect;
