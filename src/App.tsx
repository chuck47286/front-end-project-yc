import React, { useState } from 'react';
// import List1 from './List1';

function App() {
  // return <>{/* <List1 /> */}</>;
  // let count = 0;                      // 0. js语法无法更新react组件
  const [count, setCount] = useState(0); // 1. hooks用法
  function add() {
    // count++;
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div>
      <button onClick={add}>add {count}</button>
    </div>
  );
}

export default App;
