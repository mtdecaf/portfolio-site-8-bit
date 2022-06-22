import ProfileCard from "../../components/ProfileCard/ProfileCard";

import styles from "./AboutPage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const AboutPage = () => {
  return (
    <div className={cx("about-page")}>
      <ProfileCard />
    </div>
  );
};

export default AboutPage;
