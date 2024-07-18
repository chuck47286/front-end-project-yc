import React, { FC } from 'react';
import './QuestionCard.css';

type propsType = {
  id: string;
  title: string;
  isPublished: boolean;
};

const QuestionCard: FC<propsType> = (props) => {
  const { id, title, isPublished } = props;

  function edit(id: string) {
    console.log('edit ', id);
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
      {/* 编辑问卷 */}
      <button
        onClick={() => {
          edit(id);
        }}
      >
        编辑问卷
      </button>
    </div>
  );
};

export default QuestionCard;
