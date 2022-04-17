import { Link } from 'react-scroll';

const ScrollDownButton = () => (
  <div className='scrolldown'>
    <div className='swing'>
      <p className='third'>
        <Link to='about' spy={true} smooth={true}>
          <i className='icon-down-circle'></i>
        </Link>
      </p>
    </div>
  </div>
);

export default ScrollDownButton;
