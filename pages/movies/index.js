import { useRouter } from 'next/dist/client/router';
import Movies from '../../components/Movies'
import Nav from '../../components/Nav'
import classes from '../../styles/Movie.module.css';


const index = () => {

    const router = useRouter();



    return (
        <div className={classes.bg} >
            <Nav />
            <Movies />

        </div>
    )
}

export default index
