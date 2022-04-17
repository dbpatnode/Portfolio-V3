import './resume.style.scss';
import Education from './resume-education.component';
import Work from './resume-work.component';
import Skills from './resume-skills.component';

const Resume = ({ resumeData }) => {
  const { education, work, skills } = resumeData;
  return (
    <div id='resume'>
      <Education education={education} />
      <Work work={work} />
      <Skills skills={skills} />
    </div>
  );
};

export default Resume;
