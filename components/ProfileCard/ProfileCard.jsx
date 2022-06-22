import styles from "./ProfileCard.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ProfileCard = ({ mounted, windowWidth }) => {
  console.log(windowWidth);
  return (
    mounted && (
      <div className={cx("profile-card")}>
        <div className={cx("profile-card__border-wrap")}>
          <div className={cx("profile-card__content")}>
            <div className={cx("profile-card__stats-wrap")}>
              <div
                className={cx("profile-card__stats-profile-wrap")}
                style={windowWidth < 425 ? { width: "100%" }: {}}
              >
                <img
                  className={cx("profile-card__stats-profile")}
                  src="/images/profile.png"
                  alt=""
                />
              </div>
            </div>
            <div className={cx("profile-card__desc-wrap")}></div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProfileCard;
