import React from 'react';
import Header from './Header';

import GameMenu from './GameMenu';

function LandingPage() {
  return (
    <div className='jumbotron-fluid'>
      <Header />

      <div className=' text-center'>
        <h1>Landing Page works</h1>
        <GameMenu />
      </div>
    </div>
  );
}

export default LandingPage;
