import ProjectsData from "/data/ProjectsData";

import styles from "./ProjectsPage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ProjectsPage = () => {
  const { projects } = ProjectsData;

  return (projects.length === 0 ? (
    <div className={cx("projects-page")}>
        <p className={cx("projects-page__msg")}>I am blaming Heroku for taking down all of my projects. More to come tho!</p>
    </div>
  ) :null)
};

export default ProjectsPage;
