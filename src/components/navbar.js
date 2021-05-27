import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuState, setMenuState] = useState(false);
  const handleClick = (e) => {
    setMenuState(!menuState);
  };
  return (
    <header>
      <nav className='navbar container mx-auto px-8 py-6 md:py-8 flex flex-wrap justify-between'>
        <div className='navbar-brand font-bold'>
          <NavLink to='/'>@retroblvk</NavLink>
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
              activeClassName='border-b-2 border-grey-300'
              exact
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className='md:mr-4'>
            <NavLink
              to='/about'
              activeClassName='border-b-2 border-grey-300'
              exact
              onClick={handleClick}
            >
              About
            </NavLink>
          </li>
          <li className='md:mr-4'>
            <NavLink
              activeClassName='border-b-2 border-grey-300'
              to='/portfolio'
              onClick={handleClick}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='border-b-2 border-grey-300'
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
