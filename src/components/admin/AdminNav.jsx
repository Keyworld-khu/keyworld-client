import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  const [isModal, setIsModal] = useState(false);

  const clickHandler = () => {
    setIsModal((isModal) => !isModal);
  };

  return (
    <div className="admin-left">
      <div className="admin-nav bg-color mr-0 fw-600">
        <Link
          to={`${"/admin/notice"}`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <nav>공지</nav>
        </Link>

        <nav onClick={clickHandler}>기술 정보</nav>
        <div
          className={
            isModal
              ? "admin-tech-show admin-tech"
              : "admin-tech-hide admin-tech"
          }
        >
          <Link
            to={`${"/admin/authentication"}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <nav className="admin-tech-nav">인증서</nav>
          </Link>
          <Link
            to={`${"/admin/patent"}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <nav className="admin-tech-nav">특허</nav>
          </Link>
          <Link
            to={`${"/admin/inspection"}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <nav className="admin-tech-nav">검사 설비</nav>
          </Link>
        </div>
        <Link
          to={`${"/admin/product"}`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <nav>제품 소개</nav>
        </Link>

        <Link
          to={`${"/admin/support"}`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <nav>고객지원</nav>
        </Link>
      </div>
    </div>
  );
};

export default AdminNav;
