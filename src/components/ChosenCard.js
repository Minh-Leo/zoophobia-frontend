import React from 'react';
// import socket from '../socketConfig';

import styled from 'styled-components';

const ChosenCard = ({ nickName, card, size, onClick, iscardCzar }) => {
  // const onClick = (e) => {
  //   e.preventDefault();
  //   // console.log(userInput);
  //   socket.emit('card-chosen-by-player', card);
  // };
  // console.log(card);

  return (
    <CardDiv className='text-center' style={{ width: `${size}px` }}>
      <h4>{nickName}</h4>
      <FrontImg>
        {card ? <img src={`/media/${card.frontImg}.png`} alt='' /> : null}
      </FrontImg>
      {iscardCzar ? (
        <button
          type='button'
          className='btn btn-primary'
          onClick={() => onClick(card)}
        >
          Choose
        </button>
      ) : null}
    </CardDiv>
  );
};

const CardDiv = styled.div`
  // background: url('/media/resp1.png');
  // background-size: contain;
  // background-repeat: no-repeat;
  // background-position: center;
  // width: 150px;
  // margin: 0.5em;

  // copy part
  margin: 10px;
  position: relative;
  transition: 0.5s ease all;

  // End copy

  &:hover {
    z-index: 10;
  }
`;
const FrontImg = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default ChosenCard;
