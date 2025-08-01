import clsx from "clsx";
import styles from "./header.module.scss";

// Import the SVGs as React components
// (Assumes a build tool like CRA, Vite, or Next.js is configured for @svgr)
import NikeIcon from "../../assets/icons/nike.svg?react";
import ConverseIcon from "../../assets/icons/converse.svg?react";
import JordanIcon from "../../assets/icons/jordan.svg?react";
import SpaceIcon from "../../assets/icons/space.svg?react";
import HeartIcon from "../../assets/icons/heart.svg?react";
import BagShopping from "../../assets/icons/bagShopping.svg?react";

function Header() {
  return (
    <div className={clsx(styles.globalContainer)}>
      {/* Top Bar */}
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

      {/* Main Header */}
      <header className={clsx(styles.noAnimation)}>
        <div className={clsx(styles.pre1Header)}>
          <div className={clsx(styles.ndsGrid)}>
            <div className={clsx(styles.brandSection, "nds-grid-item")}>
              <a href="#" aria-label="Nike">
                <NikeIcon
                  width="72px"
                  height="72px"
                  className={clsx(styles.Icon)}
                />
              </a>
            </div>
            <div className={clsx(styles.topBarContainer, "nds-grid-item")}>
              <nav
                aria-label="Main Navigation"
                className={clsx(styles.navSection)}
              >
                <ul className={clsx(styles.navList)}>
                  <li>
                    <div className={clsx(styles.navItem)}>
                      <a href="#" className={clsx(styles.menuLink)}>
                        Men
                      </a>
                      <details className={clsx(styles.listDetail)}>
                        <SpaceIcon width="24px" height="24px" />
                        <div className={clsx(styles.dropDownDetailsContent)}>
                          <div className={clsx(styles.content)}>
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    New and Feature
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Back to School: Extra 20% Off
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    New Arrivals
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Best Sellers
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Lastest Drops
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Shop Back to Sport
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Fall Collection
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    SNKRS Launch Calendar
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className={clsx(styles.content)}>
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    All Shoes
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Basketball
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Lifestyle
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Jordan</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Retro Running
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Running
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Sandals & Slides
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Shoes $100 & Under
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Training & Gym
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Sale Shoes
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className={clsx(styles.content)}>
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Clothing
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    All Clothing
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Hoodies & Sweatshirts
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Jordan</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Jackets & Vests
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Matching Sets
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Pants</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Shorts</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Tops & Graphic Tees
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    24.7 Collection
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Sale Clothing
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className={clsx(styles.content)}>
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Accessories
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Bags & Backpacks
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Belts</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Hats & Headwear
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Socks</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Sunglasses
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Underwear
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Sale Accessories
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </details>
                    </div>
                  </li>
                  <li>
                    <div className={clsx(styles.navItem)}>
                      <a href="#" className={clsx(styles.menuLink)}>
                        Women
                      </a>
                      <details className={clsx(styles.listDetail)}>
                        <SpaceIcon width="24px" height="24px" />
                        <div className={clsx(styles.dropDownDetailsContent)}>
                          <div></div>
                        </div>
                      </details>
                    </div>
                  </li>
                  <li>
                    <div className={clsx(styles.navItem)}>
                      <a href="#" className={clsx(styles.menuLink)}>
                        Kids
                      </a>
                      <details className={clsx(styles.listDetail)}>
                        <SpaceIcon width="24px" height="24px" />
                        <div className={clsx(styles.dropDownDetailsContent)}>
                          <div></div>
                        </div>
                      </details>
                    </div>
                  </li>
                  <li>
                    <div className={clsx(styles.navItem)}>
                      <a href="#" className={clsx(styles.menuLink)}>
                        Jordan
                      </a>
                      <details className={clsx(styles.listDetail)}>
                        <SpaceIcon width="24px" height="24px" />
                        <div className={clsx(styles.dropDownDetailsContent)}>
                          <div></div>
                        </div>
                      </details>
                    </div>
                  </li>
                  <li>
                    <div className={clsx(styles.navItem)}>
                      <a href="#" className={clsx(styles.menuLink)}>
                        Men
                      </a>
                      <details className={clsx(styles.listDetail)}>
                        <SpaceIcon width="24px" height="24px" />
                        <div className={clsx(styles.dropDownDetailsContent)}>
                          <div></div>
                        </div>
                      </details>
                    </div>
                  </li>
                  <li>
                    <div className={clsx(styles.navItem)}>
                      <a href="#" className={clsx(styles.menuLink)}>
                        Sale
                      </a>
                      <details className={clsx(styles.listDetail)}>
                        <SpaceIcon width="24px" height="24px" />
                        <div className={clsx(styles.dropDownDetailsContent)}>
                          <div></div>
                        </div>
                      </details>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={clsx(styles.userMenuWrapper, "nds-grid-item")}>
              <div className={clsx(styles.userToolsContainer)}>
                <search></search>
                <a href="" className={clsx(styles.btnIcon)}>
                  <HeartIcon />
                </a>
                <a href="" className={clsx(styles.btnIcon)}>
                  <BagShopping />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
