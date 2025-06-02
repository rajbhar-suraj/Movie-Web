import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getPopularMovies, searchMovies } from '../services/api';
import '../css/Home.css'

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const loadPopularMoives = async () => {
            try {
                const loadMovies = await getPopularMovies();
                setMovies(loadMovies);
            } catch (error) {
                console.log(error);
                setError('unable to load...')
            } finally {
                setLoading(false)
            }
        }
        loadPopularMoives()
    }, [])

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return
        setLoading(true)
        try {
            const search = await searchMovies(searchQuery)
            setMovies(search)
            setError(null)
        } catch (error) {
            console.log(error);
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }

    }

    return (<div className="home">
        <form onSubmit={onFormSubmit} className="search-form">
            <input type="text" placeholder="Search your movies here..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type='submit' className="search-buttpn">Search</button>
        </form>

        {
            error && <div className="error-message">{error}</div>
        }

        {loading ? <div className="loading">Loading...</div> : <div className="movies-grid">
            {
                movies.map((movie) =>
                (<Card movie={movie} key={movie.id} />
                ))
            }
        </div>}


    </div>);
}

export default Home;