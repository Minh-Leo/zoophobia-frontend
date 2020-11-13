import React from 'react';
// import socket from '../socketConfig';

import styled from 'styled-components';

const Card = ({ card, size, onClick, iscardCzar, isChosenCards }) => {
  // const onClick = (e) => {
  //   e.preventDefault();
  //   // console.log(userInput);
  //   socket.emit('card-chosen-by-player', card);
  // };
  // console.log(card);

  return (
    <CardDiv style={{ width: `${size}px` }} onClick={() => onClick(card)}>
      <FrontImg>
        {card ? <img src={`/media/${card.frontImg}.png`} alt='' /> : null}
      </FrontImg>
      {iscardCzar && isChosenCards ? (
        <button
          type='button'
          className='btn btn-primary'
          onClick={(card) => console.log(card.frontImg)}
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
  margin: 0 -25px;
  position: relative;
  width: 100px;
  transition: 0.5s ease all;

  // End copy

  &:hover {
    transform: scale(1.5);
    margin-top: -50px;
    border: 1px solid blue;
    z-index: 10;
  }
`;
const FrontImg = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Card;
