/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';

export interface UnitBookDownloadingProps {
  size ?: styles.UnitBookDownloadingSize;
}

export const UnitBookDownloading: React.FunctionComponent<UnitBookDownloadingProps> = ({ size = styles.UnitBookDownloadingSize.Small }) => (
  <div css={styles.wrapper}>
    <div css={styles.downloading(size)}>
      <div css={styles.dotsWrapper}>
        <div css={styles.dot(size, 0)} />
        <div css={styles.dot(size, 1)} />
        <div css={styles.dot(size, 2)} />
      </div>
    </div>
  </div>
);
