import React, { FC, useState, useCallback } from 'react';

const Demo: FC = () => {
  const [text, setText] = useState('hello');

  const fn1 = () => console.log('fn1 works' + text);

  const fn2 = useCallback(() => {
    console.log('fn2 works' + text);
  }, [text]);

  return (
    <>
      <div>
        <button onClick={fn1}>fn1</button> &nbsp;{' '}
        <button onClick={fn2}>fn2</button>
      </div>
      <div>
        <input onChange={(e) => setText(e.target.value)} value={text}></input>
      </div>
    </>
  );
};

export default Demo;
