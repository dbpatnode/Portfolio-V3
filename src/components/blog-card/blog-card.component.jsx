import './blog-card.style.scss';
import BlogTags from './blog-tags.component';
import { Link } from 'react-router-dom';

const BlogItem = ({ item }) => {
  console.log(item);

  const { title, pubDate, thumbnail, id, categories } = item;

  return (
    <div key={id} className='blog-card'>
      <div className='wrapper'>
        <Link to={`/blogs/${id}`}>
          <img src={thumbnail} alt={title} />
          <h2>{title}</h2>
        </Link>
      </div>
      <div className='wrapper'>
        <BlogTags tags={categories} />
        <p>{pubDate}</p>
      </div>
    </div>
  );
};

export default BlogItem;
