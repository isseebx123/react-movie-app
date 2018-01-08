import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

// 메인 컴포넌트가 데이터를 모두 가지고 있는 것이 핵심!

class App extends Component {
  // 컴포넌트는 다음과 같은 함수들을 가지고 자동으로 순서대로 실행된다.
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() - > component

  state = {}

  componentDidMount(){
    this._getMovies();
  }

  // 언더바로 시작하는 것은 개발자가 따로 정의하는 함수. 리액트는 제공하는 기능이 많으므로.
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={index}/>
    })
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi() // await.. callApi끝나고 결과가 어떤것이든 movies에 넣고, 이게 완료되면 밑을 실행한다.
    this.setState({
      movies // 원래는 movies : movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating') // AJAX
    .then(response => response.json()) // fetch가 끝나면
    .then(json => json.data.movies) // .then(json => console.log(json))
    .catch(err => console.log(err))
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
