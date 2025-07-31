import clsx from "clsx";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import styles from "./Footer.module.scss";
import { openDetails, closeDetails } from "./functions";

function Footer() {
  const detailsRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx(styles.footerWrapper)}>
      <footer className={clsx(styles.footerContentInfo)}>
        <div className={clsx(styles.footerBorder)}></div>
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
            <button className={clsx(styles.languageBtn)}>
              <span>
                <FontAwesomeIcon icon={faGlobe} />
              </span>
              United States
            </button>
          </div>
        </div>
        <div className={clsx(styles.footerSpacer)}></div>
        <div className={clsx(styles.footerEnd)}>
          <ul className={clsx(styles.footerList)}>
            <li className={clsx(styles.firstChild)}>
              <p>
                <span>© 2025 Nike, Inc. All Rights Reserved</span>
              </p>
            </li>
            <li className={clsx(styles.li)}>
              <div
                className={clsx(styles.guidesWrapper)}
                onMouseOver={() => openDetails(detailsRef, setIsOpen)}
                onMouseLeave={() => closeDetails(detailsRef, setIsOpen)}
              >
                <details ref={detailsRef} className={clsx(styles.guidesDetail)}>
                  <summary
                    aria-expanded={isOpen ? "true" : "false"}
                    onMouseOver={() => openDetails(detailsRef, setIsOpen)}
                    onMouseLeave={() => closeDetails(detailsRef, setIsOpen)}
                  >
                    <p>Guides</p>
                  </summary>
                  <div className={clsx(styles.footerDropdown)}>
                    <div className={clsx(styles.linkContainer)}>
                      <ul>
                        <li className={clsx(styles.dropdownListItem)}>
                          <a href="#">
                            <p>Nike Air</p>
                          </a>
                        </li>
                        <li className={clsx(styles.dropdownListItem)}>
                          <a href="#">
                            <p>Nike Air Force 1</p>
                          </a>
                        </li>
                        <li className={clsx(styles.dropdownListItem)}>
                          <a href="#">
                            <p>Nike Air Max</p>
                          </a>
                        </li>
                        <li className={clsx(styles.dropdownListItem)}>
                          <a href="#">
                            <p>Nike FlyEase</p>
                          </a>
                        </li>
                        <li className={clsx(styles.dropdownListItem)}>
                          <a href="#">
                            <p>Nike Fkyknit</p>
                          </a>
                        </li>
                        <li className={clsx(styles.dropdownListItem)}>
                          <a href="#">
                            <p>Nike Free</p>
                          </a>
                        </li>
                        <li className={clsx(styles.dropdownListItem)}>
                          <a href="#">
                            <p>Nike React</p>
                          </a>
                        </li>
                        <li className={clsx(styles.dropdownListItem)}>
                          <a href="#">
                            <p>Nike Vaporfly</p>
                          </a>
                        </li>
                        <li className={clsx(styles.dropdownListItem)}>
                          <a href="#">
                            <p>Nike ZoomX</p>
                          </a>
                        </li>
                        <li className={clsx(styles.dropdownListItem)}>
                          <a href="#">
                            <p>Nike Hippie</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            </li>
            <li className={clsx(styles.li)}>Terms of Sale</li>
            <li className={clsx(styles.li)}>Terms of Use</li>
            <li className={clsx(styles.li)}>Nike Privacy Policy</li>
            <li className={clsx(styles.li)}>Your Privacy Choices</li>
            <li className={clsx(styles.li)}>CA Supply Chains Act</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
