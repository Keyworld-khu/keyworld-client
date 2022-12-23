import React from "react";
import Header from "../components/layout/Header";

import "../assets/css/admin.css";

const Admin = () => {
  return (
    <div className="admin">
      <Header />
      <div className="flex">
        <div className="admin-left">
          <div className="admin-nav mr-0 fw-600">
            <nav>공지</nav>
            <nav>기술 정보</nav>
            <nav>제품 소개</nav>
            <nav>고객지원</nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
