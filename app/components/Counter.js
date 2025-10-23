'use client';

import { useState } from 'react';
// here is an example for a simple counter component to use useState hook

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <div className="counter-value text-center">
        <h2 className="text-2xl font-bold mb-4 mt-4">Counter: {count}</h2>
      </div>

      <div className="btns flex gap-4">
        <button onClick={increment} className="bg-green-400 p-2 text-white">
          increment
        </button>
        <button onClick={reset} className="bg-orange-400 p-2 text-white">
          reset
        </button>
        <button onClick={decrement} className="bg-red-400 p-2 text-white">
          decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
