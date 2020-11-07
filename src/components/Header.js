import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import socket from '../socketConfig';

// import styled from 'styled-components';

const Header = () => {
  useEffect(() => {}, []);

  return (
    <div className='row'>
      <div className='col-9'>
        <img className='logo' src={`/media/logo.png`} alt='' />
      </div>

      <nav className='col-3 navbar navbar-expand-lg navbar-light bg-light'>
        <div className='' id=''>
          <div className='navbar-nav'>
            <Link className='nav-item nav-link active' to='/'>
              Home
            </Link>
            <Link className='nav-item nav-link' to='#'>
              How To play?
            </Link>
            <Link className='nav-item nav-link' to='#'>
              About Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
