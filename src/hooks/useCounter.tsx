import { useState, useEffect } from "react";

function useCounter(initialValue = 0) {
  const [current, setCount] = useState(initialValue);
    const increment = () => {
      return setCount((current) => current + 1);
    }
    const decrement = () => {
      return setCount((current) => current - 1);
    }
    const reset = () => {
      return setCount(0);
    }

  return { current, increment, decrement, reset };
}



export default useCounter;