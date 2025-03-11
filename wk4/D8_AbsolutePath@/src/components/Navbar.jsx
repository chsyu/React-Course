import { NavLink } from 'react-router';

export default function NavBar() {

  const navBarContent = [
    { to: "/products/category/tableware", label: "Tableware" },
    { to: "/products/category/cookware", label: "Cookware" },
    { to: "/products/category/home-accessories", label: "Home accessories" },
    { to: "/products/category/lighting", label: "Lighting" },
    { to: "/products/category/textile", label: "Textile" },
    { to: "/products/category/furniture", label: "Furniture" },
  ];  

  return (
    <div className="flex flex-wrap justify-center">
      {navBarContent.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `mx-6 text-white text-base transition-all duration-500 ease-in-out ${
              isActive ? "opacity-100 font-normal" : "opacity-60"
            } hover:opacity-100 hover:[text-shadow:0px_0px_30px_white]`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}