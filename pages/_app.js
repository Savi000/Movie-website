import '../styles/globals.css'
import { MovieContextProvider } from '../store/movieContext';

// import Router from 'next/router';
// import NProgress from 'nprogress'; //nprogress module
// import 'nprogress/nprogress.css'

//Binding events. 
// Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {
  return (
    <MovieContextProvider >
      <Component {...pageProps} />
    </MovieContextProvider>
  )
}

export default MyApp
