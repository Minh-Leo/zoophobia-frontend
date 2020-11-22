import React from 'react';
import { useHistory } from 'react-router-dom';
import useSound from 'use-sound';

const GameMenu = (props) => {
  let history = useHistory();
  const [hoverSound] = useSound('/media/sfx/btnLight.wav', { volume: 0.25 });
  const [clickSound] = useSound('/media/sfx/btnSound.mp3', { volume: 0.15 });

  return (
    <div>
      <h1>Welcome to game</h1>
      <button
        type='button'
        onClick={() => {
          clickSound();
          history.push('/how-to-play');
        }}
        onMouseEnter={() => hoverSound()}
        className='btn btn-primary btn-lg mr-3'
      >
        How to play
      </button>
      <button
        type='button'
        onClick={() => {
          clickSound();
          history.push('/game/create');
        }}
        onMouseEnter={() => hoverSound()}
        className='btn btn-primary btn-lg mr-3'
      >
        Create Game
      </button>
      <button
        type='button'
        onClick={() => {
          clickSound();
          history.push('/game/join');
        }}
        onMouseEnter={() => hoverSound()}
        className='btn btn-primary btn-lg'
      >
        Join Game
      </button>
    </div>
  );
};

export default GameMenu;
