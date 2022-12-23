import React, { useState } from "react";
import Header from "../components/layout/Header";

import "../assets/css/admin.css";
import AdminNav from "../components/admin/AdminNav";
import AdminContent from "../components/admin/AdminContent";

const Admin = () => {
  const [nav, setNav] = useState("공지");

  return (
    <div className="admin">
      <Header />
      <div className="flex">
        <AdminNav setNav={setNav} />
        <AdminContent nav={nav} />
      </div>
    </div>
  );
};

export default Admin;
