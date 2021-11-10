import { useState, useEffect, useContext } from "react";
import movies from '../movies.json';
import MovieContext from "../store/movieContext";
import EachMovie from "./EachMovie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import classes from '../styles/Movie.module.css';
import Carousel from "react-multi-carousel";


const MoviesSlider = ({ sliderMovies, text }) => {



    const [translate, setTranslate] = useState(0);

    /**ova dva translate-a iznad su za pomjeranje slider-a i setuju se po funkcijama u zavisnosti sta kliknemo */

    const [translatePopular, setTranslatePopular] = useState(0);

    // const [kolikoihstane, setKolikoIhStane] = useState(0);
    // const [sliceFrom, setSliceFrom] = useState(0);


    const { value, divWidth } = useContext(MovieContext);

    useEffect(() => {
        setTranslatePopular(Math.floor((divWidth * sliderMovies.length) / window.innerWidth));
        // setKolikoIhStane(Math.floor(window.innerWidth / divWidth))
    });/**ovo radi jer nemamo drugi argument , [] kad bi imali onda se samo prvi put pokrece tj. na inital render i zato je uvjek logovalo 0 jer je to initial(prvi) render i samo se tada pokrece ovako kad nema te zagrade onda se pokrece na svaki render (svaka promjena state pokrece re-render) i kad nema zagrada onda loguje 0 0 6 znaci dobijes pravu value jer loguje na svaki render */


    const moveRow = () => {
        // setKolikoIhStane(prev => prev + kolikoihstane)
        // setSliceFrom(prev => prev + sliceFrom);

        translate.toString() === `-${translatePopular}00` ? setTranslate(0) : setTranslate(prev => prev - 100);
    }
    const goBack = () => {
        translate >= 0 ? setTranslate(parseInt(`-${translatePopular}00`)) : setTranslate(prev => prev + 100)
    }


    // let sliced = sliderMovies.slice(sliceFrom, kolikoihstane);



    return (
        <div className={classes.all}>
            {!value && <div>
                {/* ako bude problema pogledaj ovaj div jer sam sve okruzio njim samo da mi je lakse da ne pisem
            svuda !value nego odje sve okruzim jednom napisem i tjt. */}
                <p>{text}</p>


                <FontAwesomeIcon className={classes.arrowRight} onClick={moveRow} icon={faArrowRight}></FontAwesomeIcon>
                <FontAwesomeIcon className={classes.arrowLeft} onClick={goBack} icon={faArrowLeft}></FontAwesomeIcon>

                {<div className={classes.popularNextPage} style={{ transform: `translateX(${translate}%)` }}>
                    {sliderMovies.map((popularMovie, index) => <EachMovie key={index} movie={popularMovie} />)}

                </div>}
            </div>}



        </div>

    )
}

export default MoviesSlider
