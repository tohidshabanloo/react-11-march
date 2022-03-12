import "./Header.css";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="header">
      <Button backgroundColor="green">Login</Button>
      <Button backgroundColor="red" style={{ marginLeft: 10 }}>
        Logout
      </Button>
    </div>
  );
};

export default Header;
