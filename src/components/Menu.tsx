import React from "react";
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
  return (
    <ul className="menu">
      {items.map((item, index) => (
        <>
          {index == items.length - 1 && <hr />}
          <li key={index} className="menu-item">
            {item.href ? (
              <a href={item.href} onClick={item.onClick} className="menu-link">
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
  );
};

export default Menu;
