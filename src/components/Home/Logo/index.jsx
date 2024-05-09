import './index.scss';
import LogoS from '../../../assets/images/logo-marostica.png';
import {useEffect, useRef} from "react";
import {gsap, } from "gsap";

const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect (() => {
        gsap.fromTo(bgRef.current, {opacity: 0}, {duration: 1, opacity: 1});

        gsap.from(outlineLogoRef.current, {drawSVG: "0%", duration: 20,})

        gsap.fromTo(solidLogoRef.current, {opacity: 0}, {duration: 4, opacity: 1, delay: 4})
    }, [])

    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" />

        </div>
    )
}

export default Logo;