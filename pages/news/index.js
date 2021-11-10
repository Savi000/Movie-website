import React, { useContext, useEffect, useState } from 'react'
import Nav from '../../components/Nav'
import Article from '../../components/Article';
import classes from '../../styles/News.module.css';
import MovieContext from '../../store/movieContext';


const index = () => {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);



    useEffect(() => {
        const fetchData = async () => {
            const apiKey = 'c39f7d7ac3394626a11d2f524dff1c2f'
            let topic = 'movies';
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}=2021-10-27&sortBy=popularity&apiKey=${apiKey}`)
                const news = await response.json();
                setData(news.articles)

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const loadMore = () => {
        setLoad(true)
    }


    return (
        <div className={classes.all}>
            <Nav />

            <div className={classes.allNews}>
                {/* id nedje je isti nedje nije zato koritim math random mada moze i index mzd */}
                {load ? data.map(dat => <Article key={Math.random() * 1000} article={dat} />) : data.slice(0, 12).map(dat => <Article key={Math.random() * 1000} article={dat} />)}
                {!load && <button onClick={loadMore}>Load more news...</button>}
            </div>
        </div>
    )
}

export default index
