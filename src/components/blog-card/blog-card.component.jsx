import React from 'react';
import './blog-card.style.scss';

const BlogItem = ({ item }) => {
  const { title, link, pubDate, description, thumbnail } = item;

  return (
    <div className='collection-item'>
      <a href={link} target='_blank' rel='noreferrer'>
        <div className='blogCard' border='outline-info' bg='dark' key={title}>
          <img
            className='cardImgTop'
            variant='top'
            src={thumbnail}
            alt='blog post'
            width='400'
            height='auto'
          />
          <h3>{title}</h3>
          <p>{pubDate}</p>
        </div>
      </a>
    </div>
  );
};

export default BlogItem;
