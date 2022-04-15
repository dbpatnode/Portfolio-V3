import './blog.style.scss';
import { useParams } from 'react-router-dom';
import { Markup } from 'interweave';

const Blog = ({ blogs }) => {
  // this grabs the id from the url!
  const { blogId } = useParams();

  // returns blog with matching id as url
  const blog = blogs?.find((blog) => blog.id === parseInt(blogId));

  return (
    <div className='blog'>
      {blog?.content ? (
        <div className='content'>
          <Markup content={blog.content} />
        </div>
      ) : (
        <h2>Blog Not Found!</h2>
      )}
    </div>
  );
};

export default Blog;
