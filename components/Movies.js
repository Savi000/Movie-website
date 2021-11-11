import { useContext } from 'react';
import movies from '../movies.json';
import EachMovie from './EachMovie';
import classes from '../styles/Movie.module.css';
import MovieContext from '../store/movieContext';
import MoviesSlider from './MoviesSlider';



const Movies = () => {
    

    const { value } = useContext(MovieContext)


    let filtered = movies.filter(movie => movie.title.toUpperCase().includes(value ? value.toUpperCase() : value))


    let popularMovies = movies.filter(popularMovies => popularMovies.imdbRating >= 7)


    return (
        <div className={classes.alls}>
            {/* position arrow is for arrows to not go one over another because we need to set top all other values so they would be  */}
            <MoviesSlider sliderMovies={popularMovies} text='popular movies' />
            <MoviesSlider sliderMovies={movies} text='all movies' />
            <div className={classes.blocking}>
                {value && filtered.map((movie, index) => <EachMovie key={index} movie={movie} />)}
                {filtered.length <= 0 && value && <p>Sorry, we currently don&apos;t have movie you are looking for</p>}
            </div>
        </div >
    )

}

export default Movies
