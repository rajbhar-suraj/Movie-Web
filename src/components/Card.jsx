import '../css/Moviecard.css'
import { useMovieContext } from '../context/MovieContext';

function Card({ movie }) {
    const { addToFavorites, removeFavorites, isFavorite } = useMovieContext();
    const favorites = isFavorite(movie.id)

    function onClick(e) {
        e.preventDefault()

        if (favorites)
            removeFavorites(movie.id)
        else
            addToFavorites(movie)


    }
    return <div className="movie-card">
        
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="movie-overlay">
            <button className={`favorite-btn ${favorites ? "active" : ''}`} onClick={onClick}>{favorites ? "❤️" : "🤍"}</button>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split('-')[0]}</p>
        </div>

    </div>

}

export default Card