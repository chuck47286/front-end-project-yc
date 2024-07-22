import React, { FC, useState } from 'react';
import QuestionCard from './components/QuestionCard';
// import './list1.css';

// TS 类型
const List2: FC = () => {
  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
  ]);

  function addList() {
    const r = Math.random().toString().slice(-3);
    setQuestionList([
      ...questionList,
      {
        id: 'q' + r,
        title: '问卷' + r,
        isPublished: false,
      },
    ]);
  }

  // function edit(id: string) {
  //   console.log('edit ', id);
  // }
  function deleteQuestion(id: string) {
    setQuestionList(
      questionList.filter((q) => {
        if (q.id === id) return false;
        else return true;
      })
    );
  }

  function publishQuestion(id: string) {
    setQuestionList(
      questionList.map((q) => {
        if (q.id !== id) return q;
        else return { ...q, isPublished: true };
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
      </div>
    </>
  );
};

export default List2;
