import { useState } from "react";
import Button from "../Button/Button";
import "./Counter.css";

const Counter = () => {
  const [count, setcount] = useState(10);
  const [limit, setlimit] = useState(10);
  const increament = () => {
    if (count < limit) {
      setcount(count + 1);
    }
  };
  const decreament = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };
  const colorHnadler = () => {
    if (count > 5) return "green";
    if (count < 2) return "red";
  };
  const changeHandler = (value) => {
    setlimit(value);
  };

  return (
    <>
      <div>
        <label htmlFor="">limit</label>
        <input
          type="number"
          onChange={(event) => changeHandler(event.target.value)}
        />
      </div>
      <div className="counter" style={{ color: colorHnadler() }}>
        <button
          style={{ backgroundColor: colorHnadler() }}
          onClick={increament}
        >
          +
        </button>
        <div style={{ color: colorHnadler() }}>{count}</div>
        <button
          style={{ backgroundColor: colorHnadler() }}
          onClick={decreament}
          style={{ marginLeft: 10 }}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
