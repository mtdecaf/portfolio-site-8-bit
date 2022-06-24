import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./PageNav.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const PAGE_NAV_MOBILE = 660;

const PageNav = () => {
  const hasWindow = typeof window !== "undefined";

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

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

  return mounted && windowWidth >= PAGE_NAV_MOBILE ? (
    <div className={cx("page-nav")}>
      <div className={cx("page-nav__inner-wrap")}>
        <a
          className={cx(
            "page-nav__button",
            "page-nav__option",
            "page-nav__projects"
          )}
          onClick={() => router.push("/projects", undefined, { shallow: true })}
        >
          &lt;- Projects
        </a>
        <a
          className={cx(
            "page-nav__button",
            "page-nav__option",
            "page-nav__home"
          )}
          onClick={() => router.push("/", undefined, { shallow: true })}
        >
          Jacky Cao
        </a>
        <a
          className={cx(
            "page-nav__button",
            "page-nav__option",
            "page-nav__about"
          )}
          onClick={() => router.push("/about", undefined, { shallow: true })}
        >
          About <span>-&gt;</span>{" "}
        </a>
      </div>
    </div>
  ) : mounted && windowWidth < PAGE_NAV_MOBILE ? (
    <div className={cx("page-nav")}>
      <div className={cx("page-nav__inner-wrap--small")}>
        <a
          className={cx("page-nav__button", "page-nav__home")}
          onClick={() => router.push("/", undefined, { shallow: true })}
        >
          Jacky Cao
        </a>
        <div className={cx("page-nav__options-wrap")}>
          <a
            className={cx(
              "page-nav__button",
              "page-nav__option",
              "page-nav__projects",
              "page-nav__projects--small"
            )}
            onClick={() =>
              router.push("/projects", undefined, { shallow: true })
            }
          >
            &lt;- Projects
          </a>
          <a
            className={cx(
              "page-nav__button",
              "page-nav__option",
              "page-nav__about",
              "page-nav__about--small"
            )}
            onClick={() => router.push("/about", undefined, { shallow: true })}
          >
            About <span>-&gt;</span>
          </a>
        </div>
      </div>
    </div>
  ) : null;
};

export default PageNav;
