import React from 'react';

import Meetings from './components/layout/Meetings';
import Login from './components/layout/Login';
import EventsState from './context/events/EventsState';

import './App.css';

function App() {

  return (
    <EventsState>
      <div className="App">
        <Login />
      </div>
      <Meetings />
    </EventsState>

  );
}

export default App;