import NavItem from "./NavItem";

export default function NavBar() {

    return (
        <div className="nav-bar">
            <NavItem to="/tableware" className="nav-item" activeClassName="nav-item--active">
                Tableware
            </NavItem>
            <NavItem to="/cookware" className="nav-item" activeClassName="nav-item--active">
                Cookware
            </NavItem>
            <NavItem to="/home-accessories" className="nav-item" activeClassName="nav-item--active">
                Home accessories
            </NavItem>
            <NavItem to="/lighting" className="nav-item" activeClassName="nav-item--active">
                Lighting
            </NavItem>
            <NavItem to="/textile" className="nav-item" activeClassName="nav-item--active">
                Textile
            </NavItem>
            <NavItem to="/furniture" className="nav-item" activeClassName="nav-item--active">
                Furniture
            </NavItem>
        </div>
    );
}