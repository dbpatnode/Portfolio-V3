import resumeData from '../../resumeData';
import './footer.style.scss';

const Footer = () => {
  return (
    <div className='footer-container'>
      <footer>
        <ul className='social-links'>
          {resumeData.socialLinks &&
            resumeData.socialLinks.map((item) => {
              return (
                <li>
                  <a href={item.url}>
                    <i className={item.className} />
                  </a>
                </li>
              );
            })}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
