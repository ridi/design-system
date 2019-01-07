/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';

export interface UnitBookDownloadingProps {
  size ?: styles.UnitBookDownloadingSize;
}

const DotCount = 3;

export const UnitBookDownloading: React.FunctionComponent<UnitBookDownloadingProps> = ({ size = styles.UnitBookDownloadingSize.Small }) => (
  <div css={styles.wrapper}>
    <div css={styles.downloading(size)}>
      <div css={styles.dotsWrapper}>
        {Array.from(Array(DotCount).keys()).map(dotIndex => (
          <div key={dotIndex} css={styles.dot(size, dotIndex)} />
        ))}
      </div>
    </div>
  </div>
);
