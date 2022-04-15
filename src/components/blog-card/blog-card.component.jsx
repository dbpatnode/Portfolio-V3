import './blog-card.style.scss';
import BlogTags from './blog-tags.component';
import { Link } from 'react-router-dom';

const BlogItem = ({ item }) => {
  const { title, pubDate, thumbnail, id, categories } = item;

  return (
    <div key={id} className='blog-card'>
      <Link to={`/blogs/${id}`}>
        <img src={thumbnail} alt={title} />
        <h2>{title}</h2>
      </Link>

      <BlogTags tags={categories} />
      <p>{pubDate}</p>
    </div>
  );
};

export default BlogItem;
