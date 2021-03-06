const SocialLinks = ({ resumeData }) => {
  const { socialLinks } = resumeData;
  return (
    <ul className='social'>
      {socialLinks.map((item, index) => {
        return (
          <div key={index} className='swing'>
            <li key={item.name}>
              <a href={item.url} target='_blank' rel='noreferrer'>
                <i className={item.className}> </i>
              </a>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
