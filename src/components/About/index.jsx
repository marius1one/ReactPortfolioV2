import './index.scss';
import AnimatedLetters from "../AnimatedLetters/index.jsx";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faReact} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1><AnimatedLetters letterClass={letterClass} strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                                         idx={15}/></h1>
                    <p>I have completed a 6-month <span className="stack">JAVA</span> programming course at SMK High
                        School. There I gained knowledge of
                        programming in the <span className="stack">JAVA</span> language,
                        designing databases: <span className="stack">SQL (MySQL, MariaDB)</span> and <span
                            className="stack">NoSQL (MongoDB)</span> and how to use them.
                        I had to program in the <span className="stack">REACT</span> environment. I can create <span
                            className="stack">HTML</span> pages,use the <span
                            className="stack">JavaScript</span> language to
                        make them dynamic and interactive, use <span className="stack">CSS (Bootstrap)</span> to style
                        them.
                    </p>
                    <p>I am familiar with <span className="stack">Spring, Spring-boot, Spring MVC</span> framework. I am
                        learning how to use the <span className="stack">Git</span> versioning system. So I can work with
                        both back-end and front-end.
                        Since artificial intelligence is becoming very important at the moment, so are its capabilities
                        I use it when necessary or out of curiosity. Of course, I deepen my programming
                        knowledge by being interested in the latest trends, creating and solving
                        emerging problems in their projects.</p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faReact}/>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faJava}/>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3}/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faHtml5}/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faGitAlt}/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faJsSquare}/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" active />
        </>
    );
}

export default About;