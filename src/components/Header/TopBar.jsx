import clsx from "clsx";
import styles from "./header.module.scss";

import ConverseIcon from "../../assets/icons/converse.svg?react";
import JordanIcon from "../../assets/icons/jordan.svg?react";

function TopBar() {
  return (
    <nav className={clsx(styles.topBar)}>
      <div className={clsx(styles.topBarLeft)}>
        <a href="#" aria-label="Jordan" className={clsx(styles.Icon)}>
          <JordanIcon width="26px" height="26px" />
        </a>
        <a href="#" aria-label="Menu" className={clsx(styles.Icon)}>
          <ConverseIcon width="26px" height="26px" />
        </a>
      </div>
      <div className={clsx(styles.topBarRight)}>
        <nav className={clsx(styles.umwNav)}>
          <ul className={clsx(styles.linkContainer)}>
            <li className={clsx(styles.linkItem)}>
              <a href="#">Find a Store</a>
              <div className={clsx(styles.line)}></div>
            </li>
            <li className={clsx(styles.linkItem)}>
              <a href="#">Help</a>
              <div className={clsx(styles.line)}></div>
            </li>
            <li className={clsx(styles.linkItem)}>
              <a href="#">Join Us</a>
              <div className={clsx(styles.line)}></div>
            </li>
            <li className={clsx(styles.linkItem)}>
              <a href="#">Sign In</a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
}

export default TopBar;
