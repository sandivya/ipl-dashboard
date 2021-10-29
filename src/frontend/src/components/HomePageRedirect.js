import {React} from 'react';
import {Link} from 'react-router-dom';
import './HomePageRedirect.scss'


export const HomePageRedirect = () => {
    return (
            <div className="header-section">
                <Link to="/team"><h1 className="app-name">IPL Dashboard</h1></Link>
            </div>
    );
}