import { useState, useEffect } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

import styles from "./AboutPage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const AboutPage = () => {
  const hasWindow = typeof window !== "undefined";

  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

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

  return (
    mounted && (
      <div className={cx("about-page")}>
        <ProfileCard mounted={mounted} windowWidth={windowWidth} />
      </div>
    )
  );
};

export default AboutPage;
