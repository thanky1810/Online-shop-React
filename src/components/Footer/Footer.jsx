import styles from "./Footer.module.css";
import clsx from "clsx";

function Footer() {
  return (
    <div className={clsx(styles.footerWrapper)}>
      <footer className={clsx(styles.footerContentInfo)}>
        <div class={clsx(styles.footerBorder)}></div>
        <div className={clsx(styles.footerMenu)}>
          <div className={clsx(styles.footerColumn)}>
            <h2>Resources</h2>
            <a href="#">Gift Cards</a>
            <a href="#">Find a Store</a>
            <a href="#">MemberShip</a>
            <a href="#">Nike Journal</a>
            <a href="#">Site Feedbak</a>
          </div>
          <div className={clsx(styles.footerColumn)}>
            <h2>Help</h2>
            <a href="#">Get Help</a>
            <a href="#">Order Status</a>
            <a href="#">Shipping and Delivery</a>
            <a href="#">Returns</a>
            <a href="#">Order Cancellation</a>
            <a href="#">Payment Options</a>
            <a href="#">Gift Card Balance</a>
            <a href="#">Contact Us</a>
          </div>
          <div className={clsx(styles.footerColumn)}>
            <h2>Company</h2>
            <a href="#">About Nike</a>
            <a href="#">News</a>
            <a href="#">Careers</a>
            <a href="#">Investors</a>
            <a href="#">Purpose</a>
            <a href="#">Sustainability</a>
          </div>
          <div className={clsx(styles.footerColumn)}>
            <h2>Promotions & Discounts</h2>
            <a href="#">Student</a>
            <a href="#">Military</a>
            <a href="#">Teacher</a>
            <a href="#">First Responders & Medical Professionals</a>
            <a href="#">Birthday</a>
          </div>
          <div className={clsx(styles.footerLanguge)}>
            <button>
              <span></span>
              United States
            </button>
          </div>
          <div className={clsx(styles.footerEnd)}></div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
