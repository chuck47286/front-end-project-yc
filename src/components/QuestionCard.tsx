import React, { FC } from 'react';
import './QuestionCard.css';

type propsType = {
  id: string;
  title: string;
  isPublished: boolean;
  deleteQuestion?: (id: string) => void;
  publishQuestion?: (id: string) => void;
};

const QuestionCard: FC<propsType> = (props) => {
  const { id, title, isPublished, deleteQuestion, publishQuestion } = props;

  function publish(id: string) {
    publishQuestion && publishQuestion(id);
  }

  function del(id: string) {
    deleteQuestion && deleteQuestion(id);
  }

  return (
    <div key={id} className="list-item">
      <strong>{title}</strong>
      {/* 不换行空格 */}
      &nbsp;
      {/* 判断 */}
      {isPublished ? (
        <span style={{ color: 'green' }}>已发布</span>
      ) : (
        <span>未发布</span>
      )}
      &nbsp;
      {/* 发布问卷 */}
      <button
        onClick={() => {
          publish(id);
        }}
      >
        编辑问卷
      </button>
      {/* 删除问卷 */}
      <button
        onClick={() => {
          del(id);
        }}
      >
        删除问卷
      </button>
    </div>
  );
};

export default QuestionCard;
