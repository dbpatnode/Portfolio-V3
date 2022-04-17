const ResumeEducation = ({ education }) => {
  return (
    <div className='resume-section education'>
      <div className='header-column'>
        <h1>
          <span>Education</span>
        </h1>
      </div>
      <div className='content-column'>
        {education &&
          education.map((item) => {
            return (
              <div>
                <h3>
                  <a href={item.UniversityUrl} target='_blank' rel='noreferrer'>
                    {item.UniversityName}
                  </a>
                </h3>
                <p className='info'>
                  {item.specialization}
                  <span>&bull;</span>{' '}
                  <em className='date'>
                    {item.MonthOfPassing} {item.YearOfPassing}
                  </em>
                </p>
                <p>{item.Achievements}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ResumeEducation;
