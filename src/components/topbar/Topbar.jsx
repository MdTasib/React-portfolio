import './topbar.scss';
import { Person, Mail, Menu, Clear } from '@material-ui/icons';

function Topbar({ menuOpen, setMenuOpen }) {

    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>Tasib Exclusive</a>
                    <div className="itemContainer">
                        <Person className='icon' />
                        <span>+88 01518477021</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon' />
                        <span>mohammadtasib3@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="humburger" onClick={() => setMenuOpen(!menuOpen)}>
                        {
                            menuOpen ? <Clear /> : <Menu />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;