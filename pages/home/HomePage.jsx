import styles from "./HomePage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const HomePage = () => {
    return (
        <div className={cx("home-page")}>
            home
        </div>
    )
}

export default HomePage;