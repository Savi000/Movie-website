import React, { useContext } from 'react'
import MovieContext from '../../store/movieContext'
import Image from 'next/image';

const NewsDetails = () => {

    const { oneArticle } = useContext(MovieContext);

    const { title, description, urlToImage } = oneArticle;

    const myLoader = ({ src }) => {
        return urlToImage;
    }

    return (
        <>
            <h1>{title}</h1>
            {urlToImage && <Image unoptimized loader={myLoader} src={urlToImage} width={200} height={200} />}
            <p>{description}</p>

        </>
    )
}

export default NewsDetails
