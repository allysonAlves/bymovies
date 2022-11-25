import { Link } from "react-router-dom"

import {FaStar} from "react-icons/fa"

import defaultimage from "../assets/defaultimage.png"

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({movie, showLink = true}) => {

  const imagesrc = imageUrl + movie.poster_path;
  const imgchanged = movie.poster_path? imagesrc: defaultimage;
  return (
    <div className="movie-card">
        { <img src={imgchanged} alt={movie.title}/>}
        <h2>{movie.title}</h2>
        <p>
            <FaStar/> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;