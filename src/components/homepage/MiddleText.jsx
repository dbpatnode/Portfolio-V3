import SocialLinks from './SocialLinks';

const MiddleText = ({ resumeData }) => {
  const { roleDescription } = resumeData;
  return (
    <p className='second'>
      <h3> {roleDescription}</h3>
      <hr />
      <SocialLinks resumeData={resumeData} />
    </p>
  );
};

export default MiddleText;
