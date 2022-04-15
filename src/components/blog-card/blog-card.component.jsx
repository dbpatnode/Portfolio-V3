// import React from 'react';
import './blog-card.style.scss';
import { Link } from 'react-router-dom';

const BlogItem = ({ item }) => {
  const { title, link, pubDate, description, thumbnail, id } = item;

  return (
    <div key={id} className='collection-item'>
      <Link to={`/blogs/${id}`}>
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
          <p>{pubDate}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
