import React, { useState } from 'react';
import socket from '../socketConfig';
import useSound from 'use-sound';

const JoinGame = (props) => {
  const [userInput, setUserInput] = useState({ gameID: '', nickName: '' });

  const onChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
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
    <div className='row'>
      <div className='col-sm'></div>
      <div className='col-sm-8'>
        <h1 className='text-center'>Join Game</h1>
        <form onSubmit={onSubmit}>
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
            className='btn btn-primary'
            type='submit'
            onMouseEnter={() => hoverSound()}
          >
            Submit
          </button>
        </form>
      </div>
      <div className='col-sm'></div>
    </div>
  );
};

export default JoinGame;
