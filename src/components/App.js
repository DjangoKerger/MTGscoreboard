import React from 'react';
import Diceroll from './Diceroll';
import Banner from './Banner';
import Score from './Score';
import Tables from './Tables';
import Scoretracker from './Scoretracker';
import './App.css'; 

function App() {
  return (<div>
  <Banner />
  <Diceroll />
  <Score />
  <Tables />
  <Scoretracker />
  </div>)
    
}

export default App;
