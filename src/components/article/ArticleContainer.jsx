import React from 'react';
import PropTypes from 'prop-types';



const ArticleContainer = ({ articles }) => {
  const articleElements = articles.map(article => (
    <a key={article.id}
      href={article.url}>
      <div 
         
        // eslint-disable-next-line max-len
        style={{ border: 'black 1px', maxWidth: '490px', backgroundColor: '#fff1db', padding: '10px', margin: '10px' }} >
        <h2>{article.title}</h2>
        <img 
          style={{ maxWidth: '300px' }} 
          src={article.urlToImage} />
        <p>{article.description}</p>
      </div>
    </a>
  ));

  return (
    <div>
      {articleElements}
    </div>
  );
};

ArticleContainer.propTypes = {
  articles: PropTypes.any.isRequired
};
export default ArticleContainer;
