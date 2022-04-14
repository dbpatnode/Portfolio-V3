import { useEffect, useState } from 'react';
import BlogItem from '../blog-card/blog-card.component';
import './blogs.style.scss';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const url =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@danielpatnode';

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        const blogs = data.items.map((blog, index) => {
          blog.id = index;
          return blog;
        });
        setBlogs(blogs);
      });
  }, []);

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
