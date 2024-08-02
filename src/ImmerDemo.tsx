import React, { FC, useState } from 'react';
import { produce } from 'immer';

const Demo: FC = () => {
  // const [userInfo, setUserInfo] = useState({ name: 'yucheng', age: 19 }); // 1. hooks用法
  // function changePerson() {
  //   // setUserInfo({ ...userInfo, age: 20 });
  //   setUserInfo(
  //     produce((draft) => {
  //       draft.age = 21;
  //       draft.name = 'yucheng123';
  //     })
  //   );
  // }

  const [list, setList] = useState(['x', 'y']); // 1. hooks用法
  function changeList() {
    // setList([...list, 'z']);
    // setList(list.concat('z'));
    // setList(list.push('z')); // push 返回结果不是list
    setList(
      produce((draft) => {
        draft.push('z');
      })
    );
  }

  return (
    <>
      <h2>useState 数据不可变</h2>
      <div>
        {/* <div>{JSON.stringify({ userInfo })}</div>
        <button onClick={changePerson}>change age</button> */}
        <div>{JSON.stringify({ list })}</div>
        <button onClick={changeList}>add list</button>
      </div>
    </>
  );
};

export default Demo;
