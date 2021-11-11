import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react'
import OneMovieDetail from '../../components/OneMovieDetail';
import movies from '../../movies.json'; /**kad bi fetchovali samo bi ga stavili u context i uzimali 
iz sa useContext */
// import MovieContext from '../../store/movieContext';
import EachMovie from '../../components/EachMovie';
// import Link from 'next/dist/client/link';
import classes from '../../styles/Movie.module.css';
// import Image from 'next/image';

const MovieDetails = () => {

    const [oneMovie, setOneMovie] = useState([]);

    // const { addToWatchList, isAddedToList } = useContext(MovieContext)

    /**actors array */
    const router = useRouter();
    useEffect(() => {
        if (router.query.id) {

            let filtered = movies.filter(movie => movie.title === router.query.id)
            setOneMovie(filtered[0])
        }
    }, [router.query])



    let allButOneMovie = movies.filter((movie) => movie.id !== oneMovie.id)



    return (
        <div className={classes.movieDetailPage}>
            <OneMovieDetail movie={oneMovie} />
            <h3>Similar Movieshhh</h3>

            <div className={classes.positionDiv}>

                
                {oneMovie.genres && oneMovie && allButOneMovie.filter(movie => movie.genres[0] === oneMovie.genres[0]).map(similarMovie => {
                    return (
                        <div key={similarMovie.id} className={classes.similarMovies}>
                          
                            <EachMovie key={similarMovie.id} movie={similarMovie} />

                        </div>
                    )
                })
                }
            </div>
         
        </div>
    )
}

export default MovieDetails
