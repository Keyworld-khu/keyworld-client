import React from "react";

const AdminNav = (props) => {
  const { setNav } = props;

  return (
    <div className="admin-left">
      <div className="admin-nav bg-color mr-0 fw-600">
        <nav
          onClick={() => {
            setNav("공지");
          }}
        >
          공지
        </nav>
        <nav
          onClick={() => {
            setNav("기술 정보");
          }}
        >
          기술 정보
        </nav>
        <nav
          onClick={() => {
            setNav("제품 소개");
          }}
        >
          제품 소개
        </nav>
        <nav
          onClick={() => {
            setNav("고객지원");
          }}
        >
          고객지원
        </nav>
      </div>
    </div>
  );
};

export default AdminNav;
