import clsx from "clsx";
import styles from "./header.module.scss";

// Import the SVGs as React components
// (Assumes a build tool like CRA, Vite, or Next.js is configured for @svgr)
import NikeIcon from "../../assets/icons/nike.svg?react";
import ConverseIcon from "../../assets/icons/converse.svg?react";

function Header() {
  return (
    <div className={clsx(styles.globalContainer)}>
      {/* Top Bar */}
      <nav className={clsx(styles.topBar)}>
        <div className={clsx(styles.topBarLeft)}>
          <a href="#" aria-label="Jordan">
            <NikeIcon width="24px" height="24px" />
          </a>
          <a href="#" aria-label="Menu">
            <ConverseIcon width="24px" height="24px" />
          </a>
        </div>
        <div className={clsx(styles.topBarRight)}>
          <nav className={clsx(styles.umwNav)}>
            <ul className={clsx(styles.linkContainer)}>
              <li className={clsx(styles.linkItem)}>
                <a href="#">Find a Store</a>
              </li>
              <li className={clsx(styles.linkItem)}>
                <a href="#">Help</a>
              </li>
              <li className={clsx(styles.linkItem)}>
                <a href="#">Join Us</a>
              </li>
              <li className={clsx(styles.linkItem)}>
                <a href="#">Sign In</a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>

      {/* Main Header */}
      <nav className={clsx(styles.pre1Header)}>
        <div className={clsx(styles.commerceHeaderWrapper)}>
          <div className={clsx(styles.topBarContainer)}>
            <div className={clsx(styles.brandSection)}>
              <a href="#" aria-label="Nike">
                <NikeIcon width="48px" height="48px" />
              </a>
            </div>
            <div className={clsx(styles.navSection)}>
              <nav aria-label="Main Navigation">
                <ul className={clsx(styles.navList)}>
                  <li className={clsx(styles.navItem)}>
                    <a href="#">Men</a>
                  </li>
                  <li className={clsx(styles.navItem)}>
                    <a href="#">Women</a>
                  </li>
                  <li className={clsx(styles.navItem)}>
                    <a href="#">Kids</a>
                  </li>
                  <li className={clsx(styles.navItem)}>
                    <a href="#">Jordan</a>
                  </li>
                  <li className={clsx(styles.navItem)}>
                    <a href="#">Sport</a>
                  </li>
                  <li className={clsx(styles.navItem)}>
                    <a href="#">Sale</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={clsx(styles.userMenuWrapper)}>
              <nav className={clsx(styles.umwNav)}>
                <ul className={clsx(styles.linkContainer)}>
                  <li className={clsx(styles.linkItem)}>
                    <input
                      type="text"
                      placeholder="Search"
                      className={clsx(styles.searchInput)}
                    />
                  </li>
                  <li className={clsx(styles.linkItem)}>
                    <a href="#">
                      <span className={styles.icon}>❤️</span>
                    </a>
                  </li>
                  <li className={clsx(styles.linkItem)}>
                    <a href="#">
                      <span className={styles.icon}>🛒</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
