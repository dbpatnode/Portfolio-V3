const ProjectLinks = ({ githubUrl, linkUrl, youtube }) => {
  return (
    <div className='bottom'>
      <div className='link-container'>
        {githubUrl ? (
          <div className='swing link'>
            <a href={githubUrl} target='_blank' rel='noreferrer'>
              <i className='fa fa-github' />
            </a>
          </div>
        ) : null}
        {linkUrl ? (
          <div className='swing link'>
            <a href={linkUrl} target='_blank' rel='noreferrer'>
              <i className='fa fa-link' />
            </a>
          </div>
        ) : null}
        {youtube ? (
          <div className='swing link'>
            <a href={youtube} target='_blank' rel='noreferrer'>
              <i className='fab fa-youtube' />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectLinks;
