import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './header.style.scss';

const Header = () => {
  const [isActive, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <nav className='header'>
      <div class='hamburger-wrapper'>
        <div className={isActive ? 'navigation active' : 'navigation'}>
          <div className='ham-btn' onClick={ToggleClass}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className='links'>
            <div className='link' onClick={ToggleClass}>
              <NavLink exact='/' to='/'>
                Home
              </NavLink>
            </div>
            <div className='link' onClick={ToggleClass}>
              <NavLink to='/projects'>Projects</NavLink>
            </div>
            <div className='link' onClick={ToggleClass}>
              <NavLink to='/blogs'>Blogs</NavLink>
            </div>
            <div className='link' onClick={ToggleClass}>
              <NavLink to='/resume'>Resume</NavLink>
            </div>
            <div className='link' onClick={ToggleClass}>
              <NavLink to='/contact'>contact</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
