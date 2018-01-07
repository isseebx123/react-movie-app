import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
  render() { // 모든 컴포넌트는 render()를 가짐, 이 컴포넌트가 보여주는게 무엇인가를 의미.
    return (
      <div className="App">
        <Movie />
        <Movie />
        <Movie />
        <Movie /> 
      </div>
    );
  }
}

export default App;
