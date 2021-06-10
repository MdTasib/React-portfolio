import './portfolio.scss';
import burjAlArab from '../../images/bruj-al-arab.png';

function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li className='active'>Awesome</li>
                <li>MERN Stack</li>
                <li>React Js</li>
                <li>Javascript</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src={burjAlArab} alt="Burj Al Arab" />
                    <h3>Burj Al Arab</h3>
                </div>
                <div className="item">
                    <img src={burjAlArab} alt="Burj Al Arab" />
                    <h3>Burj Al Arab</h3>
                </div>
                <div className="item">
                    <img src={burjAlArab} alt="Burj Al Arab" />
                    <h3>Burj Al Arab</h3>
                </div>
                <div className="item">
                    <img src={burjAlArab} alt="Burj Al Arab" />
                    <h3>Burj Al Arab</h3>
                </div>
                <div className="item">
                    <img src={burjAlArab} alt="Burj Al Arab" />
                    <h3>Burj Al Arab</h3>
                </div>
                <div className="item">
                    <img src={burjAlArab} alt="Burj Al Arab" />
                    <h3>Burj Al Arab</h3>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;