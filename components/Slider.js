// import { useContext, useState } from "react";
import classes from "../styles/Slider.module.css";
import Link from "next/link";
// import MovieContext from "../store/movieContext";
import Image from "next/image";

const Slider = ({ movie, index, current }) => {
  //const img = useRef();

  // const [hover, setHover] = useState(false);

  // const { addToWatchList } = useContext(MovieContext)



  // const myLoader = ({ src }) => {
  //   return `images-na.ssl-images-amazon.com`
  // }

  // <Image loader={myLoader} src={movie.posterurl} alt="travel image" /*.image*/ />

  const myLoader = ({ src }) => {
    return (
      movie.posterurl
    )
  }


  return (

    <div className={index === current ? classes.slideActive : classes.slide}>
      {index === current && (
        /**ref ne radi jer samo stavim za specificnu sliku ove ostale nis tj nemaju ref
         * probaj posle nes drugo
        /**  zbog css-a 3 div-a */
        // <div className={classes.sliderElements}>


        <div className={classes.sliderElements}>
          <p>{movie.title}</p>
          <div className={classes.sliderImage}>
            <Image className={classes.sliderImage} unoptimized loader={myLoader} width={1000} height={1000} src={movie.posterurl} alt="travel image" />
            <div className={classes.overlay}>
              <button className={classes.detailsBtn
              }>
                <Link href={`/movies/${movie.title}`}>Details</Link>
              </button>
            </div>
          </div>
        </div>




        /* <button className={classes.trailerBtn}> Watch trailer</button>
          <button onClick={() => addToWatchList(movie)} className={classes.laterBtn}>+Add to watch list</button> */
      )}

    </div >

  );
};

export default Slider;
