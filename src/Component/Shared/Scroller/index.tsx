'use client';
import { useEffect, useState } from 'react';

// import local styles
import styles from './index.module.scss';

const skillArray = [
  'HTML',
  'CSS',
  'JS',
  'SSG',
  'webdev',
  'animation',
  'UI/UX',
  'Lorem',
  'ipsum',
  'dolor',
  'sit',
];

type ScrollerComponent = {
  direction?: 'right' | 'left';
};

const Scroller = ({ direction = 'left' }: ScrollerComponent) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    setIsReducedMotion(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }, []);

  return (
    <div className={styles.scroller} data-direction={direction}>
      <div className='scroller__inner'>
        {skillArray.map((item, index) => (
          <div className='item-wrapper' key={item + index}>
            <span>{item}</span>
          </div>
        ))}
        {isReducedMotion
          ? null
          : skillArray.map((item, index) => (
              <div
                className='item-wrapper'
                aria-hidden={true}
                key={item + index}
              >
                <span>{item}</span>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Scroller;
