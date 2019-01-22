/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';

export interface ThumbnailImageProps {
  thumbnailUrl: string;
}

export const ThumbnailImage: React.FunctionComponent<ThumbnailImageProps> = (props) => (
  <div css={styles.thumbnailImage}>
    <img
      css={styles.image}
      src={props.thumbnailUrl}
      alt="썸네일 이미지"
    />
  </div>
);
