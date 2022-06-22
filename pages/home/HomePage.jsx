import { motion } from "framer-motion";

import styles from "./HomePage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <div className={cx("home-page")}>
      <img
        className={cx("home-page__background")}
        src="/images/night-city.gif"
        alt=""
      />
      <div className={cx("home-page__content")}>
        <div className={cx("home-page__profile-wrap")}>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">
            <img
              className={cx("home-page__profile")}
              src="/images/profile.png"
              alt=""
            />
          </a>
          <div className={cx("home-page__profile-icon-wrap")}>
            <a href="https://github.com/mtdecaf" target="_blank">
              <img
                className={cx("home-page__profile-icon")}
                src="/images/github.svg"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jacky-cao-vancouver/"
              target="_blank"
            >
              <img
                className={cx("home-page__profile-icon")}
                src="/images/linkedin.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <motion.div
          className={cx("home-page__intro-wrap")}
          initial={{ translateY: "-5rem", opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className={cx("home-page__intro-para1")}>Hi, My Name Is Jacky!</p>
          <p className={cx("home-page__intro-para2")}>
            I'm A Software Developer
          </p>
          <p className={cx("home-page__intro-para3")}>Welcome To My Page</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
