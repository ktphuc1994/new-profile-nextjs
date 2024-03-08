// import styles and types
import { MyCustomCSS } from '@/types';
import styles from './ProjectLink.module.scss';

// import MUI components
import LinkIcon from '@mui/icons-material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import { useState } from 'react';

type SvgIconComponent = typeof SvgIcon;

type ProjectLinkComponent = {
  linkName: string;
  links: string[];
  Icon?: SvgIconComponent;
  isLeft?: boolean;
  isSmallScreen?: boolean;
};

const ProjectLink = ({
  linkName,
  links,
  Icon = LinkIcon,
  isLeft = true,
  isSmallScreen = false,
}: ProjectLinkComponent) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandedClass = isExpanded ? 'expanded' : 'collapse';
  const leftClass = isLeft ? 'align-left' : 'align-right';
  const smallScreenClass = isSmallScreen ? 'small-screen' : 'large-screen';

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (links.length === 0) return null;
  if (links.length === 1)
    return (
      <div className={styles.projectLink}>
        <a href={links[0]} className='link single-link' target='_blank'>
          <Icon
            fontSize='large'
            key={`link-${linkName}`}
            titleAccess={`${linkName} link`}
          />
        </a>
      </div>
    );

  return (
    <div
      className={`${styles.projectLink} ${expandedClass}
      ${leftClass} ${smallScreenClass} multi-link`}
    >
      <div className='links-anchor' onClick={handleExpand}>
        <Icon fontSize='large' />
      </div>
      <div
        className='links-wrapper'
        style={{ '--_total-item': links.length } as MyCustomCSS}
      >
        {links.map((link, linkIndex) => (
          <a href={link} className='link' target='_blank'>
            <Icon
              fontSize='large'
              key={`link-${linkName}-${linkIndex}`}
              titleAccess={`${linkName} link ${linkIndex + 1}`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectLink;
