import React, { FC, useRef } from 'react';

// const Demo: FC = () => {
//   const inputRef = useRef<HTMLInputElement>(null);

//   function selectInput() {
//     const inputEle = inputRef.current;
//     if (inputEle) inputEle.select();
//   }

//   return (
//     <div>
//       <input ref={inputRef} defaultValue="hello world" />
//       <button onClick={selectInput}>选中</button>
//     </div>
//   );
// };

const Demo: FC = () => {
  const nameRef = useRef('双语'); // js变量，不是DOM节点

  function changeName() {
    nameRef.current = '双语老师';
    console.log(nameRef);
  }

  return (
    <>
      <p>name {nameRef.current}</p>
      <button onClick={changeName}>change name</button>
    </>
  );
};

export default Demo;
