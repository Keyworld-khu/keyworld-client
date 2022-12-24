import React, { useState } from "react";
import Header from "../components/layout/Header";

import "../assets/css/admin.css";
import AdminNav from "../components/admin/AdminNav";

const Admin = () => {
  return (
    <div className="admin">
      <Header />
      <div className="flex">
        <AdminNav />
      </div>
    </div>
  );
};

export default Admin;
