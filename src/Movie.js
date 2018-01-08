import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

/*
class Movie extends Component{

  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }

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
*/

function Movie({title, poster}){
  return (
    <div>
      <MoviePoster poster={poster}/>
      <h1>{title}</h1>
    </div>
  )
}


Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}
/*
class MoviePoster extends Component{
  render(){
    return(
      <img alt="moiveImg" src={this.props.poster} />
    )
  }
}
*/

// functional component는 state가 없어서 ...등등의 함수를 실행하지 않는다.
// 어떤 컴포넌트들은 단순히 반환하기 위해 존재하는 경우도 있으므로
function MoviePoster({poster}){
  return (
    <img src={poster} alt="Movie Poster" />
  )
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired

}

export default Movie;
