import { useContext, useEffect, useState } from "react";
import MovieContext from "../store/movieContext";
import Image from 'next/image';
import classes from '../styles/Movie.module.css';
import Nav from '../components/Nav'
import { urlObjectKeys } from "next/dist/shared/lib/utils";

const OneMovieDetail = ({ movie }) => {

    const { posterurl, title, storyline, imdbRating } = movie;

    const [removeGradient, setRemoveGradient] = useState(false);

    const { addToWatchList, isAddedToList } = useContext(MovieContext);

    // isAddedToList je za button disabled ali to ne moze posto je jedan button isti za sve ove i onda
    //kad kliknes na jedan svi su disabld

    const myLoader = ({ src }) => {
        return posterurl;
    }
    useEffect(() => {
        if (window.matchMedia("(max-width: 653px)").matches) {
            setRemoveGradient(true);
        }
    }) /**POGLEDAJ MADA nije obavezno ono samo vidi ako moze na  change */

    return (
        <>
            <Nav />
            {/* <div className={classes.blackLayer}> */}
            <div className={classes.detail} style={{
                backgroundImage: !removeGradient ? `linear-gradient(
                    90deg,
                    rgba(35, 36, 38, 1) 21%,
                    rgba(28, 22, 23, 0) 69%
                  ),url(${movie.posterurl})` : `url(${movie.posterurl})`,

            }}>

                {/* prvo se posterurl ide kao undefined zato moram uslovnom da renderujemo image */}
                {/* {posterurl && <Image loader={myLoader} src={posterurl} layout='responsive' width={1000} height={850} />} */}
                {/* width i height dodju samo ovdje kao odnos visine i sirine totalno je nebitno koji je broj jer je layout responsive i namjesten da odgovara kontenjeru */}
            </div>
            {/* </div> */}
            <div className={classes.aboutMovie}>
                <h1>{title}</h1>
                <p>{storyline}</p>
                <p>{imdbRating}</p>
                <button onClick={() => addToWatchList(movie)}>add to watch list</button>

            </div>
            {/* <div className={classes.detailResponsive}>
                <Image loader={myLoader} src={movie.posterurl} width={1000} height={1000} />
                <h1>{title}</h1>
                <p>{storyline}</p>
                <p>{imdbRating}</p>

            </div> */}
        </>


    )
}

export default OneMovieDetail
