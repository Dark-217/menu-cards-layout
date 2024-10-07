import React, { useState } from "react";
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

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="laptop-menu">
        <ul className="menu h-screen">
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
      </div>
      <div className="mobile-menu">
        {!isOpen && (
          <div className="open-menu" onClick={openMenu}>
            ☰
          </div>
        )}
        {isOpen && (
          <ul className="menu">
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
