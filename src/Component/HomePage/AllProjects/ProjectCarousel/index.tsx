'use client';
import { useEffect, useRef, useState } from 'react';

// import local styles
import styles from './index.module.scss';

// import types
import { ProjectItem } from '@/types';

// import MUI components
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

// import local components
import Image from 'next/image';

type ProjectCarouselComponent = {
  projectList: ProjectItem[];
};

const ProjectCarousel = ({ projectList }: ProjectCarouselComponent) => {
  const theme = useTheme();
  const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));

  const [isShownButton, setIsShownButton] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToCarousel = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollIntoView();
  };

  useEffect(() => {
    const _checkToShowButton = () => {
      if (!carouselRef.current) return;
      const isShown =
        carouselRef.current.getBoundingClientRect().top +
          carouselRef.current.clientHeight * 0.75 <=
        0;
      setIsShownButton(isShown);
    };
    _checkToShowButton();

    window.addEventListener('scroll', _checkToShowButton);
    return () => window.removeEventListener('scroll', _checkToShowButton);
  }, []);

  return (
    <div
      className={`${styles['project-carousel']} ${
        isLgScreen ? '' : 'full-view'
      }`}
      data-is-md-screen={isMdScreen}
      ref={carouselRef}
      id='project-carousel-id'
    >
      <div className='swiper-wrapper'>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={0}
          centerInsufficientSlides={true}
          touchRatio={1.5}
        >
          {projectList.map((project, projectIndex) => (
            <SwiperSlide key={project.key}>
              <a
                className='carousel-item'
                href={`#project-item-${projectIndex}`}
              >
                <Image
                  src={`/frames/circle-frame-${(
                    projectIndex + 1
                  ).toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}.png`}
                  alt={`frame-${projectIndex + 1}`}
                  fill
                  sizes='100%'
                />
                {/* <div className='project-name'>
                <i></i>
                <p>
                  Lorem ipsum dolor sit Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet.
                </p>
              </div> */}
                <div className='project-name'>
                  <p
                    className='project-name__title'
                    data-is-md-screen={isMdScreen}
                  >
                    {project.name.toUpperCase()}
                  </p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className='back-to-carousel'
        data-is-visible={isShownButton}
        onClick={scrollToCarousel}
      >
        <ExpandLessIcon />
      </div>
    </div>
  );
};

export default ProjectCarousel;
