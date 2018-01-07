import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

// 메인 컴포넌트가 데이터를 모두 가지고 있는 것이 핵심!

const movies = [
  {
    title: "Matrix",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg"
  },
  {
    title: "Full Metal Jacker",
    poster: "https://images-na.ssl-images-amazon.com/images/I/71qDKzqJZrL._SL1101_.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://files.list.co.uk/images/2017/10/25/old-boy-image-LST266342.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2016/11/news-article-images-star-wars-goh-splash.jpg.adapt.crop191x100.1200w.jpg"
  }
]

class App extends Component {
  render() { // 모든 컴포넌트는 render()를 가짐, 이 컴포넌트가 보여주는게 무엇인가를 의미.
    return ( // prop 임의의 이름으로 지정가능 한듯.
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}

export default App;
