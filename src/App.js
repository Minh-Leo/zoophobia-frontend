import React, { useEffect, useState } from 'react';
// import Landing from './Landing';
// import Game from './Game';
// import CreateADeck from './CreateADeck';
// import EditADeck from './EditADeck';
// import Admin from './Admin';
// import PlayerInfo from './PlayerInfo';
// import EmptyPage from './EmptyPage';
// import PublicGames from './PublicGames';
// import HowToPlay from './HowToPlay';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import socket from './socketConfig';

import CreateGame from './components/CreateGame';
import JoinGame from './components/JoinGame';

import LandingPage from './components/LandingPage';
import HowToPlayPage from './components/HowToPlayPage';
import Zoophobia from './components/Zoophobia';
import ChatComponent from './components/ChatComponent';

// import ReactGA from 'react-ga';

const App = () => {
  // componentDidMount() {
  //   // initialize analytics
  //   if (process.env.NODE_ENV === 'production') {
  //     this.initializeReactGA();
  //   }
  // }
  // initializeReactGA = () => {
  //   ReactGA.initialize('UA-171045081-1');
  //   ReactGA.pageview('/');
  // };

  const [gameState, setGameState] = useState({
    _id: '',
    isOpen: false,
    players: [],
  });

  useEffect(() => {
    socket.on('update-game', (game) => {
      console.log(game);
      setGameState(game);
    });

    return () => {
      socket.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    if (gameState._id !== '') history.push(`/game/${gameState._id}`);
  }, [gameState._id]);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/how-to-play' component={HowToPlayPage} />
        <Route exact path='/chat'>
          <ChatComponent />
        </Route>
        <Route path='/game/create' component={CreateGame} />
        <Route path='/game/join' component={JoinGame} />
        <Route
          path='/game/:gameID'
          render={(props) => <Zoophobia {...props} gameState={gameState} />}
        />

        {/* <Route path='/g/:roomId'>
            <Game reactGA={ReactGA} />
          </Route>
         
         
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/player-info'>
            <PlayerInfo />
          </Route>
          <Route exact path='/create-game'>
            <CreateGame reactGA={ReactGA} />
          </Route>
          <Route exact path='/games'>
            <PublicGames />
          </Route>
          <Route exact path='/how-to-play'>
            <HowToPlay isPage />
          </Route>
          */}
      </Switch>
    </Router>
  );
};

export default App;
