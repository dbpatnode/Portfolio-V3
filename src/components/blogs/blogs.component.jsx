import { useEffect, useState } from 'react';
import BlogItem from '../blog-card/blog-card.component';
import './blogs.style.scss';

const Blogs = ({ blogs }) => {
  return (
    <div className='blogs-container'>
      <div className='blogs'>
        {blogs &&
          blogs.map((item) => {
            return <BlogItem item={item} />;
          })}
      </div>
    </div>
  );
};

export default Blogs;
