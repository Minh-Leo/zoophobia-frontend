import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  width: 300px;
  position: absolute;
  top: 20px;
  left: 40px;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;

  &:hover {
    background: white;
  }
`;
const FrontImg = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

function PromptCard({ card }) {
  return (
    <CardDiv className='bouncing'>
      <FrontImg>
        <img src={`/media/${card.frontImg}.png`} alt='' />
      </FrontImg>
    </CardDiv>
  );
}

export default PromptCard;
