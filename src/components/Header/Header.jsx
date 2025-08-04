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
                                    Air Max Muse & Air Superfly
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
                                    SNKRS Launch Calender
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
                                    Shop by color
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Picante Red
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Teal Tones
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Pink Pops
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Burgundy Crush
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Midnight Navy
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Timeless Neutrals
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
                        Kids
                      </a>
                      <details className={clsx(styles.listDetail)}>
                        <SpaceIcon width="24px" height="24px" />
                        <div className={clsx(styles.dropDownDetailsContent)}>
                          {/* Get Set For School */}
                          <div className={clsx(styles.content)}>
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Get Set for School
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
                                    Shop the Collection
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Shoes</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Clothing
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Bags & BackPacks
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    practice Read Essentials
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Fleece Shop
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Nike x LEGO Collection
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Teen</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    SNKRS Launch Calender
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* All Shoes */}
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
                                    Big Kids (7-15 yrs)
                                  </p>
                                </a>
                              </li>{" "}
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Little Kids (3-7 yrs)
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Baby & Toddler (0-3 yrs)
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Back to School Shoes
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
                                    Shoes $80 & Under
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Soccer</p>
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
                          {/* All Clothing */}
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
                                    Big Kids (7-15 yrs)
                                  </p>
                                </a>
                              </li>{" "}
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Little Kids (3-7 yrs)
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Baby & Toddler (0-3 yrs)
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Back to School Clothing
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Bras</p>
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
                                    Matching Sets
                                  </p>
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
                                    Pants & Tights
                                  </p>
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
                                    Skirts & Dresses
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Tops & T-Shirts
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
                          {/* Accessories */}
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
                          {/* Shop By Sport */}
                          <div className={clsx(styles.content)}>
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Shop By Sport
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
                                  <p className={clsx(styles.ndsText)}>Belts</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Gymnastics
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Football
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
                                  <p className={clsx(styles.ndsText)}>Soccer</p>
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
                        Jordan
                      </a>
                      <details className={clsx(styles.listDetail)}>
                        <SpaceIcon width="24px" height="24px" />
                        <div className={clsx(styles.dropDownDetailsContent)}>
                          {/* New and Feature & Accessories */}
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
                                    Jordan Heat Check
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Jordan Sleeper Picks
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
                                    Shattered Backboard Capsule
                                  </p>
                                </a>
                              </li>
                            </ul>
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
                                    Shop All
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
                                  <p className={clsx(styles.ndsText)}>
                                    Hats & Headwear
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* Sport */}
                          <div className={clsx(styles.content)}>
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Sport</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Jordan Basketball
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Jordan Golf
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Jordan Cleats
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Women's Jordan Training & Gym
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* Men */}
                          <div className={clsx(styles.content)}>
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Men</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Shop All
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Shoes</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>AJ1</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Clothing
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* Women */}
                          <div className={clsx(styles.content)}>
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Women</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Jordan Brand Women's Collection
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Shop All
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Shoes</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>AJ1</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Clothing
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* Kids */}
                          <div className={clsx(styles.content)}>
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Kids</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Shop All
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Shoes</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>AJ1</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Clothing
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Big Kids
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Little Kids
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Baby & Toddler
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
                        Sport
                      </a>
                      <details className={clsx(styles.listDetail)}>
                        <SpaceIcon width="24px" height="24px" />
                        <div className={clsx(styles.dropDownDetailsContent)}>
                          {/* Basketball */}
                          <div className={clsx(styles.content)}>
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Basketball
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Shoes</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Apparel
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Equipment
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Kobe</p>
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
                                    NBA Gear
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    WNBA Gear
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    NCAA Gear
                                  </p>
                                </a>
                              </li>
                            </ul>
                            {/* Training */}
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Training
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Shoes</p>
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
                                    Apparel
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Equipment
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* Running */}
                          <div className={clsx(styles.content)}>
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Running
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Road</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Race</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Trail</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Track & Field
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Apparel
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Equipment
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Stride & Swift Collection
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Running Shoe Finder
                                  </p>
                                </a>
                              </li>
                            </ul>
                            {/* Football */}
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Football
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Cleats</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Apparel
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Equipment
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>NFL</p>
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
                        Sale
                      </a>
                      <details className={clsx(styles.listDetail)}>
                        <SpaceIcon width="24px" height="24px" />
                        <div className={clsx(styles.dropDownDetailsContent)}>
                          {/* Back to school sale */}
                          <div className={clsx(styles.content)}>
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Back to School Sale
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Extra 20% Off Select Styles
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* All Sale */}
                          <div className={clsx(styles.content)}>
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    All Sale
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
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Sale Clothing
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Sale Assessories
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* Men */}
                          <div className={clsx(styles.content)}>
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Men</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Shoes</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Clothing
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Assessories
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Shop All
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* Women */}
                          <div className={clsx(styles.content)}>
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Women</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Shoes</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Clothing
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Assessories
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Shop All
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* Kid */}
                          <div className={clsx(styles.content)}>
                            <ul>
                              <li className={clsx(styles.dropDownSubListTitle)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Kid</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>Shoes</p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Clothing
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Assessories
                                  </p>
                                </a>
                              </li>
                              <li className={clsx(styles.dropDownSubListItem)}>
                                <a href="#">
                                  <p className={clsx(styles.ndsText)}>
                                    Shop All
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
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
