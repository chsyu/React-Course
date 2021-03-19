import { useState } from "react";
import { Drawer } from "antd";
import NavItem from "./NavItem";
import HamMenu from "./HamMenu";

export default function NavBar() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const handleCloseDrawer = () => setIsOnTouch(false);
    return (
        <div>
            <HamMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />
            <div className="nav-bar collapse-mobile">
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
            <Drawer
                title=" "
                placement={"left"}
                closable={false}
                onClose={handleCloseDrawer}
                visible={isOnTouch}
                key={"left"}
                width={400}
                zIndex={99}
                bodyStyle={{ backgroundColor: "#111828" }}
                headerStyle={{ backgroundColor: "#111828", color: "#fff" }}
            >
                <NavItem onClose={handleCloseDrawer} to="/tableware" className="nav-item" activeClassName="nav-item--active">
                    Tableware
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/cookware" className="nav-item" activeClassName="nav-item--active">
                    Cookware
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/home-accessories" className="nav-item" activeClassName="nav-item--active">
                    Home accessories
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/lighting" className="nav-item" activeClassName="nav-item--active">
                    Lighting
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/textile" className="nav-item" activeClassName="nav-item--active">
                    Textile
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/furniture" className="nav-item" activeClassName="nav-item--active">
                    Furniture
                </NavItem>
            </Drawer>
        </div>
    );
}