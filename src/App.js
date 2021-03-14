import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className="App">
      <Header title="Flight Search"></Header>
      <SearchBox></SearchBox>
    </div>
  );
}

export default App;
