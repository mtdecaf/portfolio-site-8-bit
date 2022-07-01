import { FaBackward } from "react-icons/fa";

import styles from "./BurgerMenu.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const BurgerMenu = ({ setNavIsOpen, router, handleRouteChange }) => {
  return (
    <div className={cx("burger-menu", "nes-container")}>
      <div className={cx("burger-menu__inner-wrap")}>
        <a
          className={cx(
            "burger-menu__button",
            "burger-menu__option",
            "burger-menu__home"
          )}
          onClick={() => handleRouteChange("")}
        >
          Jacky Cao
        </a>
        <a
          className={cx(
            "burger-menu__button",
            "burger-menu__option",
            "burger-menu__projects"
          )}
          onClick={() => handleRouteChange("projects")}
        >
          Projects -&gt;
        </a>

        <a
          className={cx(
            "burger-menu__button",
            "burger-menu__option",
            "burger-menu__about"
          )}
          onClick={() => handleRouteChange("about")}
        >
          About -&gt;
        </a>
        <div className={cx("burger-menu__close-wrap")}>
          <FaBackward
            className={cx("burger-menu__close")}
            onClick={() => setNavIsOpen(false)}
            size={64}
            color="#F8F8F8"
          />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
