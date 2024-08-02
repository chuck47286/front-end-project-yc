import React, { FC, useState } from 'react';

const StateDemo2: FC = () => {
  // const [list, setList] = useState(['x', 'y']); // 1. hooks用法
  // function changeList() {
  //   // setList([...list, 'z']);
  //   setList(list.concat('z'));
  //   // setList(list.push('z')); // push 返回结果不是list
  // }

  const [person, setAge] = useState({ name: 'yucheng', age: 19 }); // 1. hooks用法
  function changeAge() {
    // setAge({ ...person, age: 20 });
    setAge({
      name: 'yucheng123',
      age: 30,
    });
  }

  return (
    <>
      <h2>useState 数据不可变</h2>
      <div>
        {/* <h3>{list}</h3>
        <button onClick={changeList}>add list</button> */}
        {/* js中使用JSON.stringify来解构 对象 */}
        <div>{JSON.stringify(person)}</div>
        <button onClick={changeAge}>change person</button>
      </div>
    </>
  );
};

export default StateDemo2;
