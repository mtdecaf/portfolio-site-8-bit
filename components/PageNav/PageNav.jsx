import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./PageNav.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const PageNav = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <div className={cx("page-nav")}>
        <div className={cx("page-nav__inner-wrap")}>
          {/* <Link href="/projects"> */}
            <a className={cx("page-nav__button", "page-nav__projects")} onClick={() => router.push('/projects', undefined, { shallow: true })}>
              &lt;- Projects
            </a>
          {/* </Link> */}
          {/* <Link href="/"> */}
            <a className={cx("page-nav__button", "page-nav__home")} onClick={() => router.push('/', undefined, { shallow: true })}>
              Jacky Cao
            </a>
          {/* </Link> */}
          {/* <Link href="/about"> */}
            <a className={cx("page-nav__button", "page-nav__about")} onClick={() => router.push('/about', undefined, { shallow: true })}>
              About -&gt;
            </a>
          {/* </Link> */}
        </div>
      </div>
    )
  );
};

export default PageNav;
