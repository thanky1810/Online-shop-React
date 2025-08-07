// Header/NavDropdown.jsx
import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./header.module.scss";
import { navData } from "./navData";
import SpaceIcon from "../../assets/icons/space.svg?react";

function NavDropdown() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <nav aria-label="Main Navigation" className={clsx(styles.navSections)}>
      <ul className={clsx(styles.navList)}>
        {navData.map((item, index) => (
          <li key={index}>
            <div
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={clsx(styles.navItem, {
                [styles.navActived]: activeIndex == index,
              })}
            >
              <Link to={item.link} className={clsx(styles.menuLink)}>
                {item.label}
              </Link>
              <div
                open={activeIndex === index}
                className={clsx(styles.listDetail)}
              >
                <SpaceIcon width="24px" height="24px" />
                <div
                  className={clsx(styles.dropDownDetailsContent, {
                    [styles.dropDownActive]: activeIndex == index,
                  })}
                >
                  {item.sections.map((section, sIndex) => (
                    <div key={sIndex} className={clsx(styles.content)}>
                      <ul>
                        <li className={clsx(styles.dropDownSubListTitle)}>
                          <a href="#">
                            <p className={clsx(styles.ndsText)}>
                              {section.title}
                            </p>
                          </a>
                        </li>
                        {section.items.map((subItem, i) => (
                          <li
                            key={i}
                            className={clsx(styles.dropDownSubListItem)}
                          >
                            <a href="#">
                              <p className={clsx(styles.ndsText)}>{subItem}</p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavDropdown;
