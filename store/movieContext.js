import { useRouter } from "next/dist/client/router";
import { route } from "next/dist/server/router";
import React, { useEffect, useState } from "react";
import movies from '../movies.json';
const MovieContext = React.createContext()

export const MovieContextProvider = ({ children }) => {

    const [value, setValue] = useState()
    const [oneArticle, setOneArticle] = useState([]);
    const [divWidth, setDivWidth] = useState(0);

    // const [watchList, setWatchList] = useState(() => {
    //     if (localStorage !== undefined) {
    //         const saved = localStorage.getItem('watchListMovies');
    //         const initialValue = JSON.parse(saved);
    //         return initialValue
    //     } else {
    //         return [];
    //     }

    // });

    const [watchList, setWatchList] = useState(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('watchListMovies')) {
            const saved = localStorage.getItem('watchListMovies');
            const initialValue = JSON.parse(saved);
            return initialValue
        }
        else {
            return [];
        }
    });

    const router = useRouter();

    const inputValue = (e) => {
        setValue(e.target.value);
    }



    const newsDetail = (title, news) => {
        router.push(`/news/${title}`)/**index koji dobijes kao parametar */
        // let newsDetails = news.filter(article => article.title === title);
        setOneArticle(news);
    }


    const addToWatchList = (watchListMovie) => {
        // if (watchList.includes(watchListMovie)) {
        //     setWatchList(watchList);
        // }
        // else {
        //     setWatchList(prev => [...prev, watchListMovie])
        // }

        setWatchList(prev => [...prev, watchListMovie]);

        // let nes = watchList.filter((element, index) => watchListMovie.id === element.id)

        watchList.map((element, index) => {
            if (watchListMovie.id === element.id) {
                setWatchList(watchList)
            }
        })

        /**OVO POGLEDAJ OBAVEZNO ZASTO INCLUDES NE RADI OVDJE I ZA STA JE TACNO NAMJENJEN */
        // if (nes.length > 0) {
        //     setWatchList(watchList);
        // }
    }


    const removeItem = (movie) => {
        setWatchList(watchList.filter(watch => watch.id !== movie.id))
    }



    useEffect(() => {
        localStorage.setItem('watchListMovies', JSON.stringify(watchList))
    }, [watchList]);
    // watchList.length > 0 && 


    return (
        <MovieContext.Provider value={{ inputValue, value, newsDetail, oneArticle, addToWatchList, removeItem, watchList, divWidth, setDivWidth }}>
            {children}
        </MovieContext.Provider>
    )

}

// export function useMovieContext() {
//     return useContext(MovieContext);
// } nije neophono ovo je vljd kad u komponenti koristis useContext pa da olaksa nmp ali sajt nije radio zbog children-a iznad


export default MovieContext;