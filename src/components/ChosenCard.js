import React from 'react';
// import useSound from 'use-sound';

import styled from 'styled-components';

const ChosenCard = ({ nickName, card, size, onClick, iscardCzar }) => {
  return (
    <CardDiv className='text-center' style={{ width: `${size}px` }}>
      <h4>{nickName}</h4>
      <FrontImg>
        {card ? <img src={`/media/${card.frontImg}.jpg`} alt='' /> : null}
      </FrontImg>
      {iscardCzar ? (
        <button
          type='button'
          className='btn btn-sm btn-primary shadow-1'
          onClick={() => onClick(card)}
        >
          Choose
        </button>
      ) : null}
    </CardDiv>
  );
};

const CardDiv = styled.div`
  margin: 10px;
  position: relative;
  transition: 0.3s ease all;

  animation: fadeIn cubic-bezier(0.28, 0.84, 0.42, 1) 0.5s;
  // -webkit-animation: fadeIn ease 0.5s;
  // -moz-animation: fadeIn ease 0.5s;
  // -o-animation: fadeIn ease 0.5s;
  // -ms-animation: fadeIn ease 0.5s;

  &:hover {
    transform: scale(1.1);
    z-index: 10;
  }
`;
const FrontImg = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default ChosenCard;
