import React, { useContext, useEffect } from 'react'
import Nav from '../../components/Nav'
import MovieContext from '../../store/movieContext'
import WatchListMovie from '../../components/WatchListMovie';
import EachMovie from '../../components/EachMovie';
import classes from '../../styles/Movie.module.css';
import OneMovieDetail from '../../components/OneMovieDetail';
import WatchList from '../../components/WatchListMovie';

const index = () => {
    const { watchList, removeItem } = useContext(MovieContext);



    /**local storage zavisi od watchList array-a tako da kad ovo stavis brise se i client-u ono da vidi i iz local storage-a. Mozemo ovako bez useEffect i slicno zato sto se sve zavrsava u context-u znaci tamo se watchList setuje na svaku promjenu i odje odma dobijamo novi value watchList-a*/
    return (
        <div>
            <Nav />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {watchList.map(watch => <WatchListMovie key={watch.id} movie={watch} />)}
                {/* ne mozemo each movie zbog display flex jer onda btn ne moze da se napravi */}
                {watchList.length <= 0 && <p style={{ color: 'white', fontSize: '36px', position: 'absolute', left: '50%', transform: 'translate(-50%)' }}>no ljeba</p>}
            </div>

        </div >
    )
}

export default index
