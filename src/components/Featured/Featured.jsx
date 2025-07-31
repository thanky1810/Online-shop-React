import clsx from "clsx";
import styles from "./Featured.module.scss";
import nikeAva from "../../assets/images/nike’s-best-cushioned-shoes-for-running-and-walking.png";
import nikeVomero from "../../assets/images/Nike-Vomero-Plus-cover-1024x682.png";

function Featured() {
  return (
    <div className={clsx(styles.Entirewrapper)}>
      <div>
        <h2>Featured</h2>
      </div>
      <div className={clsx(styles.imgContainer)}>
        <div className={clsx(styles.img1)}>
          <img src={nikeAva} />
          <div className={clsx(styles.textContainer)}>
            <p>just in</p>
            <h3>Nike Ava Rover</h3>
            <button>Shop</button>
          </div>
        </div>
        <div className={clsx(styles.img2)}>
          <img src={nikeVomero} />
          <div className={clsx(styles.textContainer)}>
            <p>Run Bigger</p>
            <h3>The Vomero Plus launches 8.7.</h3>
            <button>Get Notified</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Featured;
