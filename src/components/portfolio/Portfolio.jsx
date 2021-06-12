import './portfolio.scss';
import Portfoliolist from '../portfoliolist/Portfoliolist';
import { useState, useEffect } from 'react';
import {
    featuredPortfolio,
    reactPortfolio,
    javascriptPortfolio,
    mernPortfolio
} from '../../data';

function Portfolio() {
    const [selected, setSelected] = useState('javascript');
    const [data, setData] = useState([]);

    const list = [
        {
            id: 'javascript',
            title: 'Javascript'
        },
        {
            id: 'react',
            title: 'React Js'
        },
        {
            id: 'mern',
            title: 'MERN Stack'
        },
        {
            id: 'featured',
            title: 'Featured'
        },
    ]

    useEffect(() => {
        switch (selected) {
            case 'featured':
                setData(featuredPortfolio);
                break;
            case 'react':
                setData(reactPortfolio);
                break;
            case 'mern':
                setData(mernPortfolio);
                break;
            case 'javascript':
                setData(javascriptPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {
                    list.map((item, index) => <Portfoliolist key={index} title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />)
                }
            </ul>
            <div className="container">
                {
                    data.map((d, index) => (
                        <div key={index} className="items">
                            <div className="item">
                                <img src={d.img} alt="" />
                                <h3>{d.title}</h3>
                            </div>
                            <div className="source">
                                <a href={d.preview}>Preview</a>
                                <a href={d.source}>Source</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Portfolio;