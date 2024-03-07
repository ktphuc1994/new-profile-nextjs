'use client';
// import styles and types
import styles from './index.module.scss';
import { MyCustomCSS, ProjectItem } from '@/types';

// import local constants
import { projectColor } from './project.const';
import { colorConst } from '@/constants';

// import local library
import dayjs from 'dayjs';

// import MUI components
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type ProjectDetailComponent = {
  project: ProjectItem;
  projectIndex: number;
};

const ProjectDetailGrid = ({
  project,
  projectIndex,
}: ProjectDetailComponent) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('md'));

  const isLeft = projectIndex % 2 === 0;
  const colorIndex = projectIndex % 5;
  const itemColor = projectColor[colorIndex] ?? colorConst.primary;

  return (
    <div
      className={styles['project-detail']}
      data-is-left={isLeft}
      data-is-small-screen={!isSmallScreen}
      style={{ '--_item-color': itemColor } as MyCustomCSS}
      id={`project-item-${projectIndex}`}
    >
      <div className='project-detail__info'>
        <div className='project-name-date'>
          <div className='project-name'>
            <span>{project.name}</span>
          </div>
          <div className='project-date'>
            <span className='project-date__date'>
              {dayjs(project.time.start).format('YYYY MMM')}
            </span>
          </div>
        </div>
        <div className='project-libra'>
          {project.libraUsed.map((libra, index) => (
            <Chip key={`libra-${index}`} label={libra} variant='outlined' />
          ))}
        </div>
        <div className='project-desc'>
          {project.description.map((desc, index) => (
            <p key={`desc-${index}`}>{desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailGrid;
