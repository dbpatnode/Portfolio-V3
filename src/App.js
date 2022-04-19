import './fontello/css/fontello.css';
import resumeData from './resumeData';
import { Routes, Route } from 'react-router-dom';
import Header from '../src/components/header/header.component';
import LandingPage from '../src/components/landingpage/landingpage.component';
import Resume from '../src/components/resume/resume.component';
import Projects from '../src/components/projects/projects.component';
// import Blogs from '../src/components/blogs/blogs.component';
// import Blog from './components/blog/blog.component';
import Contact from '../src/components/contact/contact.component';
import Footer from '../src/components/footer/footer.component';
import ComingSoon from './components/coming-soon/coming-soon.component';
// import { useBlogsProvider } from './providers/blogsprovider';

function App() {
  // const { blogs } = useBlogsProvider();

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage resumeData={resumeData} />} />
        <Route path='/resume' element={<Resume resumeData={resumeData} />} />
        <Route
          path='/projects'
          element={<Projects resumeData={resumeData} />}
        />
        {/* <Route path='/blogs/:blogId' element={<Blog blogs={blogs} />} />
        <Route path='/blogs' element={<Blogs blogs={blogs} />} /> */}
        <Route path='/blogs/:blogId' element={<ComingSoon />} />
        <Route path='/blogs' element={<ComingSoon />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
