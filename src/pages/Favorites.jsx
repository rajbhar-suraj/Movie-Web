import '../css/Favorites.css'
import Card from '../components/Card';
import { useMovieContext } from "../context/MovieContext";

function Favorites() {
    const {favorites} = useMovieContext()
    if (favorites) {
        return <div>
            <h2>your favorites!!</h2>
            <div className="movies-grid">
        {
            favorites.map((movie) =>
            (<Card movie={movie} key={movie.id} />
            ))
        }
    </div>
        </div>
}
    return ( <div className="favorites">
        <h1>No Favorites yet</h1>
        <p>Add some and they will appear here!</p>
    </div> );
}

export default Favorites;