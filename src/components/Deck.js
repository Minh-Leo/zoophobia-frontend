import React from 'react';
// import Card from './Card';

// import styled from 'styled-components';

const Deck = ({ scene, isPrompt }) => {
  let cards = [];
  let prompts = [];
  let responses = [];

  if (isPrompt) {
    cards = prompts;
  } else {
    cards = responses;
  }

  const draw = () => {
    return cards.pop();
  };

  const shuffle = () => {
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  };

  return (
    <div>
      <h1>hi</h1>
      hi
    </div>
  );
};

export default Deck;
