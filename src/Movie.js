import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

import LinesEllipsis from 'react-lines-ellipsis'

function Movie({title, poster, genres, synopsis}){
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <LinesEllipsis
          text={synopsis}
          maxLine='3'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
      </div>
    </div>
  )
}

function MovieGenre({genre}){
  return (
    <span className="Movie__Genre">{genre}</span>
  )
}

// functional component는 state가 없어서 ...등등의 함수를 실행하지 않는다.
// 어떤 컴포넌트들은 단순히 반환하기 위해 존재하는 경우도 있으므로
function MoviePoster({poster, alt}){
  return (
    <img src={poster} alt={alt} title={alt} class="Movie__Poster"/>
  )
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Movie;
