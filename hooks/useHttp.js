// import React, { useEffect, useState } from 'react'

// const useHttp = () => {

//     const [movies, setMovies] = useState([]);

//     const fetchMovies = async () => {
//         try {
//             const res = await fetch('https://movies-c87b7-default-rtdb.europe-west1.firebasedatabase.app/movies/items.json')

//             const data = await res.json();
//             setMovies(data)
//         }

//         catch (error) {
//             console.log(error);
//         }
//     }

//     useEffect(() => {
//         fetchMovies()
//     }, [])

//     return {
//         movies: movies,
//     }
// }


// export default useHttp;