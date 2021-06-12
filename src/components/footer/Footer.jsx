import './footer.scss';
import icon from '../../images/favicon.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <div className='footer'>
            <a href="#intro"><img src={icon} alt="" /> Tasib Exclusive</a>
            <h3>FOLLOW ME</h3>
            <div className="icon">
                <a href="https://www.facebook.com/ohidul.alam.33671/"><FacebookIcon /></a>
                <a href="https://github.com/MdTasib"><GitHub /></a>
                <a href="https://www.linkedin.com/in/mohammad-tasib-4341b71b4/"><LinkedIn /></a>
            </div>
            <strong>Copyright ©2019 All rights reserved | This template is made with by <a href="https://www.linkedin.com/in/mohammad-tasib-4341b71b4/">Tasib</a></strong>
        </div>
    );
};

export default Footer;