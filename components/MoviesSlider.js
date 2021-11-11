import { useState, useEffect, useContext } from "react";

import MovieContext from "../store/movieContext";
import EachMovie from "./EachMovie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import classes from '../styles/Movie.module.css';



const MoviesSlider = ({ sliderMovies, text }) => {



    const [translate, setTranslate] = useState(0);

    
    const [translatePopular, setTranslatePopular] = useState(0);

    // const [kolikoihstane, setKolikoIhStane] = useState(0);
    // const [sliceFrom, setSliceFrom] = useState(0);


    const { value, divWidth } = useContext(MovieContext);

    useEffect(() => {
        setTranslatePopular(Math.floor((divWidth * sliderMovies.length) / window.innerWidth));
  
    }, [divWidth, sliderMovies.length]);


    const moveRow = () => {
        translate.toString() === `-${translatePopular}00` ? setTranslate(0) : setTranslate(prev => prev - 100);
    }
    const goBack = () => {
        translate >= 0 ? setTranslate(parseInt(`-${translatePopular}00`)) : setTranslate(prev => prev + 100)
    }


    return (
        <div className={classes.all}>
            {!value && <div>
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
