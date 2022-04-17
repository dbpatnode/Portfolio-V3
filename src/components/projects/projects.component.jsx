import resumeData from '../../resumeData';
import './projects.style.scss';
import ProjectItem from '../project-item/project-item.component';

const Projects = () => {
  const { portfolio } = resumeData;
  return (
    <div className='projects-container'>
      <div className='projects'>
        {portfolio &&
          portfolio.map((item) => {
            return <ProjectItem item={item} />;
          })}
      </div>
    </div>
  );
};

export default Projects;
