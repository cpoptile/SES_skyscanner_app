import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <Header title="Flight Search"></Header>
      <SearchBox></SearchBox>
      <SearchForm></SearchForm>
    </div>
  );
}

export default App;
