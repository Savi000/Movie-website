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


    // let similar = movies.filter(movie => movie.genres[0] === oneMovie.genres[0])
    /**zato sto prvo imas prazan load useState znaci dok je [] znaci ne load-uje se kod samo do ovoga
     * setOneMovie nego se prvo sav loaduje sa praznim tj pocetnim stanjem pa posle sa norm.
     */



    let allButOneMovie = movies.filter((movie) => movie.id !== oneMovie.id)

    // const myLoader = ({ src, width }) => {
    //     console.log(width);
    //     return src;/**GUGLAJ OVO JOS MALO PROVJERI JER OVAJ WIDTH PROPERTY ODJE RADI TJ CONSOLE.LOG-UJU SE BROJEVI KOJI POKAZUJU SIRINU PA SE SAD VJ TO STAVLJA U LINK ONAJ PUN PATH HTTP I DEFINISES MU JOS WIDTH I OND NE BI MORAO VLJD UNOPTIMIZED MOJA TEORIJA */
    // }

    return (
        <div className={classes.movieDetailPage}>
            <OneMovieDetail movie={oneMovie} />
            <h3>Similar Movieshhh</h3>

            <div className={classes.positionDiv}>

                {/* necu stavljati caroussel zasad jer moram onaj glavni da napravim kao reusable komponentu i da poboljsam logiku pa cu ga odje iskoristiti */}
                {oneMovie.genres && oneMovie && allButOneMovie.filter(movie => movie.genres[0] === oneMovie.genres[0]).map(similarMovie => {
                    return (
                        <div key={similarMovie.id} className={classes.similarMovies}>
                            {/* <div key={similarMovie.id}>
                                <button className={classes.imgBtn} ><Link href={`/movies/${similarMovie.title}`}>
                                    <a>
                                        <Image unoptimized loader={myLoader} src={similarMovie.posterurl} width={300} height={300} className={classes.imgs} alt={similarMovie.title} />
                                    </a>
                                </Link>
                                </button>
                                <p>{similarMovie.title}</p>
                            </div> */}
                            <EachMovie key={similarMovie.id} movie={similarMovie} />

                        </div>
                    )
                })
                }
            </div>
            {/* zato sto pokazuje router.pathname u Each movie a pokazuje ga dje god se rendeuje each movie */}

            {/* <img src={posterurl} alt="movie picture" />
            <h1>{title}</h1>
            <h3>About movie</h3>
            <p>{storyline}</p>
            <p>{year}</p>
            <h3>Actors:</h3>
            {/* {actors.map(actor => <p key={Math.random() * 1000}>{actor}</p>)} */}
            {/* ima istih id-jeva pa zato math.ranodm */}
            {/* <h3>Rating:</h3>
            <p>{imdbRating}</p> } */}
            {/*  /**samo se content mijenja */}
        </div>
    )
}

export default MovieDetails
