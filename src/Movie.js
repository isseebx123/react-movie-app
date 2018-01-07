import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
  render(){ // 컴포넌트는 항상 렌더링을 해야함을 명시해라
    console.log(this.props); // props를 통해 부모가 자식에게 데이터를 전달
    return ( // JSX명령어는 {}괄호를 붙여야한다.
      <div>
        <MoviePoster poster={this.props.poster}/>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

class MoviePoster extends Component{
  render(){
    return(
      <img alt="moiveImg" src={this.props.poster} />
    )
  }
}

export default Movie;
