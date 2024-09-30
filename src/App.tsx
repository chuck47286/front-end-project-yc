import React from 'react';
// import List1 from './List1';
// import StateDemo1 from './StateDemo1';
// import StateDemo2 from './StateDemo2';
// import List2 from './List2';
// import Demo from './ImmerDemo';
// import Demo from './UserRefDemo';
// import UseMemoDemo from './UseMemoDemo';
// import UseCallbackDemo from './UseCallbackDemo';
// import useTitle from './hooks/UseTitle';
// import useMouse from './hooks/UseMouse';
// import { useTitle } from 'ahooks';
// import { useMouse } from 'ahooks';
import ClosureTrap from './ClosureTrap';

function App() {
  // useTitle('test app 3'); // use ahooks
  // const mouse = useMouse();
  // const { x, y } = useMouse();

  // return <>{/* <List1 /> */}</>;
  // let count = 0;                      // 0. js语法无法更新react组件
  // const [count, setCount] = useState(0); // 1. hooks用法
  // function add() {
  //   // count++;
  //   setCount(count + 1);
  //   console.log(count);
  // }

  return (
    <>
      {/* <p>
        app page {mouse.clientX} {mouse.clientY}
      </p> */}
      {/* <p>
        APP page {x} {y}
      </p> */}
      {/* <StateDemo2 /> */}
      {/* <List2 /> */}
      {/* <Demo /> */}
      {/* <UseMemoDemo /> */}
      {/* <UseCallbackDemo /> */}
      <ClosureTrap />
    </>
  );
}

export default App;
