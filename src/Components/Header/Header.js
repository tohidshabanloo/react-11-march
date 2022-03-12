import "./Header.css";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="header">
      <Button backgroundColor="#00b20d">Login</Button>
      <Button backgroundColor="#fe0000" style={{ marginLeft: 10 }}>
        Logout
      </Button>
    </div>
  );
};

export default Header;
