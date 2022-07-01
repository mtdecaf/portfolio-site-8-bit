import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MdMenu } from "react-icons/md";

import BurgerMenu from "./components/BugerMenu";

import styles from "./PageNav.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const PageNav = () => {
  const hasWindow = typeof window !== "undefined";
  const router = useRouter(false);

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [mounted, setMounted] = useState();

  function getWindowWidth() {
    const width = hasWindow ? window.innerWidth : null;
    return width;
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowWidth(getWindowWidth());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  const handleRouteChange = (param) => {
    router.push(`/${param}`, undefined, { shallow: true });
    navIsOpen && setNavIsOpen(false);
  }

  return mounted && windowWidth < 768 ? (
    <>
      {!navIsOpen && (
        <div className={cx("page-nav__burger-icon-wrap")}>
          <MdMenu
            size={48}
            color= "#212529"
            onClick={() => {
              console.log("clicked")
              setNavIsOpen(!navIsOpen);
            }}
          />
        </div>
      )}
      {navIsOpen && <BurgerMenu setNavIsOpen={setNavIsOpen} router={router} handleRouteChange={handleRouteChange} />}
    </>
  ) : mounted && windowWidth >= 768 ? (
    <div className={cx("page-nav", "nes-container")}>
      <div className={cx("page-nav__inner-wrap")}>
        <a
          className={cx(
            "page-nav__button",
            "page-nav__option",
            "page-nav__home"
          )}
          onClick={() => handleRouteChange("")}
        >
          Jacky Cao
        </a>
        <a
          className={cx(
            "page-nav__button",
            "page-nav__option",
            "page-nav__projects"
          )}
          onClick={() => handleRouteChange("projects")}
        >
          Projects -&gt;
        </a>

        <a
          className={cx(
            "page-nav__button",
            "page-nav__option",
            "page-nav__about"
          )}
          onClick={() => handleRouteChange("about")}
        >
          About -&gt;
        </a>
      </div>
    </div>
  ) : null;
};

export default PageNav;
