import React from 'react'
import { useContext } from 'react';
import MovieContext from '../store/movieContext';
import Nav from './Nav';
import WatchListMovie from './WatchListMovie'
const WatchList = () => {
    const { watchList } = useContext(MovieContext);

    /**NE MOZE U INDEX.JS OD PAGES HOOKS VIDIS USE CONTEXT USE EFFECT STATE,... BILO KOJI HOOK ZATO STO index.js(ne pocinje velikim slovom jedan od parametara da nije) NIJE KOMPONENTA NITI CUSTOM HOOK I NE MOZES DA KORISTIS OVO ZATO PRAVIS KOMPONENTU PA JE RENDERUJES ISPOD KAO JA SAD */

    return (
        <div>
            <Nav />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {watchList.length > 0 && watchList.map(watch => <WatchListMovie key={watch.id} movie={watch} />)}
                {/* ne mozemo each movie zbog display flex jer onda btn ne moze da se napravi */}
                {watchList.length <= 0 && <p style={{ color: 'white', fontSize: '36px', position: 'absolute', left: '50%', transform: 'translate(-50%)' }}>no ljeba</p>}
            </div>

        </div >
    )
}

export default WatchList
