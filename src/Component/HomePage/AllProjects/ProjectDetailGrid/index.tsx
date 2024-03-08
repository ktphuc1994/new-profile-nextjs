'use client';
// import styles and types
import styles from './index.module.scss';
import { MyCustomCSS, ProjectItem } from '@/types';

// import local constants
import { projectColor } from './project.const';
import { colorConst } from '@/constants';

// import local library
import dayjs from 'dayjs';

// import local components
import ProjectLink from './ProjectLink';

// import MUI components
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Chip from '@mui/material/Chip';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import YouTubeIcon from '@mui/icons-material/YouTube';

type ProjectDetailComponent = {
  project: ProjectItem;
  projectIndex: number;
};

const ProjectDetailGrid = ({
  project,
  projectIndex,
}: ProjectDetailComponent) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const isLeft = projectIndex % 2 === 0;
  const colorIndex = projectIndex % 5;
  const itemColor = projectColor[colorIndex] ?? colorConst.primary;

  return (
    <div
      className={styles['project-detail']}
      data-is-left={isLeft}
      data-is-small-screen={isSmallScreen}
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
              {dayjs(project.time).format('YYYY MMM')}
            </span>
          </div>
        </div>
        <div className='project-libra'>
          {project.libraUsed.map((libra, index) => (
            <Chip key={`libra-${index}`} label={libra} variant='outlined' />
          ))}
        </div>
        {project.contribution ? (
          <div className='project-desc'>
            {project.contribution.map((desc, index) => (
              <p className='project-desc__item' key={`desc-${index}`}>
                {desc}
              </p>
            ))}
          </div>
        ) : null}
        <div className='project-link'>
          {project.demo ? (
            <div className='project-link__wrapper project-link__demo'>
              <ProjectLink
                linkName={`${project.name} demo`}
                links={project.demo}
                Icon={OpenInBrowserIcon}
                isLeft={isLeft}
                isSmallScreen={isSmallScreen}
              />
            </div>
          ) : null}
          {project.git ? (
            <div className='project-link__wrapper project-link__git'>
              <ProjectLink
                linkName={`${project.name} git`}
                links={project.git}
                Icon={GitHubIcon}
                isLeft={isLeft}
                isSmallScreen={isSmallScreen}
              />
            </div>
          ) : null}
          {project.youtube ? (
            <div className='project-link__wrapper project-link__youtube'>
              <a href={project.youtube} target='_blank'>
                <YouTubeIcon fontSize='large' />
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailGrid;
