import './blog.style.scss';
import { useParams } from 'react-router-dom';
const Blog = ({ blogs }) => {
  console.log('blogs: ', blogs);
  // this grabs the id from the url!
  const { blogId } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(blogId));
  console.log('blog: ', blog);

  const { content, title, categories } = blog;
  return (
    <div className='blog'>
      {blog ? (
        <>
          <div>
            <p>{blogId}</p>
          </div>
          <div>{title}</div>
          <div>{content}</div>
        </>
      ) : (
        <h2>Blog Not Found!</h2>
      )}
    </div>
  );
};

export default Blog;
