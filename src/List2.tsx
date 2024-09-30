import React, { FC, useState, useEffect } from 'react';
import QuestionCard from './components/QuestionCard';
// import './list1.css';
import './List2.css';
import { produce } from 'immer';

// TS 类型
const List2: FC = () => {
  useEffect(() => {
    console.log('组件List2 加载执行.');
    return () => {
      console.log('组件List2 销毁执行.');
    };
  }, []); // useEffect 副作用函数使用 [] 表示在组件加载以及销毁时执行

  // useEffect(() => {
  //   console.log('无依赖 加载.');
  //   return () => {
  //     console.log('无依赖 销毁.');
  //   };
  // }); // useEffect 副作用函数使用 无依赖项 表示在组件每次渲染都会执行（禁止）

  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log('依赖count变化 list2组件加载');
  //   return () => {
  //     console.log('依赖count变化 list2组件销毁。');
  //   };
  // }, [count]);

  // function addCount() {
  //   setCount(count + 1);
  // }

  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
  ]);

  function addList() {
    const r = Math.random().toString().slice(-3);
    // (1) 不可变数据
    // setQuestionList([
    //   ...questionList,
    //   {
    //     id: 'q' + r,
    //     title: '问卷' + r,
    //     isPublished: false,
    //   },
    // ]);

    // （2）immer implementation
    setQuestionList(
      produce((draft) => {
        draft.push({
          id: 'q' + r,
          title: '问卷' + r,
          isPublished: false,
        });
      })
    );
  }

  // function edit(id: string) {
  //   console.log('edit ', id);
  // }
  function deleteQuestion(id: string) {
    // setQuestionList(
    //   questionList.filter((q) => {
    //     if (q.id === id) return false;
    //     else return true;
    //   })
    // );
    // (2) immer的实现方式
    setQuestionList(
      produce((draft) => {
        const index = draft.findIndex((q) => q.id === id);
        draft.splice(index, 1);
      })
    );
  }

  function publishQuestion(id: string) {
    // setQuestionList(
    //   questionList.map((q) => {
    //     if (q.id !== id) return q;
    //     else return { ...q, isPublished: true };
    //   })
    // );
    // (2) immer implementation
    setQuestionList(
      produce((draft) => {
        const q = draft.find((item) => item.id === id);
        if (q) q.isPublished = true;
      })
    );
  }

  return (
    <>
      <div>
        <h1>问卷列表页2</h1>
        <div>
          {questionList.map((question) => {
            const { id, title, isPublished } = question;
            return (
              <QuestionCard
                key={id}
                id={id}
                title={title}
                isPublished={isPublished}
                deleteQuestion={deleteQuestion}
                publishQuestion={publishQuestion}
              />
            );
          })}
        </div>
        <button onClick={addList}>新增表单</button>
        {/* <button onClick={addCount}>新增计数{count}</button> */}
      </div>
    </>
  );
};

export default List2;
