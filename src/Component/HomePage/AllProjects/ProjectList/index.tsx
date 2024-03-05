// import local types and styles
import { ProjectItem } from '@/types';
import styles from './index.module.scss';

// import local component
import ProjectDetailGrid from '../ProjectDetailGrid';

type ProjectListComponent = {
  projectList: ProjectItem[];
};

const ProjectList = ({ projectList }: ProjectListComponent) => {
  return (
    <>
      {/* <div className='project-list'>
        <h2>ProjectList</h2>
        {projectList.map((project, projectIndex) => (
          <ProjectDetail
            project={project}
            key={project.key}
            projectIndex={projectIndex}
          />
        ))}
      </div> */}
      <div className={styles['project-list']}>
        {projectList.map((project, projectIndex) => (
          <ProjectDetailGrid
            key={project.key}
            project={project}
            projectIndex={projectIndex}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectList;
