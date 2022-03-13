import Button from "../Button/Button";
import "./Counter.css";

const Counter = () => {
  return (
    <div className="counter">
      <Button backgroundColor="black">+</Button>
      <Button backgroundColor="black" style={{ marginLeft: 10 }}>
        -
      </Button>
    </div>
  );
};

export default Counter;
