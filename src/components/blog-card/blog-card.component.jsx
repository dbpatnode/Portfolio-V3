// import React from 'react';
import './blog-card.style.scss';
// import { Link } from 'react-router-dom';

const BlogItem = ({ item }) => {
  const { title, link, pubDate, description, thumbnail } = item;

  return (
    <div className='collection-item'>
      {/* <a href={link} target='_blank' rel='noreferrer'> */}
      <div className='blogCard' border='outline-info' bg='dark' key={title}>
        <img
          className='cardImgTop'
          variant='top'
          src={thumbnail}
          alt='blog post'
          width='400'
          height='auto'
        />
        <h2>{title}</h2>
        {/* <p>{description}</p> */}
        <p>{pubDate}</p>
      </div>
      {/* </a> */}
    </div>
  );
};

export default BlogItem;
