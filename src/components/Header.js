import React, { useEffect } from 'react';
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
        {player ? (
          <PlayerStatus>
            {' '}
            {player.isCurrentPlayer
              ? `${player.nickName} - your turn`
              : `${player.nickName}`}
          </PlayerStatus>
        ) : null}
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
const PlayerStatus = styled.h4`
  font-size: 16px;
  color: blue;
`;

export default Header;
