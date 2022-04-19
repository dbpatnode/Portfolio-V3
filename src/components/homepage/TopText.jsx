const TopText = ({ resumeData }) => {
  const { name } = resumeData;
  return (
    <span className='first'>
      <h1 data-splitting>Hi, I'm {name}</h1>
    </span>
  );
};

export default TopText;
