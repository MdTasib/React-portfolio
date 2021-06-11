import './portfoliolist.scss';

function Portfoliolist({ title }) {
    return (
        <div>
            <li className='portfoliolist'>{title}</li>
        </div>
    );
}

export default Portfoliolist;