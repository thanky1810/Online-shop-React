import clsx from "clsx";

import styles from "./banner.module.css";
import nikeImage from "../../assets/images/nike-just-do-it.png";

function Banner() {
  return (
    <div>
      <img src={nikeImage} className={clsx(styles.mainImg)} />
    </div>
  );
}

export default Banner;
