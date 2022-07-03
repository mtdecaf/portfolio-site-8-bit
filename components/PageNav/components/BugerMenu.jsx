import { FaBackward } from "react-icons/fa";

import styles from "./BurgerMenu.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const BurgerMenu = ({ setNavIsOpen, router, handleRouteChange }) => {
  const currentRoute = router.route;

  return (
    <div className={cx("burger-menu", "nes-container")}>
      <div className={cx("burger-menu__inner-wrap")}>
        <button
          className={cx(
            "burger-menu__button",
            "burger-menu__option",
            "burger-menu__home",
            "nes-btn",
            currentRoute === "/" && "is-success"
          )}
          onClick={() => handleRouteChange("")}
        >
          Home
        </button>
        <button
          className={cx(
            "burger-menu__button",
            "burger-menu__option",
            "burger-menu__about",
            "nes-btn",
            currentRoute === "/about" && "is-success"
          )}
          onClick={() => handleRouteChange("about")}
        >
          About -&gt;
        </button>
        <button
          className={cx(
            "burger-menu__button",
            "burger-menu__option",
            "burger-menu__projects",
            "nes-btn",
            currentRoute === "/projects" && "is-success"
          )}
          onClick={() => handleRouteChange("projects")}
        >
          Projects -&gt;
        </button>

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
