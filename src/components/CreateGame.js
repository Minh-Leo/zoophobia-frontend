import React, { useState } from 'react';
import socket from '../socketConfig';
import useSound from 'use-sound';

import Header from './Header';

const CreateGame = (props) => {
  const [nickName, setNickName] = useState('');

  const onChange = (e) => {
    setNickName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    clickSound();
    console.log(nickName);
    socket.emit('create-game', nickName);
  };

  const [hoverSound] = useSound('/media/sfx/btnLight.wav', { volume: 0.25 });
  const [clickSound] = useSound('/media/sfx/btnSound.mp3', { volume: 0.15 });

  return (
    <>
      <Header />
      <div className='row'>
        <div className='col-sm'></div>
        <div className='col-sm-8'>
          <h1 className='text-center'>Create Game</h1>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='nickName'>Enter Nick name</label>
              <input
                type='text'
                name='nickName'
                value={nickName}
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
    </>
  );
};

export default CreateGame;
