import React, { useState } from 'react';
import socket from '../socketConfig';
import styled from 'styled-components';
import useSound from 'use-sound';

import { CornerTopLeft, CornerRight } from './Corner';
import Header from './Header';

const JoinGame = (props) => {
  const [userInput, setUserInput] = useState({ gameID: '', nickName: '' });

  const onChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value.toUpperCase(),
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    clickSound();
    // console.log(userInput);
    socket.emit('join-game', userInput);
  };

  const [hoverSound] = useSound('/media/sfx/btnLight.wav', { volume: 0.25 });
  const [clickSound] = useSound('/media/sfx/btnSound.mp3', { volume: 0.15 });

  return (
    <>
      <Header />
      <Page className=''>
        <div className='col-md-12 text-center'>
          <h1 className=''>Join Game</h1>
          <form onSubmit={onSubmit} style={{ width: '50%' }}>
            <div className='form-group'>
              <label htmlFor='gameID'>Enter Game ID</label>
              <input
                type='text'
                name='gameID'
                value={userInput.gameID}
                onChange={onChange}
                placeholder='Enter Game ID'
                className='form-control'
                required
              />
              {/*  */}
              <label htmlFor='nickName'>Enter Nick name</label>
              <input
                type='text'
                name='nickName'
                value={userInput.nickName}
                onChange={onChange}
                placeholder='Enter nick name'
                className='form-control'
                required
              />
            </div>
            <button
              className='btn btn-warning'
              type='submit'
              onMouseEnter={() => hoverSound()}
            >
              Submit
            </button>
          </form>
        </div>
        <CornerTopLeft />
        <CornerRight />
      </Page>
    </>
  );
};

const Page = styled.div`
  position: relative;

  & .text-center {
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export default JoinGame;
