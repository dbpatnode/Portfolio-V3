import './homepage.style.scss';

import TopText from './TopText';
import MiddleText from './MiddleText';
import ScrollDownButton from './ScrollDownButton';

const HomePage = ({ resumeData }) => (
  <div className='homepage'>
    <div className='banner-text'>
      <TopText resumeData={resumeData} />
      <MiddleText resumeData={resumeData} />
      <ScrollDownButton resumeData={resumeData} />
    </div>
  </div>
);

export default HomePage;
