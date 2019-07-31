/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import TimerIcon from 'src/icons/Timer.svg';
import { ThumbnailChildrenSize } from '../Thumbnail';
import * as styles from './styles';

export interface ExpiredProps {
  size?: ThumbnailChildrenSize;
}

export const Expired: React.FunctionComponent<ExpiredProps> = (props) => (
  <p css={styles.expired(props.size)}>
    <TimerIcon css={styles.expiredIcon(props.size)}/>
    기간 만료
  </p>
);
