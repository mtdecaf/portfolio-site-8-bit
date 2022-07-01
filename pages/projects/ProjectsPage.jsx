import ProjectsData from "/data/ProjectsData";

import styles from "./ProjectsPage.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ProjectsPage = () => {
  const { projects } = ProjectsData;

  return (projects.length === 0 ? (
    <div className={cx("projects-page")}>
        <p className={cx("projects-page__msg")}>Whoops, you caught me at a bad time. There&#39;s no projects on display right now. I&#39;m sorry... Forgive me papa...</p>
    </div>
  ) :null)
};

export default ProjectsPage;
