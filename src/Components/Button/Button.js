import "./Button.css";

const Button = ({ children, backgroundColor, style }) => {
  return (
    <button className="button" style={{ backgroundColor, ...style }}>
      {children}
    </button>
  );
};

export default Button;
