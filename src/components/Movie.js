import React from 'react';

// const Movie = (props) => {
//     return (
//         <div className="movie">
//           <div className="movie-title">{props.movie.title}</div>
//           <div className="movie-year">{props.movie.year}</div>
//         </div>
//     );
// }
const Movie = ({ movie, removeMovie }) => { //porops를 원하는 인자만 받을 수 있음
    return (
      <div className="movie">
        <div className="movie-title">
          {movie.title}
          <span className="movie-year">
              ({movie.year})
          </span>
        </div>
        <button onClick={() => removeMovie(movie.id)}>삭제</button>
      </div>
    );
}

export default Movie;