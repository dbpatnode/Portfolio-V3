import './blog-card.style.scss';
import { Link } from 'react-router-dom';

const BlogItem = ({ item }) => {
  const { title, pubDate, thumbnail, id, categories } = item;

  return (
    <div key={id} className='blog-card'>
      <Link to={`/blogs/${id}`}>
        <img src={thumbnail} alt={title} />
        <h2>{title}</h2>
      </Link>

      <ul className='tags'>
        {categories.map((categorie, index) => (
          <li className='tag' key={index}>
            {categorie}
          </li>
        ))}
      </ul>
      <p>{pubDate}</p>
    </div>
  );
};

export default BlogItem;
