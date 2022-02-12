import { useState, useEffect } from 'react';

import axios from '../axios';
import requests from '../Request';

// React icons
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  // Truncate movie description
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <p className="banner__description">
          {truncate(`${movie?.overview}`, 280)}
        </p>
        <div className="banner__buttons">
          <button className="banner__button reproduce">
            <FaPlay className="icon" />
            Reproducir
          </button>
          <button className="banner__button more-info">
            <AiOutlineInfoCircle className="icon" />
            Mas Informacion
          </button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
