import React from 'react';
import ArticleComment from './ArticleComment';

function createMarkup(a) {
  return { __html: a };
}

export default function ArticleBody(props) {
  console.log(props.text);
  const text = props.text.map(item => item.bodyHtml);
  const markup = text.reduce((sum, current) => sum + current);

  return (
    <div className="article__body">
      <div className="article__body-text" dangerouslySetInnerHTML={createMarkup(markup)} />
      <ArticleComment />
    </div>
  );
}
