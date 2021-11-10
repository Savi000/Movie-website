// import { useEffect } from "react";


// const savedValues = (key, initialValue) => {
//     const savedValue = localStorage.getItem(key);

//     if (savedValue) return savedValue;

//     if (initialValue instanceof Function) return initialValue();
//     return initialValue
// }

// export default function useLocalStorage(key, initialValue) {
//     const [value, setValue] = useState(() => {
//         return savedValues(key, initialValue);
//     })

//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(value))
//     }, [value])

//     return [value, setValue]


// }

// export default useLocalStorage
