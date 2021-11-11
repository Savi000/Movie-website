import { useRouter } from 'next/dist/client/router';
import Link from 'next/dist/client/link';
import { useEffect, useContext, useRef, useState } from 'react';
import MovieContext from '../store/movieContext';
import classes from '../styles/Movie.module.css';
import Image from 'next/image';
import React from 'react';

const EachMovie = ({ movie, }) => {

    const widthElement = useRef();

    const { setDivWidth } = useContext(MovieContext)

    const { posterurl, title, year, id, storyline } = movie;


    const router = useRouter();


    useEffect(() => {
        setDivWidth(widthElement.current.offsetWidth);
    })

    const myLoader = ({ src }) => {
        return posterurl;
    }
    return (
        /**div style position relative bilo */
        <div className={classes.movie} ref={widthElement}>
            <button className={classes.imgBtn}><Link href={`/movies/${title}`}>
                <a>
                    <Image layout='fixed' loader={myLoader} unoptimized src={posterurl} className={classes.imgs} width={300} height={300} alt={title} />
                </a>
            </Link>
            </button>
            <p>{title}</p>
        </div>
    )
}

export default EachMovie
