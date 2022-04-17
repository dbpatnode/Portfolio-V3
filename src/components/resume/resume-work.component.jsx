const ResumeWork = ({ work }) => {
  return (
    <div className='resume-section work'>
      <div className='header-column'>
        <h1>
          <span>Work</span>
        </h1>
      </div>
      <div className='content-column'>
        {work &&
          work.map((item) => {
            return (
              <div>
                <h3>
                  <a href={item.CompanyUrl} target='_blank' rel='noreferrer'>
                    {item.CompanyName}
                  </a>
                </h3>
                <p className='info'>
                  {item.specialization}
                  <span>&bull;</span>{' '}
                  <em className='date'>
                    {item.MonthOfLeaving} {item.YearOfLeaving}
                  </em>
                </p>
                <ul className='resume-bullet-points'>
                  {item.Achievements.map((a) => (
                    <li>{a.achievment}</li>
                  ))}
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ResumeWork;
