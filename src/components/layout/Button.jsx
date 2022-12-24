import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="register" style={{ color: "inherit", textDecoration: "inherit" }}>
      <button className="admin-notice-register bg-color f-20">등록</button>
    </Link>
  );
};

export default Button;
