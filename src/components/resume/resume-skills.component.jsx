const ResumeSkills = ({ skills }) => {
  return (
    <div className='resume-section skills'>
      <div className='header-column'>
        <h1>
          <span>Skills</span>
        </h1>
      </div>
      <div className='content-column'>
        <div className='bars'>
          <ul className='skills-list'>
            {skills &&
              skills.map((item) => {
                return (
                  <li>
                    <span
                      className={`bar-expand ${item.skillname.toLowerCase()}`}
                    ></span>
                    <em>{item.skillname}</em>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ResumeSkills;
