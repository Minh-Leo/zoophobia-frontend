import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// import socket from '../socketConfig';

import styled from 'styled-components';

const Header = ({ player }) => {
  useEffect(() => {}, []);

  return (
    <div className='row mx-0'>
      <div className='col-9'>
        <Logo className='logo' src={`/media/logo.png`} alt='' />
      </div>

      <NavBar className='col-3 navbar navbar-expand-lg navbar-light bg-light'>
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
      </NavBar>
    </div>
  );
};

const Logo = styled.img`
  position: relative;
  left: 50%;
  mix-blend-mode: overlay;
`;
const PlayerStatus = styled.h4`
  font-size: 20px;
  color: var(--primary);
`;
const NavBar = styled.nav`
  padding-right: 0;
  height: 60px;
  top: 16px;
`;

export default Header;
