'use client';

import { useEffect, useState } from 'react';
import './Index.scss';
import axios from 'axios';
import MovieCard from '../movieCard/Index';
import { Movie } from '@/types/movie';
import ReactLoading from 'react-loading';

interface Props {
    search: string
}
export default function MovieList(props: Props) {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        await axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '4828573c4ac2f7b5f600c0e321b393c1',
                language: 'pt-BR'
            }
        }).then(response => {
            console.log(response.data.results);
            setMovies(response.data.results);
        });

        setIsLoading(false);
    }

    if (isLoading) {
        return (
            <div className="loading-container">
                <ReactLoading type={'spin'} color={'#6046ff'} height={'5%'} width={'5%'} />
            </div>
        );
    }

    const moviesFiltered = movies.filter((movie) => (movie.title.toLowerCase()).includes(props.search.toLowerCase()));

    return (
        <ul className="movie-list">
            {moviesFiltered.map(movie =>
                <MovieCard key={movie.id} movie={movie} />
            )}
        </ul>
    );
}