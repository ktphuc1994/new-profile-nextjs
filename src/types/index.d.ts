import { CSSProperties } from 'react';

export type MyCustomCSS = CSSProperties & {
  '--scroll-height': string;
  '--_item-color': string;
  '--_total-item': number;
};

export type ProjectItem = {
  name: string;
  key: string;
  time: string;
  libraUsed: string[];
  description: string;
  contribution?: string[];
  demo?: string[];
  git?: string[];
  youtube: string | null;
};
