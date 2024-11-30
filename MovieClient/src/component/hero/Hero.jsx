import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, useNavigate} from "react-router-dom";
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const Hero = ({ movies }) => {

  const navigate = useNavigate();

  function reviews(movieId)
  {
      navigate(`/Reviews/${movieId}`);
  }

  return (
    <div className='movie-carousel-container'>
      <Carousel>
        {movies.map((movie, index) => {
          return (
            <Paper key={movie.id || index}> {/* Use movie.id if available, or fall back to index */}
              <div className='movie-card-container'>
                <div className='movie-card' style = {{"--img":`url(${movie.backdrops[index]})`}}>
                  <div className='movie-detail'>
                    <div className='movie-poster'>
                      <img src={movie.poster} alt='' />
                    </div>
                    <div className='movie-title'>
                      <h4>{movie.title}</h4>
                    </div>  
                    <div className="movie-buttons-container">
                      <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                        <div className="play-button-icon-container">
                            <FontAwesomeIcon className="play-button-icon"icon = {faCirclePlay}/>      
                        </div>
                      </Link>
                    </div>
                    <div className="movie-review-button-container">
                        <Button variant ="info" onClick={() => reviews(movie.imdbId)} >Reviews</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
