import React, { useState } from 'react';
import socket from '../socketConfig';
import useSound from 'use-sound';

const StartBtn = ({ player, gameID }) => {
  const [showBtn, setShowBtn] = useState(true);
  const { isPartyLeader } = player;

  const onClickHandler = (e) => {
    clickSound();
    socket.emit('timer', { playerID: player._id, gameID });
    setShowBtn(false);
  };
  const [hoverSound] = useSound('/media/sfx/btnLight.wav', { volume: 0.25 });
  const [clickSound] = useSound('/media/sfx/checkoutMachine.wav', {
    volume: 0.15,
  });

  return isPartyLeader && showBtn ? (
    <button
      type='button'
      className='btn btn-primary btn-lg shadow-1'
      onClick={onClickHandler}
      onMouseEnter={() => hoverSound()}
    >
      &gt; Start Game &lt;
    </button>
  ) : null;
};

export default StartBtn;
