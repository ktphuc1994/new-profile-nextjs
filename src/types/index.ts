import { CSSProperties } from 'react';

export type MyCustomCSS = CSSProperties & {
  '--scroll-height': string;
  '--_item-color': string;
};

export type ProjectItem = {
  name: string;
  key: string;
  time: {
    start: string;
    end: string;
  };
  libraUsed: string[];
  description: string[];
};
