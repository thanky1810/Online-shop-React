import clsx from "clsx";

import styles from "./Topclassic.module.scss";
import { shoesData } from "./shoesData";
import AF1 from "../../assets/images/Topclassic/AF1.png";
import LessThanIcon from "../../assets/icons/lessThan.svg?react";
import MoreThanIcon from "../../assets/icons/MoreThan.svg?react";

function TopClassic() {
  return (
    <div className={clsx(styles.stcWrapper)}>
      <div className={clsx(styles.stcGrid)}>
        <div className={clsx(styles.gridCol)}>
          <div className={clsx(styles.filmStrip)}>
            <section className={clsx(styles.ndsCarousel)}>
              <div className={clsx(styles.ndsBox)}>
                <div className={clsx(styles.headSection)}>
                  <div className={clsx(styles.headChild)}>
                    <h2 className={clsx(styles.ndsText)}>Shop The Classics</h2>
                  </div>
                </div>
                <div></div>
                <div className={clsx(styles.ndsBtnWrapper)}>
                  <button className={clsx(styles.carouselBtn)}>
                    <div className={clsx(styles.icon)}>
                      <LessThanIcon></LessThanIcon>
                    </div>
                  </button>
                  <button className={clsx(styles.carouselBtn)}>
                    <div className={clsx(styles.icon)}>
                      <MoreThanIcon></MoreThanIcon>
                    </div>
                  </button>
                </div>
              </div>
              <ul className={clsx(styles.slider)}>
                {shoesData.map((item, index) => {
                  return (
                    <li key={index} className={clsx(styles.sildeItem)}>
                      <figure className={clsx(styles.figure)}>
                        <div className={clsx(styles.wetubkUi)}>
                          <div className={clsx(styles.wetChild)}>
                            <div className={clsx(styles.imgContent)}>
                              <img
                                src={item.img}
                                className={clsx(styles.img)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className={clsx(styles.sildeTitle)}>
                          <h3 className={clsx(styles.ndsText)}>{item.title}</h3>
                        </div>
                        <a href="#" className={clsx(styles.sildeA)}></a>
                      </figure>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopClassic;
