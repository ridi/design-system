/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';

export interface ReadingProgressBarProps {
  readingProgress?: number;
}

export const ReadingProgressBar: React.FunctionComponent<ReadingProgressBarProps> = (props) => {
  if (props.readingProgress === undefined) { return null; }
  
  const readingProgress = Math.max(0, Math.min(100, props.readingProgress));
  const progressBarWidth = { width: `${readingProgress}%` };
  return (
    <p css={styles.readingProgressBar}>
      <span css={styles.title}>독서진행률</span>
      <span css={styles.percentage}>{readingProgress}%</span>
      <span css={styles.progressBG}>
        <span
          css={styles.progress}
          style={progressBarWidth}
        />
      </span>
    </p>
  );
};
