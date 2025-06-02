import { createContext, useContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) =>{
    const[favorites,setFavorites] = useState([])

    useEffect(()=>{
        const storedFav = localStorage.getItem('favorites')
        if(storedFav) setFavorites(JSON.parse(storedFav))

    },[])
    
    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])

    function addToFavorites(movie) {
        setFavorites(prev => [...prev,movie])
    }

    function removeFavorites(movieId) {
        setFavorites(prev => prev.filter(p => p.id !== movieId))
    }

    function isFavorite(movieId) {
        return favorites.some(isfav => isfav.id === movieId)
    }
    
    const value = {
        isFavorite,addToFavorites,removeFavorites,favorites
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}