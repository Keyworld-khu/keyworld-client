import React from "react";
import AdminContentList from "./AdminContentList";

import Button from "../layout/Button";

export const DUMMY = [
  {
    number: 0,
    title: "긴급 공지",
    date: "2022-02-22",
  },
  {
    number: 1,
    title: "연말 휴가",
    date: "2022-02-22",
  },
  {
    number: 2,
    title: "새해 인사",
    date: "2022-02-22",
  },
  {
    number: 3,
    title: "공지",
    date: "2022-02-22",
  },
];

const AdminContent = (props) => {
  const { title, display } = props;

  return (
    <div className="admin-content">
      <div className="admin-content-header bg-color f-30">{title}</div>
      <div className={display}>
        <Button />
      </div>
      <div className="admin-content-main">
        {DUMMY.map((item) => (
          <AdminContentList
            key={item.number}
            number={item.number}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminContent;
