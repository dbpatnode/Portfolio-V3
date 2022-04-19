import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

export const BlogsContext = createContext(null);

// creates custom provider hook:
export const useBlogsProvider = () => useContext(BlogsContext);

// Passes this state to children of provider
const BlogsProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    console.log('hey there friend :)');
    // const mediumRSS = 'https://danielpatnode.medium.com/feed';
    // const jsonURL = `https://api.rss2json.com/v1/api.json?rss_url=${mediumRSS}`;
    // fetch(jsonURL)
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     const blogs = data.items.map((blog, index) => {
    //       blog.id = index;
    //       return blog;
    //     });
    //     setBlogs(blogs);
    //   });
  }, []);

  return (
    <BlogsContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogsContext.Provider>
  );
};

export default BlogsProvider;
