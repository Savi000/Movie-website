import React, { useContext, useEffect } from 'react'
import Nav from '../../components/Nav'
import MovieContext from '../../store/movieContext'
import WatchListMovie from '../../components/WatchListMovie';
import WatchList from '../../components/WatchListMovie';
// import EachMovie from '../../components/EachMovie';
// import classes from '../../styles/Movie.module.css';
// import OneMovieDetail from '../../components/OneMovieDetail';
// import WatchList from '../../components/WatchListMovie';

const index = () => {
    // const { watchList, } = useContext(MovieContext); NE MOZE

    /**OVDJE NE MOZE HOOKS VIDIS USE CONTEXT USE EFFECT STATE,... BILO KOJI HOOK ZATO STO OVO NIJE KOMPONENTA NITI CUSTOM HOOK I NE MOZES DA KORISTIS OVO ZATO PRAVIS KOMPONENTU PA JE RENDERUJES ISPOD KAO JA SAD */

    /**local storage zavisi od watchList array-a tako da kad ovo stavis brise se i client-u ono da vidi i iz local storage-a. Mozemo ovako bez useEffect i slicno zato sto se sve zavrsava u context-u znaci tamo se watchList setuje na svaku promjenu i odje odma dobijamo novi value watchList-a*/
    return (
        <WatchList />
    )
}

export default index
