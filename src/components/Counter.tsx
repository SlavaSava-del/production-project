import { useState } from "react";
import classes from "./Counter.module.less";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.btn} onClick={increment}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
