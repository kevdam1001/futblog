import React, { useState, useEffect } from 'react';
import { Button2 } from './Button2';
import { Link } from 'react-router-dom';
import './Navbar2.css';

function Navbar2() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            FUTBlog
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/feed' className='nav-links' onClick={closeMobileMenu}>
                Feed
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/search'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Search
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to='/profile'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
          </ul>
          {button && <Button2 buttonStyle='btn--outline'>Profile</Button2>}
        </div>
      </nav>
    </>
  );
}

export default Navbar2;