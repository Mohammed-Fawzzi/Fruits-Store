import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";
import { motion } from "framer-motion";

const Navbar = () => {
  // Nav Menu
  const navMenu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Products",
      link: "#",
    },
    {
      id: 3,
      title: "About",
      link: "#",
    },
    {
      id: 4,
      title: "Shop",
      link: "#",
    },
    {
      id: 5,
      title: "Contacts",
      link: "#",
    },
  ];

  // Open Close Menu
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex justify-between items-center py-4 md:pt-4"
        >
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center gap-2 uppercase">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-600" />
          </div>

          {/* Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {navMenu.map((menuLink) => (
                <li key={menuLink.id} className="text-xl">
                  <a
                    href={menuLink.link}
                    className="inline-block py-1 px-3 md:px-0 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold transition-shadow duration-300"
                  >
                    {menuLink.title}
                  </a>
                </li>
              ))}
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 transition duration-500">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>

          {/* Media For Small Devices */}
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>
      </nav>

      {/* Menu Option */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
