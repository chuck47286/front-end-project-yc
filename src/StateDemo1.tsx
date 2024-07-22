import React, { FC, useState } from 'react';

const StateDemo1: FC = () => {
  // return <>{/* <List1 /> */}</>;
  // let count = 0;                      // 0. js语法无法更新react组件
  const [count, setCount] = useState(0); // 1. hooks用法
  function add() {
    // count++;
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    console.log(count);
  }

  return (
    <>
      <div>
        <button onClick={add}>add {count}</button>
      </div>
    </>
  );
};

export default StateDemo1;
