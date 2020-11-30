import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// import socket from '../socketConfig';

import styled from 'styled-components';

const Header = ({ player }) => {
  useEffect(() => {}, []);

  return (
    <div className='row mx-0'>
      <div className='col-8'>
        <Logo className='logo' src={`/media/logo.png`} alt='' />
      </div>

      <NavBar className='col-4 navbar navbar-expand-lg'>
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
`;
const PlayerStatus = styled.h4`
  font-size: 20px;
  margin: 0 2em 0 0;
  padding: 8px;
  color: var(--primary);
`;
const NavBar = styled.nav`
  padding-right: 0;
  height: 60px;
  top: 16px;
  background: #292929bb;
  border-radius: 15px 0 0 15px;

  & .navbar-nav {
    display: flex;
    justify-content: space-between;
    margin: auto;
  }

  & a.nav-link {
    font-family: 'Animals';
    color: #66e4f4;
    margin-right: 10px;
    transition: ease 0.3s all;

    &:hover {
      color: #f9f5f0;
      transform: scale(1.1) translateY(-2px);
    }
  }
`;

export default Header;
