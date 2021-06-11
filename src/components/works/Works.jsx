import './works.scss';
import mobile from '../../images/mobile.png';
import landingpage from '../../images/slider1.png';
import slider2 from '../../images/slider2.png';
import slider4 from '../../images/slider4.png';
import arrow from '../../images/arrow.png';
import glope from '../../images/globe.png';
import writing from '../../images/writing.png';
import { useState } from 'react';

function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: 1,
            icon: glope,
            title: 'Awesome Landing Page',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, eveniet.',
            img: landingpage
        },
        {
            id: 2,
            icon: mobile,
            title: 'One Page Application',
            desc: 'Quis est pariatur quidem voluptatibus sunt minima nulla vel animi',
            img: slider2
        },
        {
            id: 3,
            icon: writing,
            title: 'Full Stack Application',
            desc: ' Ratione amet tempora officiis quidem! Pariatur error beatae id hic itaque nostrum nesciunt eligendi sed neque?',
            img: slider4
        }
    ]

    const handleClick = (way) => {
        way === 'left'
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className='works' id='works'>
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {
                    data.map(d => (
                        <div className="container">
                            <div className="item">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="imgContainer">
                                            <img src={d.icon} alt="" />
                                        </div>
                                        <h2>{d.title}</h2>
                                        <p>{d.desc}</p>
                                        <span>Projects</span>
                                    </div>
                                </div>
                                <div className="right">
                                    <img src={d.img} alt="" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <img src={arrow} alt="" className='arrow left' onClick={() => { handleClick('left') }} />
            <img src={arrow} alt="" className='arrow right' onClick={() => { handleClick() }} />
        </div>
    );
}

export default Works;