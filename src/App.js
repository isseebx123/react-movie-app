import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

// 메인 컴포넌트가 데이터를 모두 가지고 있는 것이 핵심!

class App extends Component {
  // 컴포넌트는 다음과 같은 함수들을 가지고 자동으로 순서대로 실행된다.
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() - > component

  state = {

  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ // setState를 하지않고 상태를 변경하면 렌더가 실행되지 않는다.
        movies: [
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
        /*
        movies: [
          ...this.state.movies, // 이전 영화 리스트를 그대로 두고, 한 개 영화를 추가해라 라는 뜻, 이걸 없애면 전체가 하나로 대체됨.
          {
            title: "Trainspotting",
            poster: "https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2016/11/news-article-images-star-wars-goh-splash.jpg.adapt.crop191x100.1200w.jpg"
          }
          // ,...this.state.movies, // 이렇게 하면 새로운 것이 위에 추가됨.
        ]
        */
      })
    }, 2000)
  }

  // 언더바로 시작하는 것은 개발자가 따로 정의하는 함수. 리액트는 제공하는 기능이 많으므로.
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies;
  }

  // 컴포넌트의 상태가 변할때마다 render가 실행된다.
  render() { // 모든 컴포넌트는 render()를 가짐, 이 컴포넌트가 보여주는게 무엇인가를 의미.
    console.log('did render')
    return ( // prop 임의의 이름으로 지정가능 한듯.
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
