import styles from "./HomePage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <div className={cx("home-page")}>
      <div className={cx("home-page__content")}>
        <img className={cx("home-page__content--background")} src="/images/night-city.gif" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
