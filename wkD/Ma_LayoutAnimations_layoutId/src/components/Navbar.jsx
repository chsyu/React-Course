
import { NavLink } from 'react-router';
import { useState } from 'react';
import { motion } from "motion/react";
import HamMenu from '@/components/HamMenu';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const navBarContent = [
    { to: "/products/category/tableware", label: "Tableware" },
    { to: "/products/category/cookware", label: "Cookware" },
    { to: "/products/category/home-accessories", label: "Home accessories" },
    { to: "/products/category/lighting", label: "Lighting" },
    { to: "/products/category/textile", label: "Textile" },
    { to: "/products/category/furniture", label: "Furniture" },
  ];

  const NavBarContent = () => (
    <motion.div className="flex flex-col md:flex-row md:justify-around md:space-x-6">
      {navBarContent.map(({ to, label }, index) => (
        <NavLink
          key={to}
          to={to}
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `my-3 md:my-0 text-lg transition-all duration-500 ease-in-out opacity-60`
          }
        >
          <motion.p
            onHoverStart={() => {
              setSelected(index);
            }}
            className="relative inline-block"
          >
            {index === selected && (
              <motion.div
                className="absolute bottom-[-5px] h-[2px] rounded-[6px] border-b-[3px] border-primary w-full"
                layout="position"
                layoutId="underline"
                transition={{
                  layout: {
                    duration: 0.3,
                    ease: 'easeOut',
                  },
                }}
              />
            )}
            {label}
          </motion.p>
        </NavLink>
      ))}
    </motion.div>
  );

  return (
    <>
      {/* 桌面版導覽列 */}
      <div className="hidden md:flex justify-around mt-3 mb-8">
        <NavBarContent />
      </div>

      {/* 手機版 Drawer */}
      <div className="drawer md:hidden">
        <input id="drawer-toggle" type="checkbox" className="drawer-toggle" checked={isOpen} readOnly />
        <HamMenu
          id="drawer-toggle"
          className="absolute transform -translate-y-37 translate-x-1 drawer-toggle"
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
        />
        <div className="drawer-side z-9999">
          <label htmlFor="drawer-toggle" className="drawer-overlay" onClick={() => setIsOpen(false)}></label>
          <div className="menu p-4 w-64 min-h-full drawer-bg">
            <h2 className="text-xl font-bold mb-10">CATEGORY</h2>
            <NavBarContent />
          </div>
        </div>
      </div>
    </>
  );
}