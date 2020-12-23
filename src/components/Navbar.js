import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
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
  //istedenfor 
  //<a href='https://www.facebook.com/groups/284606412504384' className='nav-links-mobile' onClick={closeMobileMenu}>
  //  BLI MED
  //</a>
  //<Link to='sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
  //  BLI MED
  //</Link>

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ØKK
            <i class='fas fa-camera'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Hjem
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/informasjon' className='nav-links' onClick={closeMobileMenu}>
                Informasjon
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Album
              </Link>
            </li> */}
            <li>
              <a href='https://www.facebook.com/groups/284606412504384' className='nav-links-mobile' onClick={closeMobileMenu}>
                BLI MED
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>BLI MED</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;