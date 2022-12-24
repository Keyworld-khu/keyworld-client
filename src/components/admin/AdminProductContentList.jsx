const AdminProductContentList = (props) => {
  const { key, number, title, src } = props;
  return (
    <div className="admin-product-list flex" key={key}>
      <div className="admin-product-number">{number}</div>
      <div className="admin-content-img">
        <img src={src} />
      </div>
      <div className="admin-product-title">제품명: {title}</div>
    </div>
  );
};

export default AdminProductContentList;
