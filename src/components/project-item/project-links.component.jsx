const ProjectLinks = ({ githubUrl, linkUrl, youtube }) => {
  return (
    <div className='bottom'>
      <div className='link-container'>
        {githubUrl ? (
          <button
            className='swing'
            onClick={() => {
              window.open(githubUrl, '_blank');
            }}
          >
            <i className='fa fa-github' /> <br />
            Github
          </button>
        ) : null}
        {linkUrl ? (
          <button
            className='swing'
            onClick={() => {
              window.open(linkUrl, '_blank');
            }}
          >
            <i className='fa fa-link' /> <br />
            Live Link
          </button>
        ) : null}
        {youtube ? (
          <button
            className='swing'
            onClick={() => {
              window.open(youtube, '_blank');
            }}
          >
            <i className='fab fa-youtube' /> <br />
            Youtube
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectLinks;
