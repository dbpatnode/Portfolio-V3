import SocialLinks from './SocialLinks';

const MiddleText = ({ resumeData }) => {
  const { roleDescription } = resumeData;
  return (
    <span className='second'>
      <h3> {roleDescription}</h3>
      <hr />
      <SocialLinks resumeData={resumeData} />
    </span>
  );
};

export default MiddleText;
