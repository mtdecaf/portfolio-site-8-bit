import styles from "./ProfileCard.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ProfileCard = ({ mounted, windowWidth }) => {
  return (
    mounted && (
      <div
        className={cx(
          "profile-card",
          "nes-container",
          "with-title",
          "is-rounded"
        )}
      >
        <h1 className={cx("profile-card__title", "title")}>Developer Profile</h1>
        <div className={cx("profile-card__content")}>
          <div
            className={cx("profile-card__stats-wrap", "profile-card__content-child")}
          >
            <div
              className={cx("profile-card__stats-profile-wrap")}
            >
              <img
                className={cx("profile-card__stats-profile")}
                src="/images/profile.png"
                alt="Jacky Cao Profile Picture"
              />
            </div>
            <ul className={cx("profile-card__stats-list")} id="stats-section">
              <li className={cx("profile-card__stats-item")}>Name: Jacky Cao</li>
              <li className={cx("profile-card__stats-item")}>Race: Human</li>
              <li className={cx("profile-card__stats-item")}>Weaknesses: Boba</li>
              <li className={cx("profile-card__stats-item")}>Interests: Predictive Analytics, Web Development</li>
              <li className={cx("profile-card__stats-item")}>
                Skills: React JS, Next JS, SQL, TypeScript, Git, Python, C++,
                Jest, Java, OOP, REST APIs, TTD, Agile Development
              </li>
            </ul>
          </div>
          <div className={cx("profile-card__desc-wrap", "profile-card__content-child")} id="desc-section">
            <p className={cx("profile-card__desc")}>
              A Software Developer who specializes in web development and neural
              network. He is a self proclaimed boba &#34;connoisseur&#34; and
              won&#39;t stop talking about his love for the cyberpunk genre.
              Refrain from engaging in conversations regarding his favorate
              programming language or tech stack or risk being subjected to 8
              hrs of nerdy rant.
            </p>
            <p className={cx("profile-card__desc")}>
              The subject is an expert in javascript and c++. He has extensive
              experience in full stack web development. Excels at creating
              efficient solutions and is well versed in design patterns.
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default ProfileCard;
