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

export const ExpiredAt: React.FunctionComponent<ExpiredAtProps> = (props) => (
  <p css={styles.expiredAt(props.size)}>
    <TimerIcon css={styles.expiredAtIcon(props.size)}/>
    {props.expiredAt}
  </p>
);
