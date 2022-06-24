import styles from "./ProfileCard.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ProfileCard = ({ mounted, windowWidth }) => {
  return (
    mounted && (
      <div className={cx("profile-card")}>
        <div className={cx("profile-card__tab-wrap")}>
          <p className={cx("profile-card__tab")}>Developer Profile</p>
        </div>
        <div className={cx("profile-card__content")}>
          <div
            className={cx("profile-card__stats-wrap")}
            style={
              windowWidth < 425
                ? {
                    flexDirection: "column",
                    padding: "0 1rem",
                    fontSize: "0.9rem",
                  }
                : {}
            }
          >
            <div
              className={cx("profile-card__stats-profile-wrap")}
              style={windowWidth < 375 ? { width: "100%" } : {}}
            >
              <img
                className={cx("profile-card__stats-profile")}
                src="/images/profile.png"
                alt=""
                style={windowWidth < 375 ? { width: "6rem" } : {}}
              />
            </div>
            {/* {( */}
            <ul className={cx("profile-card__stats-list")}>
              <li className={cx("profile-card__stats-item")}>Race: Human</li>
              <li className={cx("profile-card__stats-item")}>weakness: Boba</li>
              <li className={cx("profile-card__stats-item")}>
                Skills: React JS, Next JS, SQL, TypeScript, Git, Python, C++,
                Jest, Java, OOP, REST APIs, TTD, Agile Development
              </li>
            </ul>
            {/* )} */}
          </div>
          <div className={cx("profile-card__desc-wrap")}>
            {windowWidth >= 500 ? (
              <>
                <p className={cx("profile-card__desc")}>
                  A Software Developer who specializes in web development and
                  neural network. He is a self proclaimed boba "connoisseur" and
                  won't stop talking about his love for the cyberpunk genre.
                  Refrain from engaging in conversations regarding his favorate
                  programming language or tech stack or risk being subjected to
                  8 hrs of nerdy rant.
                </p>
                <p className={cx("profile-card__desc")}>
                  The subject is an expert in javascript and c++. He has
                  extensive experience in full stack web development. Excels at
                  creating efficient solutions and is well versed in Recursive +
                  Dynamic Programming Algorithm.
                </p>
              </>
            ) : (
              <>
                <p className={cx("profile-card__desc--short")}>
                  A Software Developer who specializes in web
                  development and neural network. A boba "connoisseur" and a fan
                  of cyberpunk. Excels at creating efficient product solutions.
                </p>
                <p className={cx("profile-card__desc--sub")}>
                  &#40;View this on a larger screen for more info&#41;
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default ProfileCard;
