const TopText = ({ resumeData }) => {
  const { name } = resumeData;
  return (
    <p className='first'>
      <h1 data-splitting>Hi, I'm {name}</h1>
    </p>
  );
};

export default TopText;
