import React, { Component } from 'react';
import './App.css';
import TitleCard from './TitleCard/TitleCard';
import DateForm from './DateForm/DateForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleCard title="Check your Holy Calendar!" />
        <DateForm />
      </div>
    );
  }
}

export default App;
