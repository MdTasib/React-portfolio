import './portfoliolist.scss';

function Portfoliolist({ id, title, active, setSelected }) {
    return (
        <div>
            <li className={active ? 'portfoliolist active' : 'portfoliolist'} onClick={() => setSelected(id)}>{title}</li>
        </div>
    );
}

export default Portfoliolist;