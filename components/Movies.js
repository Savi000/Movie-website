import { useContext } from 'react';
import movies from '../movies.json';
import EachMovie from './EachMovie';
/*panther je velika slika zato sto je posebno ubacena i ovo je njena normalna velicina css nema veze ovdje* */
import classes from '../styles/Movie.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faStepBackward } from "@fortawesome/free-solid-svg-icons";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import MovieContext from '../store/movieContext';
import MoviesSlider from './MoviesSlider';



const Movies = () => {
    // const [data, setData] = useState(movies);
    //const [filtered, setFiltered] = useState([]);


    //let popularMovies = movies.slice(0, 6);




    /**radi value samo stavi ako je undefined posto nece vazfa biti input polje popunjeno ako nema nista
     * onda baca undefined pa zboog errora
     */




    // useEffect(() => {
    //     console.log(data)
    //     console.log(value)
    //     console.log(data.filter((dat) => { dat.title.includes(value) }))

    //     // setData(filtered)

    // }, [value]) lakse je ovaj dolje nacin + 5 + linija koda manje i ne mora useEffect da trosi da bude
    // sporiji sajt a ne bi mogli samo if (value) { setData(filter) } zato sto too many re - renders jer kad 
    // setamo komponenta se re - renderuje i sav kod pokrece ponovo i onda svaki pujt kad mi setujemo on ponovo
    // i ponovo ide i bude too many re - renders



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
