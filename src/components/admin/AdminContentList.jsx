const AdminContentList = (props) => {
  const { key, number, title, date } = props;
  return (
    <div className="admin-content-list flex" key={key}>
      <div className="admin-content-number">{number}</div>
      <div className="admin-content-title">{title}</div>
      <div className="admin-content-date">{date}</div>
    </div>
  );
};

export default AdminContentList;
