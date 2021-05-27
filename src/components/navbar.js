import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuState, setMenuState] = useState(false);
  const handleClick = (e) => {
    setMenuState(!menuState);
  };
  return (
    <header>
      <nav className='navbar container mx-auto px-8 lg:px-20 py-6 md:py-8 flex flex-wrap justify-between'>
        <div className='navbar-brand font-bold'>
          <NavLink to='/'>
            <span className='custom-purple'>@</span>retroblvk
          </NavLink>
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul
          className={menuState ? 'flex navbar-nav open-nav' : 'flex navbar-nav'}
        >
          <li className='md:mr-4'>
            <NavLink
              to='/'
              activeClassName='border-custom-purple'
              exact
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className='md:mr-4'>
            <NavLink
              to='/about'
              activeClassName='border-custom-purple'
              exact
              onClick={handleClick}
            >
              About
            </NavLink>
          </li>
          <li className='md:mr-4'>
            <NavLink
              activeClassName='border-custom-purple'
              to='/portfolio'
              onClick={handleClick}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='border-custom-purple'
              to='/blog'
              onClick={handleClick}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
