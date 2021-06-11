import './works.scss';
import mobile from '../../images/mobile.png';
import slider1 from '../../images/slider1.png';
import slider2 from '../../images/slider2.png';
import slider3 from '../../images/slider3.png';
import slider4 from '../../images/slider4.png';
import arrow from '../../images/arrow.png';
import glope from '../../images/globe.png';
import writing from '../../images/writing.png';

function Works() {
    const data = [
        {
            id: 1,
            icon: glope,
            title: 'Awesome Desing',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, eveniet.',
            img: slider1
        },
        {
            id: 2,
            icon: mobile,
            title: 'One Page Application',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, eveniet.',
            img: slider2
        },
        {
            id: 3,
            icon: mobile,
            title: 'Dynamic Application',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, eveniet.',
            img: slider3
        }
    ]

    return (
        <div className='works' id='works'>
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={mobile} alt="" />
                                </div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, eveniet.</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={slider1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <img src={arrow} alt="" className='arrow left' />
            <img src={arrow} alt="" className='arrow right' />
        </div>
    );
}

export default Works;