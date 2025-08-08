import clsx from "clsx";
import styles from "./header.module.scss";

function HeaderMen() {
  return (
    <div className={clsx(styles.headerWrapper)}>
      <div className={clsx(styles.ncssRow)}>
        <div className={clsx(styles.gridCol)}>
          <div className={clsx(styles.stickyOuterWrapper)}>
            <div className={clsx(styles.stickyInnerWrapper)}>
              <nav className={clsx(styles.ncssContainer)}>
                <h1 className={clsx(styles.ndsText)}>Men</h1>
                <div className={clsx(styles.barContainer)}>
                  <ul className={clsx(styles.barList)}>
                    <li>
                      <a className={clsx(styles.barItem)} href="">
                        Shoes
                      </a>
                    </li>
                    <li>
                      <a className={clsx(styles.barItem)} href="">
                        Clothing
                      </a>
                    </li>
                    <li>
                      <a className={clsx(styles.barItem)} href="">
                        Accessories
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles.hidden}>Men</div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMen;
