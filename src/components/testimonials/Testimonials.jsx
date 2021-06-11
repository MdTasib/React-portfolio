import './testimonials.scss';
import rightArrow from '../../images/right-arrow.png';
import youtube from '../../images/youtube.png';
import linkedin from '../../images/linkedin.png';
import client1 from '../../images/client1.jpg';
import client2 from '../../images/client2.jpg';
import client3 from '../../images/client3.jpg';


function Testimonials() {
    const clients = [
        {
            id: 1,
            name: 'Matrin Harold',
            title: 'CEO of ALBI',
            img: client1,
            icon: youtube,
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro impedit distinctio deserunt.'
        },
        {
            id: 2,
            name: 'Alexa',
            title: 'Co-Founder of DELKA',
            img: client2,
            icon: linkedin,
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro impedit distinctio deserunt.',
            featured: true
        },
        {
            id: 3,
            name: 'Alina Joel',
            title: 'Full Stack Developer',
            img: client3,
            icon: youtube,
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro impedit distinctio deserunt.'
        },
    ]

    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {
                    clients.map((client, index) => (
                        <div className={client.featured ? 'card featured' : 'card'}>
                            <div className="top">
                                <img src={rightArrow} alt="" className='left' />
                                <img src={client.img} alt="" className='user' />
                                <img src={client.icon} alt="" className='right' />
                            </div>
                            <div className="center">
                                <p>{client.desc}</p>
                            </div>
                            <div className="buttom">
                                <h3>{client.name}</h3>
                                <h4>{client.title}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Testimonials;