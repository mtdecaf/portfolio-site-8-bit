import { useEffect, useState, useRef } from "react";
import Image from "next/image";

import styles from "./ProfileCard.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ProfileCard = ({ mounted }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const descRef = useRef(null);

  const onScroll = () => {
    const scrollTop = contentRef.current.scrollTop;
    setScrollPosition(scrollTop);
  };
  const scrollTo = (position) => {
    if (position === "up") {
      statsRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    if (position === "down") {
      descRef.current?.scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    mounted && (
      <div className={cx("profile-card", "container", "container-is-rounded")}>
        <h1
          className={cx("profile-card__title", "title", "is-container-title")}
        >
          Developer Profile
        </h1>
        <div
          className={cx("profile-card__content")}
          ref={contentRef}
          onScroll={onScroll}
        >
          <div
            className={cx(
              "profile-card__stats-wrap",
              "profile-card__content-child"
            )}
            ref={statsRef}
          >
            <div className={cx("profile-card__stats-profile-wrap")}>
              <img
                className={cx("profile-card__stats-profile")}
                src="/images/profile.png"
                alt="Jacky Cao Profile Picture"
              />
            </div>
            <ul className={cx("profile-card__stats-list")}>
              <li className={cx("profile-card__stats-item")}>
                Name: Jacky Cao
              </li>
              <li className={cx("profile-card__stats-item")}>Race: Human</li>
              <li className={cx("profile-card__stats-item")}>
                Weaknesses: Boba
              </li>
              <li className={cx("profile-card__stats-item")}>
                Interests: Predictive Analytics, Web Development
              </li>
              <li className={cx("profile-card__stats-item")}>
                Skills: React JS, Next JS, SQL, TypeScript, Git, Python, C++,
                Jest, Java, OOP, REST APIs, TTD, Agile Development
              </li>
            </ul>
          </div>
          <div
            className={cx(
              "profile-card__desc-wrap",
              "profile-card__content-child"
            )}
            ref={descRef}
          >
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
        <div className={cx("profile-card__scroll")}>
          <Image onClick={() => scrollTo("up")} className={cx("profile-card__scroll-icon")} src="/container-corner.svg" width="24" height="24" />
          <Image onClick={() => scrollTo("down")} className={cx("profile-card__scroll-icon")} src="/container-corner.svg" width="24" height="24" />
        </div>
      </div>
    )
  );
};

export default ProfileCard;
