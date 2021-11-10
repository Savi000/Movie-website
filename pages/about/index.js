import React from 'react'
import Nav from '../../components/Nav'
import classes from '../../styles/About.module.css';
// import video from '../../material/pexels-pavel-danilyuk-9121647.mp4';
const index = () => {
    return (
        <div className={classes.aboutPage}>
            {/* <video controls autostart autoPlay src={video} type="video/mp4" /> */}
            <Nav />
            <h1>Our mission</h1>
            <p className={classes.textOne}>At Netflix, we want to entertain the world. Whatever your taste, and no matter where you live, we give you access to best-in-class TV shows, movies and documentaries. Our members control what they want to watch, when they want it, with no ads, in one simple subscription. We’re streaming in more than 30 languages and 190 countries, because great stories can come from anywhere and be loved everywhere. We are the world’s biggest fans of entertainment, and we’re always looking to help you find your next favorite story.</p>
            <p className={classes.textTwo}>At Netflix, we want to entertain the world. Whatever your taste, and no matter where you live, we give you access to best-in-class TV shows, movies and documentaries. Our members control what they want to watch, when they want it, with no ads, in one simple subscription. We’re streaming in more than 30 languages and 190 countries, because great stories can come from anywhere and be loved everywhere. We are the world’s biggest fans of entertainment, and we’re always looking to help you find your next favorite story.</p>

        </div>
    )
}

export default index
