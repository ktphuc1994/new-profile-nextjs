'use client';
// import types
import { MyCustomCSS, ProjectItem } from '@/types';

// import styles
import styles from './index.module.scss';

// import MUI components
import Chip from '@mui/material/Chip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import local components
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type ProjectDetailComponent = {
  project: ProjectItem;
  projectIndex?: number;
};

const ProjectDetail = ({ project, projectIndex }: ProjectDetailComponent) => {
  const [isDetailOpened, setIsDetailOpened] = useState(true);
  const [isExpandable, setIsExpandable] = useState(true);
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [scrollHeight, setScrollHeight] = useState('');
  const descRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const checkIndex =
    projectIndex === 0 || (projectIndex && projectIndex % 2 === 0);

  const expandCollapseDesc = () => {
    setIsDescExpanded(!isDescExpanded);
  };

  const openDetail = () => {
    setIsDetailOpened(!isDetailOpened);
    clearTimeout(timeoutRef.current);

    if (isDetailOpened) {
      timeoutRef.current = setTimeout(() => {
        setIsDescExpanded(false);
      }, 500);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setIsDescExpanded(true);
    }, 500);
  };

  useEffect(() => {
    if (!descRef.current) return;
    const checkOverflow =
      descRef.current.scrollHeight > descRef.current.clientHeight;
    setIsExpandable(checkOverflow);
    setScrollHeight(`${descRef.current.scrollHeight}px`);
  }, []);

  return (
    <div className={styles['project-detail']}>
      <div className='project-detail__libra' data-opened={isDetailOpened}>
        <div className='project-libra__wrapper'>
          <p className='project-libra__title project-title'>
            Library and Framework
          </p>
          <div className='project-libra__list'>
            {project.libraUsed.map((libra, index) => (
              <Chip label={libra} key={`libra-${index}`} />
            ))}
          </div>
        </div>
      </div>
      <div className='project-detail__name'>
        <div className='project-detail__name-wrapper' onClick={openDetail}>
          <Image
            src='/frames/project-frame-01.png'
            alt='project-frame'
            className={checkIndex ? 'flip-card' : ''}
            fill
            sizes='100%'
          ></Image>
          <span>{project.name}</span>
        </div>
      </div>
      <div className='project-detail__desc' data-opened={isDetailOpened}>
        <div
          className='project-desc__wrapper'
          data-expanded={isDescExpanded}
          data-expandable={isExpandable}
        >
          <p className='project-desc__title project-title'>Contribution</p>
          <div
            className={`project-desc__list`}
            style={{ '--scroll-height': scrollHeight } as MyCustomCSS}
            data-scroll-height={scrollHeight}
            ref={descRef}
          >
            {project.description.map((desc, index) => (
              <p key={`desc-${index}`}>{desc}</p>
            ))}
          </div>
          {isExpandable ? (
            <div
              className='project-desc__expand-btn'
              data-expanded={isDescExpanded}
              data-opened={isDetailOpened}
              onClick={expandCollapseDesc}
            >
              <ExpandMoreIcon className='expand-btn' />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
