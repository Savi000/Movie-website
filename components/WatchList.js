import React from 'react'
import { useContext } from 'react';
import MovieContext from '../store/movieContext';
import Nav from './Nav';
import WatchListMovie from './WatchListMovie'
const WatchList = () => {
    const { watchList } = useContext(MovieContext);

   
    return (
        <div>
            <Nav />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {watchList.length > 0 && watchList.map(watch => <WatchListMovie key={watch.id} movie={watch} />)}
                {/* ne mozemo each movie zbog display flex jer onda btn ne moze da se napravi */}
                {watchList.length <= 0 && <p style={{ color: 'white', fontSize: '36px', position: 'absolute', left: '50%', transform: 'translate(-50%)' }}>No movies</p>}
            </div>

        </div >
    )
}

export default WatchList
