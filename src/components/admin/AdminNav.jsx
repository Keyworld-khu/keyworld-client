import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  const menu = [
    {
      name: "공지",
      addr: "/admin/notice",
    },
    {
      name: "기술 정보",
      addr: "/admin/tech",
    },
    {
      name: "제품 소개",
      addr: "/admin/product",
    },
    {
      name: "고객지원",
      addr: "/admin/support",
    },
  ];

  return (
    <div className="admin-left">
      <div className="admin-nav bg-color mr-0 fw-600">
        {menu.map((item) => (
          <Link
            to={item.addr}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <nav key={item.addr}>{item.name}</nav>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminNav;
