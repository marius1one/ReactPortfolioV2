import './index.scss';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/index.jsx";
import {useEffect, useState} from "react";


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1><AnimatedLetters letterClass={letterClass}
                                         strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]} idx={15}/></h1>
                    <p>Feel free to contact me if you have any questions or suggestions. I will be happy to help
                        you.</p>


                    <div className="contact-form">
                        <form>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li>
                                <li className="half">
                                    <input type='email' name="email" placeholder="Email" required/>
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required/>
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message" required/>
                                </li>
                                <li>
                                    <input type='submit' className="flat-button" value="Send"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" active/>
        </>
    );
}

export default Contact;