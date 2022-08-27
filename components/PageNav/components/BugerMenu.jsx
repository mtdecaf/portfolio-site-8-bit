import { FaBackward } from "react-icons/fa";

import styles from "./BurgerMenu.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const BurgerMenu = ({ setNavIsOpen, router, handleRouteChange }) => {
  const currentRoute = router.route;

  return (
    <div className={cx("burger-menu", "container")}>
      <div className={cx("burger-menu__inner-wrap")}>
        <button
          className={cx(
            "burger-menu__button",
            "burger-menu__option",
            "burger-menu__home",
            "button",
            currentRoute === "/" && "is-green"
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
            "button",
            currentRoute === "/about" && "is-green"
          )}
          onClick={() => handleRouteChange("about")}
        >
          About
        </button>
        <button
          className={cx(
            "burger-menu__button",
            "burger-menu__option",
            "burger-menu__projects",
            "button",
            currentRoute === "/projects" && "is-green"
          )}
          onClick={() => handleRouteChange("projects")}
        >
          Projects
        </button>
        <button
          className={cx(
            "burger-menu__button",
            "burger-menu__option",
            "burger-menu__blog",
            "button"
          )}
          onClick={() => window.open("https://medium.com/@JackyCaoVan")}
        >
          Blog
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
