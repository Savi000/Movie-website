import React, { useState, useEffect, useContext } from "react";
import Link from "next/dist/client/link";
import classes from "../styles/ImageText.module.css";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import movies from "../movies.json";
import Slider from "./Slider";
import MovieContext from "../store/movieContext";
import EachMovie from "../components/EachMovie";

const ImageText = () => {
  const [current, setCurrent] = useState(0);
  const [stopEffect, setStopEffect] = useState(false);
  const [textLength, setTextLength] = useState(false);
  // const [length, setLength] = useState(0);
  let mainPageMovies = movies.slice(1, 6);
  const length = mainPageMovies.length;
  // bilo samo const length = mainPageMovies.length i radlo
  const { addToWatchList } = useContext(MovieContext);

  /*odje kad stavis 2sec to se samo jednom desava zato nam treba setInterval* */

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  //   console.log(mainPageMovies);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };


  // if (!stopEffect) {
  //   if (current <= length - 1) {
  //     useEffect(() => {
  //       setInterval(() => {
  //         setCurrent(prev => prev + 1)
  //       }, 4000)
  //     }, [])

  //   } else {
  //     setCurrent(0)
  //   }
  // } use Effect ne moze biti pozvan conditionally(if/else)

  // useEffect(() => {
  //   if (!stopEffect) {
  //     if (current <= length - 1) {
  //       setCurrent(prev => prev + 1)
  //     }
  //     else {
  //       setCurrent(0)
  //     }
  //   }

  // }, 2000)

  /**VEZANO ZA LOADING SPINNER TJ KAD SE PAGE LOADUJE MOZDA WINDOW.ADDEVENTLISTER('LOAD',SPINNER) */

  // setInterval(() => {
  //   if (current <= length - 1)
  //     setCurrent(prev => prev + 1)
  //   else {
  //     setCurrent(0)
  //   }
  // }, 2000)   MORA U USEEFFECT ZBOG RE-RENDERA KOJI JE UZROKOVAN USE STATE-OM(moja/tacna teorija...) i onda uzrokuje previse poziva jer ovo se re-renderuje kad se current promjeni zato sto  je current definsan useState-om e ovo je jedan od sideEffects zato nam treba useState koji stavim i da se ovo desava samo jednom kad renderujemo page ili vise puta nebitno ali mora biti u useEffect inace ce uzrokovati bugove,infinite loops,...  111 lekcija udemy react kurs

  // useEffect(() => {
  //   if (current <= length - 1) {
  //     setInterval(() => {
  //       setCurrent(prev => prev + 1)
  //     }, 4000)
  //   } else {
  //     setCurrent(0)
  //   }
  // }, [current])/** ovo ne radi zato sto na svaku promjenu currenta se pokrece if else  evo prvo pokrenes i on gleda if else i u zavisnosti sta je mora promjeniti current i cim se to promjeni on odma ponovo zove if else nece cekati 4sec zato sto se current promjenio*/

  /**e sad pitanje je zasto ne moze unutar nego moram if izvan ovoga da pisem znaci if ne moze ni unutar
  useEffect ni unutar setInterval samo izvan kao sad 
  zato sto se useEffect samo jednom pokrene i procita if else a setInterval svako dvije sekunde,
  a ne cita if else vec samo setInterval jer ovako kako sam postavio useEffect samo se jednom pozove zbog[]
  i samim tim kad je if/else unutar onda procita to prvi put a tad je current < length i onda samo poziva setInreval i vise ne gleda if else jer se to samo jednom pozove
  */

  // setInterval(() => {
  //   setCurrent(prev => prev + 1)
  // }, 2000)

  useEffect(() => {
    if (!stopEffect) {
      if (current <= length - 1) {
        const timeout = setTimeout(() => {
          setCurrent((prev) => prev + 1);
        }, 3000);
        return () => {
          clearInterval(timeout);
        };
      }  /*ne moze use effect conditionally mora da ima jednu default radnnju zato micem ovo else ovdje
        bilo else{setCurrent(0)}*/
      else {
        setCurrent(0);
      }
    }
  }, [current]);

  useEffect(() => {
    if (window.matchMedia("(max-width: 1039px)").matches) {
      setTextLength(true);
    }
  }, [textLength]);

  if (!Array.isArray(mainPageMovies) || mainPageMovies.length <= 0) {
    console.log(mainPageMovies);
    return null;
  }

  return (
    <main className={classes.main}>
      <div className={classes.all}>
        <div className={classes.mainMovie}>
          <div className={classes.mainMovieName}>
            <h1>{movies[0].title}: Wakanda Forever</h1>
            <p>Wednesday November 11th, 2022</p>

            <button>
              <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon> Watch trailer
            </button>
            <button
              className={classes.watchListBtn}
              onClick={() => addToWatchList(movies[0])}
            >
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add to watch
              list
            </button>
          </div>

          <div className={classes.aboutMovie}>
            <div className={classes.category}>
              <h4>CATEGORY</h4>
              <p>{movies[0].genres[0]}</p>
              <h4>DIRECTOR/WRITER</h4>
              <p> Director: Some random guy</p>
              <p>Writers: Some random guys</p>
            </div>
            <div className={classes.storyLine}>
              <h4>STORYLINE</h4>
              <p>
                {!textLength
                  ? movies[0].storyline.substring(0, 70).trim()
                  : movies[0].storyline.substring(0, 35)}
                . . .
              </p>
              <Link href={`/movies/${movies[0].title}`}>
                <button className={classes.readMoreBtn}>
                  Read more&nbsp;
                  <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
                </button>
              </Link>

              <h4 className={classes.starsHeading}>STARS</h4>

              {movies[0].actors.map((actor, index) => (
                <a key={index}
                  target="_blank"
                  rel='noreferrer'
                  href={`https://www.google.com/search?q=${actor}`}
                  style={{ display: "inline-block", marginRight: "20px" }}
                >
                  {actor}
                </a>
              ))}
            </div>
          </div>
          {/* ovo radi zato sto sad main movies ima samo 2 glavna div-a jer ovaj pripada mainMovie i zato flexujemo samo ova 2 a ovaj about movie sluzi samo za onaj uvijeni background */}
        </div>

        <div className={classes.otherMovies}>
          <h4>MOVIE NAME</h4>
          <p>A little bit about it really nice movie aww</p>
          <h4>MOVIE NAME</h4>
          <p>
            A little bit about it really nice movie aww xdxd may i have your
            attention pleaaseesssees will thereal slimshat
          </p>

          <section /*slider*/>
            {/* <FaArrowAltCircleLeft className={classes.leftArrow} onClick={prevSlide} />

            <FaArrowAltCircleRight
              className={classes.rightArrow}
              onClick={nextSlide}
            /> */}
            <div className={classes.containerDots}>
              {/* div preko zbog flex-a da budu jedan pored drugih(elementi jer u slider kad stavim ne mogu) */}
              {Array.from({ length: mainPageMovies.length }).map(
                (item, index) => {
                  /*ovdje useEffect ne moze posto je ovdje map sto znaci da bi se za svaki item pokrenuo mzd kad bi stavili na promjenu odredjenog ali otom potom*/
                  const clickedIndex = () => {
                    setCurrent(index);
                    setStopEffect(true);
                  };

                  return (
                    <div
                      key={index}
                      onClick={clickedIndex}
                      className={
                        current === index ? classes.dotActive : classes.dot
                      }
                    ></div>
                  );
                }
              )}
            </div>

            {mainPageMovies.map((movie, index) => (
              <Slider
                key={index}
                movie={movie}
                index={index}
                current={current}
              />
            ))}
          </section>
        </div>
      </div>
      <div className={classes.responsiveSlider}>
        <h2>Movies you might be interested in:</h2>
        {mainPageMovies.map((movie) => (
          <EachMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default ImageText;
