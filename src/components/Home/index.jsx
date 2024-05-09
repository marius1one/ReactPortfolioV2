import './index.scss';
import {Link} from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters/index.jsx";
import {useEffect, useState} from "react";
import Logo from "./Logo/index.jsx";
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['M', 'a', 'r', 'i', 'u', 's'];
    const jobArray = ['J', 'A', 'V', 'A', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I am <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} /> <br />
                <h2><AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} /></h2>
                <p>JAVA, Spring, Spring-boot, Spring MVC, React, JavaScript, MySQL, MariaDB, MongoDB</p>
                </h1>
                <Link to="/contact" className="flat-button">Contact me</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" active/>
        </>
    );
}

export default Home;