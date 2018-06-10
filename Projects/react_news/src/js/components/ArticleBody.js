import React from 'react';
import ArticleComment from './ArticleComment';

export default function ArticleBody(props) {
  const text = props.text.map(item => item.bodyTextSummary);

  return (
    <div className="article__body">
      <div className="article__body-text">{text}</div>
      <ArticleComment />
    </div>
  );
}
