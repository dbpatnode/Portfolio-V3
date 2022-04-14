import './fontello/css/fontello.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../src/components/header/header.component';
import LandingPage from '../src/components/landingpage/landingpage.component';
import Resume from '../src/components/resume/resume.component';
import Projects from '../src/components/projects/projects.component';
import Blogs from '../src/components/blogs/blogs.component';
import Blog from './components/blog/blog.component';
import Contact from '../src/components/contact/contact.component';
import Footer from '../src/components/footer/footer.component';
import { useBlogsProvider } from './providers/blogsprovider';

function App() {
  const { blogs } = useBlogsProvider();
  console.log('blogs from app: ', blogs);
  // console.log(blogs);
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blogs' element={<Blogs blogs={blogs} />} />
        <Route path='/blogs/:id' element={<Blog blogs={blogs} />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
