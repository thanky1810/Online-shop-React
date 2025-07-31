import clsx from "clsx";

import styles from "./banner.module.scss";
import nikeImage from "../../assets/images/nike-just-do-it.png";

function Banner() {
  return (
    <div className={clsx(styles.banner)}>
      <img src={nikeImage} className={clsx(styles.mainImg)} />
      <figcaption className={clsx(styles.wrapper)}>
        <div className={clsx(styles.contentWrapper)}>
          <p className={clsx(styles.p1)}>Look of Football</p>
          <h3 className={clsx(styles.h3)}>FIELD GENERAL</h3>
          <p className={clsx(styles.p2)}>
            Crafted with purpose. Driven by passion. Designed for everyday
          </p>
          <div>
            <a href="#" className={styles.button}>
              Shop
            </a>
          </div>
        </div>
      </figcaption>
    </div>
  );
}

export default Banner;
