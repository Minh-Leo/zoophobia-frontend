import React from 'react';
import Table from './Table';
import { Cards } from '../testCard';

function LandingPage() {
  console.log(Cards);

  return (
    <div>
      <h1>Landing Page works</h1>
      <Table cardsArr={Cards}></Table>
    </div>
  );
}

export default LandingPage;
