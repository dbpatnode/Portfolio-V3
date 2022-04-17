import HomePage from '../homepage/homepage.component';
import About from '../about/about.component';

const LandingPage = ({ resumeData }) => {
  return (
    <>
      <HomePage resumeData={resumeData} />
      <About resumeData={resumeData} />
    </>
  );
};

export default LandingPage;
