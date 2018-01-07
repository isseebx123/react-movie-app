import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

// 메인 컴포넌트가 데이터를 모두 가지고 있는 것이 핵심!

const movies = [
  "Matrix",
  "Full Metal Jacker",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
  "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71qDKzqJZrL._SL1101_.jpg",
  "https://files.list.co.uk/images/2017/10/25/old-boy-image-LST266342.jpg",
  "https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2016/11/news-article-images-star-wars-goh-splash.jpg.adapt.crop191x100.1200w.jpg"
]

class App extends Component {
  render() { // 모든 컴포넌트는 render()를 가짐, 이 컴포넌트가 보여주는게 무엇인가를 의미.
    return ( // prop 임의의 이름으로 지정가능 한듯.
      <div className="App">
        <Movie title={movies[0]} poster={movieImages[0]}/>
        <Movie title={movies[1]} poster={movieImages[1]}/>
        <Movie title={movies[2]} poster={movieImages[2]}/>
        <Movie title={movies[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
