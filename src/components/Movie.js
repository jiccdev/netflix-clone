import React from 'react';

const Movie = ({ movie }) => {
  const {
    id,
    original_title,
    title,
    poster_path,
    base_url,
    backdrop_path,
    isLargeRow,
    name,
  } = movie;
  return (
    <img
      src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
      alt={movie.name}
    ></img>
  );
};

export default Movie;
