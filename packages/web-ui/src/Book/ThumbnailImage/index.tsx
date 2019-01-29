/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';

export interface ThumbnailImageProps {
  thumbnailUrl: string;
  thumbnailTitle?: string;
  className?: string;
}

export const ThumbnailImage: React.FunctionComponent<ThumbnailImageProps> = ({thumbnailUrl, thumbnailTitle='도서 표지', className}) => (
  <div className={className} css={styles.thumbnailImage}>
    <img
      css={styles.image}
      src={thumbnailUrl}
      alt={thumbnailTitle}
    />
  </div>
);
