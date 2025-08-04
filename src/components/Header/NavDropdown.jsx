// Header/NavDropdown.jsx
import { useState } from "react";
import clsx from "clsx";
import styles from "./header.module.scss";
import { navData } from "./navData";
import SpaceIcon from "../../assets/icons/space.svg?react";

export default function NavDropdown() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <nav aria-label="Main Navigation" className={clsx(styles.navSection)}>
      <ul className={clsx(styles.navList)}>
        {navData.map((item, index) => (
          <li key={index}>
            <div
              className={clsx(styles.navItem)}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <a href="#" className={clsx(styles.menuLink)}>
                {item.label}
              </a>
              <details
                open={activeIndex === index}
                className={clsx(styles.listDetail)}
              >
                <SpaceIcon width="24px" height="24px" />
                <div className={clsx(styles.dropDownDetailsContent)}>
                  {item.sections.map((section, sIndex) => (
                    <div
                      key={sIndex}
                      className={clsx(styles.dropDownDetailsContent)}
                    >
                      <div className={clsx(styles.content)}>
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
                                <p className={clsx(styles.ndsText)}>
                                  {subItem}
                                </p>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
