import {useEffect, useState} from 'react';

 

import MovieCard from './movieCard';
const movieListing = () => {
    const [moviesList, setmoviesList] = useState('');
    useEffect(() => {
        fetch('http://localhost:3018/movieList').then((response) => {
            return response.json();      
        }).then((res) => {
            setmoviesList(res);
        }).catch(e => {
            console.log(e);
        })
    },[]);
    return <>
    
    <h2>Movie List</h2>
    {moviesList.map((movie) => {
        <MovieCard {...movie}></MovieCard>
    })}</>;
}

export default movieListing;