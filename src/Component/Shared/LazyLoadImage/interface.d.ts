import { StaticImageData } from 'next/image';

export type InterfaceLazyLoadImage = {
  srcImage?: string | StaticImageData;
  loadingImage?: string | StaticImageData;
  aspectRatio?: string;
  alt?: string;
  isChangeImage?: boolean;
};
