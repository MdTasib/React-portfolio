import './portfolio.scss';
import burjAlArab from '../../images/bruj-al-arab.png';
import Portfoliolist from '../portfoliolist/Portfoliolist';
import { useState } from 'react';

function Portfolio() {
    const [selected, setSelected] = useState('featured');

    const list = [
        {
            id: 'featured',
            title: 'Featured'
        },
        {
            id: 'mern',
            title: 'MERN Stack'
        },
        {
            id: 'react',
            title: 'React Js'
        },
        {
            id: 'javascript',
            title: 'Javascript'
        }
    ]

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {
                    list.map((item, index) => <Portfoliolist key={index} title={item.title} active={selected === item.id} />)
                }
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