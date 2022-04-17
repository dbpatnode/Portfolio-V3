import './project-item.style.scss';
import { stacks } from './stacks.function';
import ProjectLinks from './project-links.component';

const ProjectItem = ({ item }) => {
  const { name, imgUrl, description, githubUrl, linkUrl, youtube, techStack } =
    item;
  return (
    <div className='project-item-wrapper'>
      <div className='project-item'>
        <div
          className='image'
          style={{
            backgroundImage: `url(/images/${imgUrl})`,
          }}
        >
          <span className='card-top'>
            <h2 className='name'>{name}</h2>
          </span>

          <span className='description'>{description}</span>
        </div>

        <ProjectLinks
          githubUrl={githubUrl}
          linkUrl={linkUrl}
          youtube={youtube}
        />
      </div>
      <div className='techs-wrapper'>
        <span className='techs'>{stacks(techStack)}</span>
      </div>
    </div>
  );
};

export default ProjectItem;
