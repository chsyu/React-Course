import { useState, useContext } from "react";
import { Drawer } from "antd";
import { StoreContext } from "../store";

import NavItem from "./NavItem";
import HamMenu from "./HamMenu";

export default function NavBar() {
  const [isOnTouch, setIsOnTouch] = useState(false);
  const handleCloseDrawer = () => setIsOnTouch(false);
  const { state: { userSignin: { userInfo } } } = useContext(StoreContext);

  return (
    <div>
      <HamMenu onClick={() => setIsOnTouch(!isOnTouch)} isOnTouch={isOnTouch} />
      <div className="nav-bar collapse-mobile">
        <NavItem
          to="/products/tableware"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Tableware
        </NavItem>
        <NavItem
          to="/products/cookware"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Cookware
        </NavItem>
        <NavItem
          to="/products/home-accessories"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Home Accessories
        </NavItem>
        <NavItem
          to="/products/lighting"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Lighting
        </NavItem>
        <NavItem
          to="/products/textile"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Textile
        </NavItem>
        <NavItem
          to="/products/furniture"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Furniture
        </NavItem>
        <NavItem
          to="/admin/feed-products"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          JSON Feeder
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
        {userInfo
          ? <p style={{marginLeft: 100, fontSize: 24,}}>{userInfo.displayName}'s</p>
          : <p></p>
        }
        <NavItem
          onClose={handleCloseDrawer}
          to="/products/tableware"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Tableware
        </NavItem>
        <NavItem
          onClose={handleCloseDrawer}
          to="/products/cookware"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Cookware
        </NavItem>
        <NavItem
          onClose={handleCloseDrawer}
          to="/products/home-accessories"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Home Accessories
        </NavItem>
        <NavItem
          onClose={handleCloseDrawer}
          to="/products/lighting"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Lighting
        </NavItem>
        <NavItem
          onClose={handleCloseDrawer}
          to="/products/textile"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Textile
        </NavItem>
        <NavItem
          onClose={handleCloseDrawer}
          to="/products/furniture"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          Furniture
        </NavItem>
        <NavItem
          to="/admin/feed-products"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          JSON Feeder
        </NavItem>
      </Drawer>
    </div>
  );
}
