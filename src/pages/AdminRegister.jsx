import React from "react";
import { useParams } from "react-router-dom";

import "../assets/css/admin.css";
import AdminNav from "../components/admin/AdminNav";
import AdminRegisterContent from "../components/admin/AdminRegisterContent";
import Header from "../components/layout/Header";

const AdminRegister = () => {
  const params = useParams();
  const title = params.title;

  const LIST = [
    {
      title: "notice",
      name: "공지 > 등록",
      subTitle: "제목",
      subContent: "내용",
    },
    {
      title: "authentication",
      name: "기술 정보 > 인증서 > 등록",
      subTitle: "인증서",
      subContent: "인증서 등록",
    },
    {
      title: "patent",
      name: "기술 정보 > 특허 > 등록",
      subTitle: "특허",
      subContent: "특허 등록",
    },
    {
      title: "inspection",
      name: "기술 정보 > 검사 설비 > 등록",
      subTitle: "검사 설비",
      subContent: "검사 설비 등록",
    },
    {
      title: "product",
      name: "제품 소개 > 등록",
      subTitle: "제품 소개",
      subContent: "제품 소개 등록",
    },
  ];

  const curTitle = LIST.filter((list) => list.title === title);

  return (
    <div className="admin">
      <Header />
      <div className="flex">
        <AdminNav />
        <AdminRegisterContent
          title={curTitle[0].name}
          subTitle={curTitle[0].subTitle}
          subContent={curTitle[0].subContent}
        />
      </div>
    </div>
  );
};

export default AdminRegister;
