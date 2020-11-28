import React from 'react';
// import socket from '../socketConfig';

import styled from 'styled-components';

const GroceryItem = ({ item, position }) => {
  //   const [hoverSound] = useSound('/media/sfx/btnLight.wav', { volume: 0.1 });
  const Item = styled.div`
    width: 80px;
    height: 80px;
    background: no-repeat center/contain url('/media/SVG/${item}.svg');
    position: absolute;
    bottom: 15px;
    left: ${10 * position}px;
  `;

  return <Item></Item>;
};

export default GroceryItem;
