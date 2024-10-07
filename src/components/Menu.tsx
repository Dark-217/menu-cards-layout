import React, { useEffect, useState, useRef } from "react";
import "../style/menu.css";

type MenuItem = {
  label: string;
  onClick?: () => void;
  href?: string;
};

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Close the menu
      }
    };

    // Add when the component is mounted
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]); // Empty dependency array means this effect will only run once

  return (
    <>
      <div className="laptop-menu">
        <ul className="menu h-screen">
          <div className="menu-content">
            {items.map((item, index) => (
              <>
                {index == items.length - 1 && <hr />}
                <li key={index} className="menu-item">
                  {item.href ? (
                    <a
                      href={item.href}
                      onClick={item.onClick}
                      className="menu-link"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button onClick={item.onClick} className="menu-button">
                      {item.label}
                    </button>
                  )}
                </li>
              </>
            ))}
          </div>
        </ul>
      </div>
      <div className="mobile-menu">
        {!isOpen && (
          <div className="open-menu" onClick={openMenu}>
            ☰
          </div>
        )}
        {isOpen && (
          <ul className="menu" ref={menuRef}>
            <div className="close-menu" onClick={closeMenu}>
              ✕
            </div>
            {items.map((item, index) => (
              <>
                {index == items.length - 1 && <hr />}
                <li key={index} className="menu-item">
                  {item.href ? (
                    <a
                      href={item.href}
                      onClick={item.onClick}
                      className="menu-link"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button onClick={item.onClick} className="menu-button">
                      {item.label}
                    </button>
                  )}
                </li>
              </>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Menu;
