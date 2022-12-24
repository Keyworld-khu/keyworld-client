import { Link } from "react-router-dom";

const Button = () => {
  return (
    <button className="admin-notice-register bg-color f-20">
      <Link
        to="register"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        등록
      </Link>
    </button>
  );
};

export default Button;
