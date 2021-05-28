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
          <NavLink
            to='/'
            activeClassName='active'
            className='md:mr-4'
            exact
            onClick={handleClick}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to='/about'
            activeClassName='active'
            className='box-border md:mr-4'
            exact
            onClick={handleClick}
          >
            <li>About</li>
          </NavLink>
          <NavLink
            activeClassName='active'
            className='box-border md:mr-4 '
            to='/portfolio'
            onClick={handleClick}
          >
            <li>Portfolio</li>
          </NavLink>
          <NavLink
            activeClassName='active'
            className='box-border md:mr-4'
            to='/blog'
            onClick={handleClick}
          >
            <li>Blog</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
