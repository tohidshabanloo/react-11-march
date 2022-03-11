import "./Header.css";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="header">
      <button style={{ backgroundColor: "green" }}>Login</button>
      <button style={{ backgroundColor: "red" }}>Logout</button>
    </div>
  );
};

export default Header;
