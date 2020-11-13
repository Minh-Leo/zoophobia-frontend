import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import socket from '../socketConfig';

import styled from 'styled-components';

const Header = ({ player }) => {
  useEffect(() => {}, []);

  return (
    <div className='row'>
      <div className='col-9'>
        <Logo className='logo' src={`/media/logo.png`} alt='' />
      </div>

      <nav className='col-3 navbar navbar-expand-lg navbar-light bg-light'>
        <h3>
          {' '}
          {player.isCurrentPlayer
            ? `${player.nickName} - your turn`
            : `${player.nickName}`}
        </h3>
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

const Logo = styled.img`
  position: relative;
  left: 50%;
`;

export default Header;
