import React from "react";
import AdminProductContentList from "./AdminProductContentList";
import img1 from "../../assets/imgs/test1.png";
import img2 from "../../assets/imgs/test2.png";

import Button from "../layout/Button";

export const DUMMY = [
  {
    number: 0,
    name: "WD909",
    src: img1,
  },
  {
    number: 1,
    name: "WD101",
    src: img2,
  },
];

const AdminProductContent = (props) => {
  const { title } = props;

  return (
    <div className="admin-content">
      <div className="admin-content-header bg-color f-30">{title}</div>
      <Button />
      <div className="admin-content-main">
        {DUMMY.map((item) => (
          <AdminProductContentList
            key={item.number}
            number={item.number}
            title={item.name}
            src={item.src}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminProductContent;
