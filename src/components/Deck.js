import React from 'react';
// import Card from './Card';

// import styled from 'styled-components';

export default class Deck extends React.Component {
  constructor(scene, isPrompt) {
    let cards = [];
    if (isPrompt) {
      cards = prompts;
    } else {
      cards = answers;
    }
    this.draw = () => {
      return cards.pop();
    };

    this.shuffle = () => {
      for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
    };
  }

  return() {
    <div>hi</div>;
  }
}
