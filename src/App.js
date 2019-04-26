import React from 'react';
import {Hero} from './components/atoms/Hero/Hero'
import {Main} from './components/atoms/Main/Main'
import {People} from './components/molecules/Section/People';
import {Films} from './components/molecules/Section/Films';
import {Planets} from './components/molecules/Section/Planets';
import {Species} from './components/molecules/Section/Species';
import {Starships} from './components/molecules/Section/Starships';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Main>
        <Films/>
        <People/>
        <Planets/>
        <Species/>
        <Starships/>
      </Main>
    </div>
  );
}

export default App;
