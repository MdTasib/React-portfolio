import './intro.scss';
import me from '../../images/me2.png';
import arrowDown from '../../images/down.png';
import { init } from 'ityped';
import { useRef, useEffect } from 'react';

function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Front End Developer', 'React.js Developer', 'JavaScript Developer']
        })
    }, []);


    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src={me} alt="mohammad tasib" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There! I'm</h2>
                    <h1>Mohammad Tasib</h1>
                    <h3>A Professional <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src={arrowDown} alt="" />
                </a>
            </div>
        </div>
    );
}

export default Intro;