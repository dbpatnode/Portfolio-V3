const BlogTag = ({ tags }) => {
  return (
    <ul className='tags'>
      {tags.map((tag, index) => (
        <li className='tag' key={index}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default BlogTag;
