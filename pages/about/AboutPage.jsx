import styles from "./AboutPage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const AboutPage = () => {
  return (
    <div className={cx("about-page")}>
      <div className={cx("about-page__card")}>
        <div className={cx("about-page__card-border-wrap")}>
            
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
