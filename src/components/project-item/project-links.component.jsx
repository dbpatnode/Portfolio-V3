// import { useNavigate } from 'react-router-dom';

const ProjectLinks = ({ githubUrl, linkUrl, youtube }) => {
  // const navigate = useNavigate();
  return (
    <div className='bottom'>
      <div className='link-container'>
        {githubUrl ? (
          // <div className='swing link'>
          //   <a href={githubUrl} target='_blank' rel='noreferrer'>
          //     <p>GitHub</p> <br />
          //     <i className='fa fa-github' />
          //   </a>
          // </div>
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
          // <div className='swing link'>
          //   <a href={linkUrl} target='_blank' rel='noreferrer'>
          //     <p>LiveLink</p> <br />
          //     <i className='fa fa-link' />
          //   </a>
          // </div>

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
          // <div className='swing link'>
          //   <a href={youtube} target='_blank' rel='noreferrer'>
          //     <p>Youtube</p> <br />
          //     <i className='fab fa-youtube' />
          //   </a>
          // </div>

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
