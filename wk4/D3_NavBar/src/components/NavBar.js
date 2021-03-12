import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <Link to="/tableware" className="nav-item">
                Tableware
            </Link>
            <Link to="/cookware" className="nav-item">
                Cookware
            </Link>
            <Link to="/home-accessories" className="nav-item">
                Home accessories
            </Link>
            <Link to="/lighting" className="nav-item">
                Lighting
            </Link>
            <Link to="/textile" className="nav-item">
                Textile
            </Link>
            <Link to="/furniture" className="nav-item">
                Furniture
            </Link>
        </div>
    );
}