import React, { useContext } from 'react'
import MovieContext from '../store/movieContext';
import Image from 'next/image';
import classes from '../styles/WatchList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const WatchList = ({ movie }) => {

    const { removeItem } = useContext(MovieContext);

    const { posterurl, title } = movie;

    const myLoader = () => {
        return posterurl
    }

    return (
        <div className={classes.watchListMovies}>
            <Image loader={myLoader} src={posterurl} alt={title} width={250} height={250} />
            <h2 style={{ color: 'white' }}>{title}</h2>
            <button onClick={() => removeItem(movie)}>Remove item <FontAwesomeIcon className={classes.trashIcon} icon={faTrash}></FontAwesomeIcon></button>
        </div>
    )
}

export default WatchList
