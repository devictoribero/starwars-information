import React from 'react';
import {Hero} from './components/atoms/Hero/Hero'
import {Main} from './components/atoms/Main/Main'
import {PeopleSection} from './components/molecules/Section/PeopleSection';
import {FilmsSection} from './components/molecules/Section/FilmsSection';
import {PlanetsSection} from './components/molecules/Section/PlanetsSection';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Main>
        <FilmsSection/>
        <PeopleSection/>
        <PlanetsSection/>
      </Main>
    </div>
  );
}

export default App;
