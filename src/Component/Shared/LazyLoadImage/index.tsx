'use client';
import { SyntheticEvent, useState, useEffect, useRef } from 'react';

// import styles
import styles from './index.module.scss';

// import types and interfaces
import { InterfaceLazyLoadImage } from './interface';
import Image from 'next/image';

const LazyLoadImage = ({
  srcImage,
  loadingImage,
  alt,
  aspectRatio,
  isChangeImage,
}: InterfaceLazyLoadImage) => {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  let backgroundImage = 'none';
  if (loadingImage) {
    backgroundImage =
      typeof loadingImage === 'string'
        ? `url(${loadingImage})`
        : `url(${loadingImage.src})`;
  }

  const onImageLoaded = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    if (event.currentTarget.complete) {
      setLoaded(true);
    }
  };

  useEffect(() => {
    if (imageRef.current?.complete) return;
    setLoaded(false);
  }, [isChangeImage]);

  return (
    <div
      className={`${styles.lazyImage} ${loaded ? 'loaded' : ''}`}
      style={{
        aspectRatio: loaded ? 'auto' : aspectRatio,
        backgroundImage,
      }}
    >
      <Image
        loading='lazy'
        src={srcImage ?? ''}
        alt={alt ?? ''}
        onLoad={onImageLoaded}
        ref={imageRef}
      />
    </div>
  );
};

export default LazyLoadImage;
