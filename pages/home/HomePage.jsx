import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./HomePage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const HomePage = () => {
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
      <div className={cx("home-page")}>
        <img
          className={cx("home-page__background")}
          src="/images/night-city.gif"
          alt=""
        />
        <div className={cx("home-page__content")}>
          <motion.div
            className={cx("home-page__profile-wrap")}
            initial={"profileWrapInitial"}
            animate={"profileWrapAnimate"}
            transition={{ delay: 0, duration: 0.35 }}
            variants={{
              profileWrapInitial: {
                translateX: windowWidth >= 768 && "-5rem",
                translateY: windowWidth < 768 && "-5rem",
                opacity: 0,
              },
              profileWrapAnimate: {
                translateX: 0,
                translateY: 0,
                opacity: 1,
              },
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={cx("home-page__profile")}
                src="/images/profile.png"
                alt=""
              />
            </a>
            <div className={cx("home-page__profile-icon-wrap")}>
              <a
                href="https://github.com/mtdecaf"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={cx("home-page__profile-icon")}
                  src="/images/github.svg"
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jacky-cao-vancouver/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={cx("home-page__profile-icon")}
                  src="/images/linkedin.svg"
                  alt=""
                />
              </a>
            </div>
          </motion.div>
          <motion.div
            className={cx("home-page__intro-wrap")}
            initial={"introWrapInitial"}
            animate={"introWrapAnimate"}
            transition={{ delay: 0.5, duration: 0.35 }}
            variants={{
              introWrapInitial: {
                translateY: windowWidth >= 768 ? "-5rem" : "5rem",
                opacity: 0,
              },
              introWrapAnimate: { translateY: 0, opacity: 1 },
            }}
          >
            <p className={cx("home-page__intro-para1")}>
              Hi, My Name Is Jacky!
            </p>
            <p className={cx("home-page__intro-para2")}>
              I&#39;m A Software Developer
            </p>
            <p className={cx("home-page__intro-para3")}>Welcome To My Page</p>
          </motion.div>
        </div>
      </div>
    )
  );
};

export default HomePage;
