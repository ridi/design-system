/** @jsx jsx */
import { jsx } from '@emotion/core';
import { timer as TimerIcon } from '@ridi/web-icons';
import * as React from 'react';
import { ThumbnailChildrenSize } from '../Thumbnail';
import * as styles from './styles';

export interface ExpiredAtProps {
  expiredAt: string;
  size?: ThumbnailChildrenSize;
}

export const ExpiredAt: React.FunctionComponent<ExpiredAtProps> = (props) => {
  const { expiredAt, size } = props;
  const isRemainTime = expiredAt.includes('남음');
  return (
    <p css={styles.expiredAt(size, isRemainTime)}>
      {isRemainTime && <TimerIcon css={styles.expiredAtIcon(size)}/>}
      {expiredAt}
    </p>
  );
};
